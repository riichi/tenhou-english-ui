chrome.runtime.onInstalled.addListener(function(object) {
    // show options screen on install
    if (chrome.runtime.OnInstalledReason.INSTALL === object.reason) {
        chrome.runtime.openOptionsPage();
    }
});

// show the addon button for one tab
function showIconForTab(tab) {
    if (tab.url.includes("tenhou.net")) {
      chrome.pageAction.show(tab.id);
    }
}

// on initialisation, show the addon button for all tenhou tabs
chrome.tabs.query({ url: '*://tenhou.net/*' }, (tabs) => {
    for (let tab of tabs) {
      showIconForTab(tab);
    };
});

chrome.tabs.onUpdated.addListener((id, changeInfo, tab) => showIconForTab(tab));

let tileset = 'DEFAULT';
let sprites = {};
let sizes = [];
const tileSizePrefixes = { 0: '', 1: 'm', 2: 's' }; // descending size order

// retrieve the right spritesheets from those that are packed with the extension
function updateTileset(options, sender = null, sendResponse = null) {
    tileset = options.tileset;
    if (tileset === 'DEFAULT') return;
    for (let i = 0; i < 5; i++) {
        sprites[i] = {};
        sizes[i] = [];
        for (let size in tileSizePrefixes) {
            sprites[i][size] = new Image();
            sprites[i][size].src = chrome.runtime.getURL('sprites.' + tileset + '/' + i + tileSizePrefixes[size] + '.png');
            sprites[i][size].onload = (e) => {
                sizes[i][size] = e.originalTarget.width;
            };
        }
    }
}

// listen for messages about the user changing their options
chrome.runtime.onMessage.addListener(updateTileset);

// Replace tile sprite sheets with custom sprite sheets
chrome.webRequest.onBeforeRequest.addListener((details) => {
    /**
     * Group 1: Width of image
     * Group 2: Sprite ID
     * Group 3: Colour code
     */
    const spriteUrlRegex = /view([0-9]{3})([0-4])([0-9a-f]{20})\.png$/;
    const matches = spriteUrlRegex.exec(details.url);
    if (tileset === 'DEFAULT' || !matches || !sprites) return;

    const id = parseInt(matches[2]);
    if (sizes[id][0]) {
        const width = 10 * parseInt(matches[1]);
        let size = 0;
        for (let i = 1; i < sizes[id].length; i++) {
            if (width <= sizes[id][i]) {
                size = i;
            } else break;
        }
        console.log('requested ' + matches[1] + '-' + matches[2] + '; using ' + id + tileSizePrefixes[size] + ' ' + sizes[id][size]);
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = tileSheetHeightLookup[id][width];
        const canvas2d = canvas.getContext('2d');
        canvas2d.clearRect(0, 0, width + 1, canvas.height + 1);
        canvas2d.drawImage(sprites[id][size], 0, 0, width, canvas.height);
        return { redirectUrl: canvas.toDataURL() };
    }
}, {
    urls: ['*://p.mjv.jp/5/img/view*'],
    types: ['image'],
}, ["blocking"]);

// on load of extension
chrome.storage.local.get({ tileset: 'DEFAULT' }, (items) => updateTileset(items));