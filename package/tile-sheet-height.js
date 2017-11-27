const tileSheetHeightLookup = {
    0: {
        0: 4,
        20: 12,
        30: 16,
        40: 24,
        50: 28,
        60: 36,
        70: 40,
        80: 48,
        90: 52,
        100: 60,
        110: 64,
        120: 72,
        130: 76,
        140: 84,
        150: 88,
        160: 96,
        170: 100,
        180: 108,
        190: 112,
        200: 120,
        210: 124,
        220: 132,
        230: 136,
        240: 144,
        250: 148,
        260: 156,
        270: 160,
        280: 168,
        290: 172,
        300: 180,
        310: 188,
        320: 192,
        330: 200,
        340: 204,
        350: 212,
        360: 216,
        370: 224,
        380: 228,
        390: 236,
        400: 240,
        410: 248,
        420: 252,
        430: 260,
        440: 264,
        450: 272,
        460: 276,
        470: 284,
        480: 288,
        490: 296,
        500: 300,
        510: 308,
        520: 312,
        530: 320,
        540: 324,
        550: 332,
        560: 336,
        570: 344,
        580: 348,
        590: 356,
        600: 360,
        610: 368,
        620: 376,
        630: 380,
        640: 388,
        650: 392,
        660: 400,
        670: 404,
        680: 412,
        690: 416,
        700: 424,
        710: 428,
        720: 436,
        730: 440,
        740: 448,
        750: 452,
        760: 460,
        770: 464,
        780: 472,
        790: 476,
        800: 484,
        810: 488,
        820: 496,
        830: 500,
        840: 508,
        850: 512,
        860: 520,
        870: 524,
        880: 532,
        890: 536,
        900: 544,
        910: 548,
        920: 556,
        930: 564,
        940: 568,
        950: 576,
        960: 580,
        970: 588,
        980: 592,
        990: 600,
        1000: 604,
        1010: 612,
        1020: 616,
        1030: 624,
        1040: 628,
        1050: 636,
        1060: 640,
        1070: 648,
        1080: 652,
        1090: 660,
        1100: 664,
        1110: 672,
        1120: 676,
        1130: 684,
        1140: 688,
        1150: 696,
        1160: 700,
        1170: 708,
        1180: 712,
        1190: 720,
        1200: 724,
        1210: 732,
        1220: 736,
        1230: 744,
        1240: 752,
        1250: 756,
        1260: 764,
        1270: 768,
        1280: 776,
        1290: 780,
        1300: 788,
        1310: 792,
        1320: 800,
        1330: 804,
        1340: 812,
        1350: 816,
        1360: 824,
        1370: 828,
        1380: 836,
        1390: 840,
        1400: 848,
        1410: 852,
        1420: 860,
        1430: 864,
        1440: 872,
        1450: 876,
        1460: 884,
        1470: 888,
        1480: 896,
        1490: 900,
        1500: 908,
        1510: 912,
        1520: 920,
        1530: 924,
        1540: 932,
        1550: 940,
        1560: 944,
        1570: 952,
        1580: 956,
        1590: 964,
        1600: 968,
        1610: 976,
        1620: 980,
        1630: 988,
        1640: 992,
        1650: 1000,
        1660: 1004,
        1670: 1012,
        1680: 1016,
    },
    1: {
        20: 4,
        30: 8,
        40: 12,
        50: 16,
        60: 20,
        70: 24,
        80: 28,
        90: 32,
        100: 36,
        110: 40,
        120: 44,
        130: 48,
        140: 48,
        150: 52,
        160: 56,
        170: 60,
        180: 64,
        190: 68,
        200: 72,
        210: 76,
        220: 80,
        230: 84,
        240: 88,
        250: 92,
        260: 96,
        270: 96,
        280: 100,
        290: 104,
        300: 108,
        310: 112,
        320: 116,
        330: 120,
        340: 124,
        350: 128,
        360: 132,
        370: 136,
        380: 140,
        390: 144,
        400: 148,
        410: 148,
        420: 152,
        430: 156,
        440: 160,
        450: 164,
        460: 168,
        470: 172,
        480: 176,
        490: 180,
        500: 184,
        510: 188,
        520: 192,
        530: 196,
        540: 196,
        550: 200,
        560: 204,
        570: 208,
        580: 212,
        590: 216,
        600: 220,
        610: 224,
        620: 228,
        630: 232,
        640: 236,
        650: 240,
        660: 244,
        670: 244,
        680: 248,
        690: 252,
        700: 256,
        710: 260,
        720: 264,
        730: 268,
        740: 272,
        750: 276,
        760: 280,
        770: 284,
        780: 288,
        790: 292,
        800: 296,
        810: 296,
        820: 300,
        830: 304,
        840: 308,
        850: 312,
        860: 316,
        870: 320,
        880: 324,
        890: 328,
        900: 332,
        910: 336,
        920: 340,
        930: 344,
        940: 344,
        950: 348,
        960: 352,
        970: 356,
        980: 360,
        990: 364,
        1000: 368,
        1010: 372,
        1020: 376,
        1030: 380,
        1040: 384,
        1050: 388,
        1060: 392,
        1070: 392,
        1080: 396,
        1090: 400,
        1100: 404,
        1110: 408,
        1120: 412,
        1130: 416,
        1140: 420,
        1150: 424,
        1160: 428,
        1170: 432,
        1180: 436,
        1190: 440,
        1200: 444,
        1210: 444,
        1220: 448,
        1230: 452,
        1240: 456,
        1250: 460,
        1260: 464,
        1270: 468,
        1280: 472,
        1290: 476,
        1300: 480,
        1310: 484,
        1320: 488,
        1330: 492,
        1340: 492,
        1350: 496,
        1360: 500,
        1370: 504,
        1380: 508,
        1390: 512,
        1400: 516,
        1410: 520,
        1420: 524,
        1430: 528,
        1440: 532,
        1450: 536,
        1460: 540,
        1470: 540,
        1480: 544,
        1490: 548,
        1500: 552,
        1510: 556,
        1520: 560,
        1530: 564,
        1540: 568,
        1550: 572,
        1560: 576,
        1570: 580,
        1580: 584,
        1590: 588,
        1600: 592,
        1610: 592,
        1620: 596,
        1630: 600,
        1640: 604,
        1650: 608,
        1660: 612,
        1670: 616,
        1680: 620,
    },
    2: {
        10: 4,
        20: 12,
        30: 16,
        40: 24,
        50: 28,
        60: 36,
        70: 40,
        80: 48,
        90: 52,
        100: 60,
        110: 64,
        120: 72,
        130: 76,
        140: 84,
        150: 88,
        160: 96,
        170: 100,
        180: 108,
        190: 112,
        200: 120,
        210: 124,
        220: 132,
        230: 136,
        240: 144,
        250: 148,
        260: 156,
        270: 160,
        280: 168,
        290: 172,
        300: 180,
        310: 188,
        320: 192,
        330: 200,
        340: 204,
        350: 212,
        360: 216,
        370: 224,
        380: 228,
        390: 236,
        400: 240,
        410: 248,
        420: 252,
        430: 260,
        440: 264,
        450: 272,
        460: 276,
        470: 284,
        480: 288,
        490: 296,
        500: 300,
        510: 308,
        520: 312,
        530: 320,
        540: 324,
        550: 332,
        560: 336,
        570: 344,
        580: 348,
        590: 356,
        600: 360,
        610: 368,
        620: 376,
        630: 380,
        640: 388,
        650: 392,
        660: 400,
        670: 404,
        680: 412,
        690: 416,
        700: 424,
        710: 428,
        720: 436,
        730: 440,
        740: 448,
        750: 452,
        760: 460,
        770: 464,
        780: 472,
        790: 476,
        800: 484,
        810: 488,
        820: 496,
        830: 500,
        840: 508,
        850: 512,
        860: 520,
        870: 524,
        880: 532,
        890: 536,
        900: 544,
        910: 548,
        920: 556,
        930: 564,
        940: 568,
        950: 576,
        960: 580,
        970: 588,
        980: 592,
        990: 600,
        1000: 604,
        1010: 612,
        1020: 616,
        1030: 624,
        1040: 628,
        1050: 636,
        1060: 640,
        1070: 648,
        1080: 652,
        1090: 660,
        1100: 664,
        1110: 672,
        1120: 676,
        1130: 684,
        1140: 688,
        1150: 696,
        1160: 700,
        1170: 708,
        1180: 712,
        1190: 720,
        1200: 724,
        1210: 732,
        1220: 736,
        1230: 744,
        1240: 752,
        1250: 756,
        1260: 764,
        1270: 768,
        1280: 776,
        1290: 780,
        1300: 788,
        1310: 792,
        1320: 800,
        1330: 804,
        1340: 812,
        1350: 816,
        1360: 824,
        1370: 828,
        1380: 836,
        1390: 840,
        1400: 848,
        1410: 852,
        1420: 860,
        1430: 864,
        1440: 872,
        1450: 876,
        1460: 884,
        1470: 888,
        1480: 896,
        1490: 900,
        1500: 908,
        1510: 912,
        1520: 920,
        1530: 924,
        1540: 932,
        1550: 940,
        1560: 944,
        1570: 952,
        1580: 956,
        1590: 964,
        1600: 968,
        1610: 976,
        1620: 980,
        1630: 988,
        1640: 992,
        1650: 1000,
        1660: 1004,
        1670: 1012,
        1680: 1016,
    },
    3: {
        20: 4,
        30: 8,
        40: 12,
        50: 16,
        60: 20,
        70: 24,
        80: 28,
        90: 32,
        100: 36,
        110: 40,
        120: 44,
        130: 48,
        140: 48,
        150: 52,
        160: 56,
        170: 60,
        180: 64,
        190: 68,
        200: 72,
        210: 76,
        220: 80,
        230: 84,
        240: 88,
        250: 92,
        260: 96,
        270: 96,
        280: 100,
        290: 104,
        300: 108,
        310: 112,
        320: 116,
        330: 120,
        340: 124,
        350: 128,
        360: 132,
        370: 136,
        380: 140,
        390: 144,
        400: 148,
        410: 148,
        420: 152,
        430: 156,
        440: 160,
        450: 164,
        460: 168,
        470: 172,
        480: 176,
        490: 180,
        500: 184,
        510: 188,
        520: 192,
        530: 196,
        540: 196,
        550: 200,
        560: 204,
        570: 208,
        580: 212,
        590: 216,
        600: 220,
        610: 224,
        620: 228,
        630: 232,
        640: 236,
        650: 240,
        660: 244,
        670: 244,
        680: 248,
        690: 252,
        700: 256,
        710: 260,
        720: 264,
        730: 268,
        740: 272,
        750: 276,
        760: 280,
        770: 284,
        780: 288,
        790: 292,
        800: 296,
        810: 296,
        820: 300,
        830: 304,
        840: 308,
        850: 312,
        860: 316,
        870: 320,
        880: 324,
        890: 328,
        900: 332,
        910: 336,
        920: 340,
        930: 344,
        940: 344,
        950: 348,
        960: 352,
        970: 356,
        980: 360,
        990: 364,
        1000: 368,
        1010: 372,
        1020: 376,
        1030: 380,
        1040: 384,
        1050: 388,
        1060: 392,
        1070: 392,
        1080: 396,
        1090: 400,
        1100: 404,
        1110: 408,
        1120: 412,
        1130: 416,
        1140: 420,
        1150: 424,
        1160: 428,
        1170: 432,
        1180: 436,
        1190: 440,
        1200: 444,
        1210: 444,
        1220: 448,
        1230: 452,
        1240: 456,
        1250: 460,
        1260: 464,
        1270: 468,
        1280: 472,
        1290: 476,
        1300: 480,
        1310: 484,
        1320: 488,
        1330: 492,
        1340: 492,
        1350: 496,
        1360: 500,
        1370: 504,
        1380: 508,
        1390: 512,
        1400: 516,
        1410: 520,
        1420: 524,
        1430: 528,
        1440: 532,
        1450: 536,
        1460: 540,
        1470: 540,
        1480: 544,
        1490: 548,
        1500: 552,
        1510: 556,
        1520: 560,
        1530: 564,
        1540: 568,
        1550: 572,
        1560: 576,
        1570: 580,
        1580: 584,
        1590: 588,
        1600: 592,
        1610: 592,
        1620: 596,
        1630: 600,
        1640: 604,
        1650: 608,
        1660: 612,
        1670: 616,
        1680: 620,
    },
    4: {
        10: 4,
        20: 12,
        30: 16,
        40: 24,
        50: 28,
        60: 36,
        70: 40,
        80: 48,
        90: 52,
        100: 60,
        110: 64,
        120: 72,
        130: 76,
        140: 84,
        150: 88,
        160: 96,
        170: 100,
        180: 108,
        190: 112,
        200: 120,
        210: 124,
        220: 132,
        230: 136,
        240: 144,
        250: 148,
        260: 156,
        270: 160,
        280: 168,
        290: 172,
        300: 180,
        310: 188,
        320: 192,
        330: 200,
        340: 204,
        350: 212,
        360: 216,
        370: 224,
        380: 228,
        390: 236,
        400: 240,
        410: 248,
        420: 252,
        430: 260,
        440: 264,
        450: 272,
        460: 276,
        470: 284,
        480: 288,
        490: 296,
        500: 300,
        510: 308,
        520: 312,
        530: 320,
        540: 324,
        550: 332,
        560: 336,
        570: 344,
        580: 348,
        590: 356,
        600: 360,
        610: 368,
        620: 376,
        630: 380,
        640: 388,
        650: 392,
        660: 400,
        670: 404,
        680: 412,
        690: 416,
        700: 424,
        710: 428,
        720: 436,
        730: 440,
        740: 448,
        750: 452,
        760: 460,
        770: 464,
        780: 472,
        790: 476,
        800: 484,
        810: 488,
        820: 496,
        830: 500,
        840: 508,
        850: 512,
        860: 520,
        870: 524,
        880: 532,
        890: 536,
        900: 544,
        910: 548,
        920: 556,
        930: 564,
        940: 568,
        950: 576,
        960: 580,
        970: 588,
        980: 592,
        990: 600,
        1000: 604,
        1010: 612,
        1020: 616,
        1030: 624,
        1040: 628,
        1050: 636,
        1060: 640,
        1070: 648,
        1080: 652,
        1090: 660,
        1100: 664,
        1110: 672,
        1120: 676,
        1130: 684,
        1140: 688,
        1150: 696,
        1160: 700,
        1170: 708,
        1180: 712,
        1190: 720,
        1200: 724,
        1210: 732,
        1220: 736,
        1230: 744,
        1240: 752,
        1250: 756,
        1260: 764,
        1270: 768,
        1280: 776,
        1290: 780,
        1300: 788,
        1310: 792,
        1320: 800,
        1330: 804,
        1340: 812,
        1350: 816,
        1360: 824,
        1370: 828,
        1380: 836,
        1390: 840,
        1400: 848,
        1410: 852,
        1420: 860,
        1430: 864,
        1440: 872,
        1450: 876,
        1460: 884,
        1470: 888,
        1480: 896,
        1490: 900,
        1500: 908,
        1510: 912,
        1520: 920,
        1530: 924,
        1540: 932,
        1550: 940,
        1560: 944,
        1570: 952,
        1580: 956,
        1590: 964,
        1600: 968,
        1610: 976,
        1620: 980,
        1630: 988,
        1640: 992,
        1650: 1000,
        1660: 1004,
        1670: 1012,
        1680: 1016,
    },
};
