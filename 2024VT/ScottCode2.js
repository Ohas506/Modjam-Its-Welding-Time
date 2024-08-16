
// Generated mapping code
(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=370,u=215,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-323, -89, 92, 989, false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={Windsor:"M 316.53 368.69 316.79 374.59 321.53 376.78 322.07 379.38 320.91 381.84 336.32 387.65 337.07 386.51 363.55 396.67 400.03 412.05 399.73 412.53 413.77 416.44 430.37 421.64 464.3 435.2 460.52 437.87 456.99 444.03 454.24 445.04 446.62 450.48 440.5 457.9 439.1 461.72 438.89 465.99 439.63 467.72 438.96 471.74 436.88 475.36 436.58 480.58 433.51 482.12 431.67 489.87 433.32 492.54 432.28 495.15 427.84 499.21 421.9 502.03 420.19 504.13 419.57 507.44 420.15 515.53 417.94 519.93 416.64 520.23 415.55 525.1 416.12 526.97 419.05 529.68 420.04 532.07 419.84 536.7 417.07 541.94 417.6 546.76 416.32 551.18 414.26 567.41 411.89 570.07 411.18 572.78 411.84 577.58 417.56 580.27 415 583.48 412.62 588.39 416.42 594.89 414.85 598.24 413.28 605.38 409.79 612.16 406.32 613.89 405.37 618.85 406.69 622.75 377.29 621.75 344.89 625.82 342.55 626.34 324.37 620.34 308.39 614.6 308.38 599.5 295.97 599.04 296.98 582.28 299.59 582.09 300.22 572.69 307.95 572.91 307.97 571.21 324.07 580.77 323.11 574.46 329.24 558.6 333.31 543.62 332.89 540.8 320.94 537.06 321.52 532.64 316.24 531.56 318.34 514.37 321.03 497.96 324.46 499.25 331.47 484.15 339.28 465.46 308.92 454.18 313.01 445.74 309.14 443.86 318.41 423.8 316.08 419.45 316.3 417.32 314.89 415.03 306.39 411.53 304.43 414.96 295.48 411.31 295.36 404.89 273.79 415.92 270.55 401.73 268.7 402.69 268.76 396.09 275.54 398.94 294.91 389.32 295.45 402.8 297.69 403.65 310.13 377.18 311.73 377.78 316.53 368.69 Z", Essex:"M 538.38 3.99 570.99 2.58 589.67 2.41 609.96 1.75 622.15 1.67 645.89 1 642.48 3.19 641.98 4.99 639.73 5.43 636.09 3.01 631.04 5.26 628.25 7.85 627.67 10.41 630.72 15.95 633.31 18.42 633.07 23.74 633.67 31.36 636.42 34.06 638.56 37.58 634.15 43.12 633.03 46.04 629.23 51.43 626.47 52.62 626.01 55.9 624.08 59.31 625.31 62.26 623.77 63.78 622.47 67.6 619.72 68.55 619.11 71.42 620.96 73.13 619.89 76.45 620.36 78.05 618.31 81.08 615.15 81.83 614.53 84.36 610.43 88.26 609.24 91.08 605.48 92.45 607.19 95.82 606.97 100.6 613.89 109.5 615.07 111.69 614.14 113.5 615.1 116.26 614.66 118.42 617.14 119.54 617.31 125.27 619.06 127.66 623.04 127.13 624.32 131 622.99 132.6 625.79 134.86 624.74 138.53 625.51 142.45 623.85 145.44 625.63 147.72 629 148.79 629.69 150.43 627.39 153.05 626.72 155.9 624.33 157.74 621.71 158.35 617.19 157.35 615.1 159.08 614.88 161.54 620.59 166.08 620.6 169.17 618.53 172.12 615.72 172.73 618.62 177.4 620.14 178.81 615.59 182.58 614.59 185.08 609.97 185.28 608.34 189.01 606.11 187.98 603.26 189.06 603.66 194.14 601.4 194.19 599.68 200.85 598.76 202.14 594.82 203.38 595.66 205.33 589.17 210.58 586.08 212.09 580.58 212.19 579.18 215 575.72 213.29 573.5 213.25 570.11 215.64 567.09 215.51 564.2 217.93 564.84 220.51 561.22 221.94 560.79 227 561.79 230.51 560.2 232.05 555.48 233.9 531.37 201.55 538.82 196.76 550.34 182.2 537.17 164.31 553.59 142.26 536.6 129.86 554.61 105.5 529.07 87.21 520.2 81.07 531.4 66.23 533.71 63.68 544.04 49.02 533.5 41.17 538.38 3.99 Z", Washington:"M 276.34 299.15 290.89 258.58 288.15 257.71 299.48 227.69 306.61 230.56 308.29 230.47 314.23 220.2 304.89 214.99 313.69 198.15 323.49 201.35 334.87 207.55 351.24 216.92 364.78 190.58 365.53 188.7 391.42 208.01 393.63 202.73 397.99 195.04 406.25 179.43 458.82 207.58 460.51 212.3 447.33 237.05 435.67 251.57 435.74 260.81 422.7 284.64 410.07 278.77 404.03 310.81 400.98 309.23 374.83 298.93 373.76 301.76 368.09 299.85 357.38 325.06 356.03 324.54 343.81 351.16 328.89 345.26 302.17 334.42 290.07 329.78 285.07 330.37 283.86 322.41 281.36 301.23 280.89 298.68 276.34 299.15 Z", Windham:"M 308.39 614.6 324.37 620.34 342.55 626.34 344.89 625.82 377.29 621.75 406.69 622.75 404.98 627.62 405.7 633.29 402.49 636.87 404.16 640.44 401.92 643.96 402.18 649.87 400.82 652.86 402.07 655.52 404.9 656.61 404.38 658.56 406.93 662.23 406.45 665.62 404.36 668.78 406.37 673.73 403.82 679.05 399.06 683.91 398.16 685.56 399.98 689.73 399.28 693.96 400.8 697.88 403.98 700.21 402.93 703.49 400.06 703.87 398.68 707.53 399.63 709.85 396.51 713.63 394.5 712.96 391.71 715.16 385.1 716.72 381.58 719.58 380.97 721.34 383 724.82 382.88 728.76 383.61 732.27 382.07 734.68 381.75 739.43 379.38 742.41 376.27 743.95 375.4 750.22 375.91 752.63 375.14 755.07 377.36 758.9 378.33 766.41 379.65 771.85 385.1 776.79 387.54 780.53 387.67 782.38 385.52 784.44 386.45 786.13 392.09 783.12 395.99 788.26 396.73 792.37 399.83 796.79 400.47 799 359.92 797.46 310.4 795.47 279.32 794.44 280.37 765.12 280.18 762.87 281.37 733.17 281.27 728.89 259.68 727.68 261.16 695.27 261.8 695.31 261.61 677.36 263.18 662.19 275.32 662.68 288.12 663.74 295.79 664.02 297.48 632.24 300.16 632.39 301.14 612.19 308.39 614.6 Z", Bennington:"M 197.78 593.52 219.65 594.79 238.98 596.49 250.63 596.52 265.7 597.33 264.46 602.3 268.65 602.38 268.83 597.64 295.97 599.04 308.38 599.5 308.39 614.6 301.14 612.19 300.16 632.39 297.48 632.24 295.79 664.02 288.12 663.74 275.32 662.68 263.18 662.19 261.61 677.36 261.8 695.31 261.16 695.27 259.68 727.68 281.27 728.89 281.37 733.17 280.18 762.87 280.37 765.12 279.32 794.44 190.38 791.41 186.83 771.92 188.71 767.77 187.88 765.58 188.36 760.73 190.08 760.98 191.02 738.76 191.5 723.75 193.01 690.49 194.27 669.5 196.45 622.97 197.11 612.75 197.78 593.52 Z", Grand:"M 178.77 13.02 178.36 10.68 181.29 2.52 204.5 2.29 214.22 2.06 211.98 11.05 210.72 12.68 207.94 18.68 202.46 20.51 200.43 22.29 201.81 28.46 199.04 33.09 198.13 36.31 199.16 37.51 198.64 41.21 195.24 52.83 193.21 54.36 188.94 52.05 188.96 50.34 190.94 46.08 190.42 40.49 188.38 39.42 188.37 35.7 189.47 32.68 188.5 27.35 190.22 22.41 190.69 18.06 188.72 12.36 181.89 11.77 178.77 13.02 Z M 198.6 54.17 197.81 47.54 199.5 43.29 201.33 42.7 205.54 34.38 206.67 34.14 208.26 37.77 208.58 46.88 205.4 47.94 203.55 50.37 203.93 53.52 202.32 55.23 201.88 57.92 198.26 66.1 196.61 68.99 194.59 69.77 193.88 78.22 194.27 82.73 192.42 86.67 190.62 84.84 189.22 87.51 185.91 87.85 185.01 86.16 185.47 82.89 187.48 79.95 188.18 76.59 187.63 70.22 188.7 67.76 191.09 69.4 192.66 65.21 195.6 65.54 197.08 64.1 197.68 61.09 195.44 59.47 196.23 54.85 198.6 54.17 Z M 206.55 67.63 207.37 64.73 211.19 59.99 212.6 60.87 213.18 63.63 210.47 63.65 207.62 69.07 206.55 67.63 Z M 199.78 92.38 202.61 96.53 201.84 100.75 195.21 103.3 194.88 108.25 193.25 113.32 193.55 114.87 190.93 119.79 186.47 122.05 186.41 126.44 187.97 128.28 191.98 128.06 193.21 127.16 194.56 121.69 196.22 123.66 197.19 128.38 199.41 131.65 199.01 134.78 197.08 136.18 196.31 141.55 192.13 141.76 190.69 146.05 188 145.98 187.36 143.41 185.42 141.04 185 138.4 178.28 137.19 178.85 132.38 178.47 118.27 177.9 111.32 183.55 95.74 185.04 96.02 187.86 92.65 190.73 94.51 193.44 93.88 194.46 87.83 198 87.69 199.78 92.38 Z M 181.33 65.27 179.87 66.01 176.74 64.26 177.04 61.62 175.17 59.6 176.15 57.76 177.4 48.25 180.57 38.94 187.05 40.63 187.6 43.42 184.64 51.52 185.84 54.44 183.47 57.2 184.43 58.39 182.16 61.66 181.33 65.27 Z", Orleans:"M 376.49 4.5 381.78 4.64 394.51 4.29 402.46 4.41 414.23 5.07 427.27 5.39 436.79 6 446.49 5.85 473.78 5.05 487.99 5.19 507.72 4.67 526.54 4.01 538.38 3.99 533.5 41.17 544.04 49.02 533.71 63.68 531.4 66.23 520.2 81.07 529.07 87.21 514.23 107.65 511.3 111.92 485.62 94.3 491.96 116.82 477.84 110.12 476.86 112.44 463.89 138.18 462.74 140.75 448.94 166.65 439.06 161.46 423.07 153.37 421.24 152.2 421.93 149.01 394.1 134.83 410.33 103.87 389.6 93.55 370.18 83.69 381.56 65.17 379.57 33.16 380.78 33.12 376.49 4.5 Z", Lamoille:"M 370.18 83.69 389.6 93.55 410.33 103.87 394.1 134.83 421.93 149.01 421.24 152.2 407.66 177.15 406.25 179.43 397.99 195.04 393.63 202.73 391.42 208.01 365.53 188.7 364.78 190.58 351.24 216.92 334.87 207.55 323.49 201.35 313.69 198.15 305.35 195.54 314.06 179.21 307.31 175.65 312.54 165.12 308.29 163.72 300.51 153.57 287.76 135.58 284.32 134.86 283.47 130.5 289.52 130.31 292.3 127.09 302.61 107.81 316.89 115 320.4 96.49 321.64 96.73 323.1 89.13 325.6 89.61 326.48 84.95 328.78 85.35 328.53 80.41 332.95 75.56 361.62 76.88 360.84 78.47 365.51 81.54 366.38 80.41 370.18 83.69 Z", Addison:"M 276.34 299.15 280.89 298.68 281.36 301.23 283.86 322.41 285.07 330.37 290.07 329.78 302.17 334.42 328.89 345.26 325.89 351.39 316.53 368.69 311.73 377.78 310.13 377.18 297.69 403.65 295.45 402.8 294.91 389.32 275.54 398.94 268.76 396.09 268.7 402.69 270.55 401.73 273.79 415.92 259.27 423.22 256.9 410.22 256.12 408.62 224.27 409.93 224.41 410.85 208.41 411.55 211.39 436.13 173.51 440.3 176.48 437.18 176.73 432.79 174.92 430.45 174.11 426.47 171.04 425.3 168.45 420.29 165.17 416.3 167.93 411.82 169.9 412.13 170.87 408.38 169.73 403.91 171.2 400.8 171.13 396.86 169.52 394.56 169.39 388.64 164.64 386.51 164.86 380.04 162.72 379.26 162.39 377.07 163.83 374.21 162.48 372.11 162.06 364.94 161.43 363.03 163.74 360.39 162.68 356.16 164.33 352.56 165.15 348.61 162.72 345 158.32 342.36 157.53 337.79 160.51 332.17 159.72 329.01 164.51 322.77 167.01 321.3 166.53 317.79 167.43 314.48 171.55 308.98 174.04 297.6 176.23 293.2 171.2 290.87 171.67 287.33 174.87 284.88 176.28 281.41 179.33 279.01 184.41 278.8 185.98 275.37 185.21 271.85 187.59 270.43 194.12 270.63 194.94 275.06 196.8 275.09 195.39 271.14 198.68 271.15 197.92 268.79 194.72 266.89 196.73 264.17 215.27 262.07 226.46 260.14 246.92 256.33 247.06 257.69 260.47 255.88 259.54 249.48 270.66 252.58 273.15 274.76 276.34 299.15 Z", Franklin:"M 376.49 4.5 380.78 33.12 379.57 33.16 381.56 65.17 370.18 83.69 366.38 80.41 365.51 81.54 360.84 78.47 361.62 76.88 332.95 75.56 328.53 80.41 328.78 85.35 326.48 84.95 325.6 89.61 323.1 89.13 321.64 96.73 320.4 96.49 316.89 115 302.61 107.81 292.3 127.09 289.52 130.31 283.47 130.5 284.32 134.86 255.92 128.45 239.48 119.43 214.06 106 217.01 97.24 220.27 93.3 220.84 91.26 224.96 89.3 225.41 87.12 230.39 80.59 231.83 74.77 227.96 72.83 225.79 77.57 222.85 78.62 222.11 82.77 219.5 82.22 219 80.32 220.75 75.88 222.72 75.65 223.67 73.2 220.55 70.57 218.74 70.34 219.66 64.52 221.07 51.42 222.62 48.72 224.55 42.88 224.63 39.48 225.94 34.76 225.05 32.12 221.25 29.75 218.13 29 215.85 29.56 214.3 32.91 210.87 30.99 209.6 28.2 211.16 21.95 213.92 16.39 217.14 15.5 219.35 13.17 220.87 9.69 225.37 10.34 226.09 6.91 225.73 4.19 229.69 3.21 233.11 4.88 230.29 7.79 230.4 13.87 232.84 15.22 234.88 14.33 238.3 15.53 244.12 10.15 243.4 2.52 245.15 1.72 262.51 1.76 274.07 2.14 304.34 1.4 321.24 1.74 346.59 1.95 367.59 2.76 376.49 4.5 Z M 213.06 85.92 214.97 84.07 217.38 84.95 213.74 87.54 213.06 85.92 Z", Caledonia:"M 406.25 179.43 407.66 177.15 421.24 152.2 423.07 153.37 439.06 161.46 448.94 166.65 462.74 140.75 463.89 138.18 476.86 112.44 477.84 110.12 491.96 116.82 485.62 94.3 511.3 111.92 514.23 107.65 529.07 87.21 554.61 105.5 536.6 129.86 553.59 142.26 537.17 164.31 550.34 182.2 538.82 196.76 531.37 201.55 555.48 233.9 551.78 236.32 546.82 237.83 539.33 234.1 535.55 234.47 532.65 237.61 524.14 238.02 519.64 237.72 518.31 239.92 513.97 242.43 510.22 243.8 507.67 243.05 506.8 250 505.11 252.28 500.28 255.69 497.91 260.9 500.39 261.66 500.11 265.91 503.12 272.3 501.72 276.65 502 279.14 500.26 282.13 500.14 285.57 498.63 289.29 500.83 292.88 501.97 296.89 504.36 300.65 472.41 288.65 471.49 288.41 438.68 291.85 422.7 284.64 435.74 260.81 435.67 251.57 447.33 237.05 460.51 212.3 458.82 207.58 406.25 179.43 Z", Rutland:"M 173.51 440.3 211.39 436.13 208.41 411.55 224.41 410.85 224.27 409.93 256.12 408.62 256.9 410.22 259.27 423.22 273.79 415.92 295.36 404.89 295.48 411.31 304.43 414.96 306.39 411.53 314.89 415.03 316.3 417.32 316.08 419.45 318.41 423.8 309.14 443.86 313.01 445.74 308.92 454.18 339.28 465.46 331.47 484.15 324.46 499.25 321.03 497.96 318.34 514.37 316.24 531.56 321.52 532.64 320.94 537.06 332.89 540.8 333.31 543.62 329.24 558.6 323.11 574.46 324.07 580.77 307.97 571.21 307.95 572.91 300.22 572.69 299.59 582.09 296.98 582.28 295.97 599.04 268.83 597.64 268.65 602.38 264.46 602.3 265.7 597.33 250.63 596.52 238.98 596.49 219.65 594.79 197.78 593.52 198.45 573.85 199.83 539.23 200.4 519.97 201.64 516.79 199.62 513.81 200.03 510.18 197.53 506.3 194.83 503.83 192.21 503.01 190.92 501.25 188.73 501.49 189.14 493.13 187.13 490.23 186.72 485.5 182.81 484.43 176.57 484.81 175.18 486.04 172.41 485.12 169.52 487.17 167.95 489.41 168.85 491.72 165.27 496.82 165.75 502.31 162.19 504.86 154.52 499.23 154.11 496.95 156.37 492.62 155.87 489.37 157.28 485.56 154.9 481.67 155.29 478.83 157.26 477.01 160.05 469.53 161.66 461.31 163.79 459.21 165.82 455 170.13 451.89 171.01 443.89 173.51 440.3 Z", Orange:"M 316.53 368.69 325.89 351.39 328.89 345.26 343.81 351.16 356.03 324.54 357.38 325.06 368.09 299.85 373.76 301.76 374.83 298.93 400.98 309.23 404.03 310.81 410.07 278.77 422.7 284.64 438.68 291.85 471.49 288.41 472.41 288.65 504.36 300.65 504.82 307.42 506.96 309.68 506.09 311.72 502.23 313.61 501.55 316.92 502.26 320.16 504.59 321.49 505.35 319.36 507.66 320.61 507.31 323.46 504.3 325.41 507.1 326.95 502.28 328.65 503.19 331.33 501.1 335.06 498.51 335.18 499.03 338.27 495.84 340.29 496.74 343.91 494.08 348.01 492.12 347.06 491.05 350.12 489.01 351.57 489.56 353.96 486.2 357.37 487.42 360.02 486.81 366.47 489.22 365.92 490.77 370.27 489.43 372.54 486.3 373.73 486.02 382.05 484.58 384.35 477.7 389.72 475.12 394.93 472.87 395.14 472.12 397.41 473.56 401.09 469.8 402.35 468.53 405.63 469.82 409.46 470 413.32 468.42 417.06 469.53 420.81 469.38 423.53 466.81 427.85 464.18 430.56 464.3 435.2 430.37 421.64 413.77 416.44 399.73 412.53 400.03 412.05 363.55 396.67 337.07 386.51 336.32 387.65 320.91 381.84 322.07 379.38 321.53 376.78 316.79 374.59 316.53 368.69 Z", Chittenden:"M 284.32 134.86 287.76 135.58 300.51 153.57 308.29 163.72 312.54 165.12 307.31 175.65 314.06 179.21 305.35 195.54 313.69 198.15 304.89 214.99 314.23 220.2 308.29 230.47 306.61 230.56 299.48 227.69 288.15 257.71 290.89 258.58 276.34 299.15 273.15 274.76 270.66 252.58 259.54 249.48 260.47 255.88 247.06 257.69 246.92 256.33 226.46 260.14 215.27 262.07 196.73 264.17 197.44 261.52 193.95 258.87 190.33 262.19 188.62 260.79 194.23 254.8 192.1 251.75 188.54 252.95 189.5 247.28 192.77 240 194.44 237.92 193.43 234.1 196.21 232.44 198.14 228.41 197.05 226.64 197.6 223.6 196.3 222.18 195.05 217.32 198.46 213.99 200.85 210.71 203.58 211.06 205.54 215.14 208.74 213.97 210.38 207.21 209.79 201.18 206.99 200.5 207.25 196.73 209.89 194.38 209.4 188.41 208.24 185.53 204.27 183.45 203.05 180.66 196.09 178.31 198.04 175.13 197.03 169.98 195.44 167.07 188.88 162.8 191.07 160.84 192.34 162.61 195.57 161.09 196.87 162.81 200.26 162.65 203.8 161.55 205.65 159.93 205.06 156.74 207.84 156.96 207.59 161.87 211.59 164.26 213.75 163.77 217.34 160.96 219.54 152.93 217.13 152.19 211.79 154.31 209.1 153.37 208.18 144.63 203.39 140.17 206.29 138.72 206.99 135.83 212.56 133.55 213.42 131.89 212.28 127.89 213.18 119.62 212.6 116.69 214.06 106 239.48 119.43 255.92 128.45 284.32 134.86 Z"};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i;m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)
updateCandidateName(202, "Esther", "Charlstein");
var soundtracks = {
    0: {
      name: "Vermont",
      tracklist: [
        {
          "name": "The Divided Sky",
          "url": "https://audio.jukehost.co.uk/rfe4G8dLKLMIkEOA7YtxmjnjcEEzwXgp"
        },
        {
          "name": "Vermont - These Green Mountains",
          "url": "https://audio.jukehost.co.uk/pkxTtLz4unBykxGyGJC5ytUcT9SFobKC"
        },
        {
          "name": "Hail! Vermont",
          "url": "https://audio.jukehost.co.uk/XWdphfTiFJzfoFPmXinT3KPWcEEb5g1u"
        },
        {
          "name": "Ballad of the Green Mountaineer",
          "url": "https://audio.jukehost.co.uk/yQ5IgLOiOQZoHHOEV6howjH5PKX6qfUU"
        },
        {
          "name": "Stick Season",
          "url": "https://audio.jukehost.co.uk/X6GEoAcnwHBtbPsRBEMw2rzBGxz3yYEl"
        },
  
     ]
     },
     1: {
      name: "Scott",
      tracklist: [
        {
          "name": "The Ballad Of Thunder Road",
          "url": "https://audio.jukehost.co.uk/M1kxCOmO2tk2QJryLo7ZtFWWYAVLxuq1"
        },
        {
          "name": "My Way (2008 Remastered)",
          "url": "https://audio.jukehost.co.uk/H1W8RTABK3nbTtNiM6m8xtCF30GIEjKE"
        },
        {
          "name": "Tom Petty- I Won't Back Down",
          "url": "https://audio.jukehost.co.uk/ORwMHT58OhGeqxGQEEpIKL3cEounWUiv"
        },
        {
          "name": "Reelin' In The Years",
          "url": "https://audio.jukehost.co.uk/8sAOgl3V3ymHztloSqcagSnowWVvHEUn"
        },
        {
          "name": "Governor Phil Scott, We Are Never Ever Ever Getting Back Together Low Lily",
          "url": "https://audio.jukehost.co.uk/iqe2zJqAItOZ7BpxAoEo745piO0GbaEE"
        },
     ]
     },
           
  }
setSoundtrack("Scott");
campaignTrail_temp.questions_json = [

    {
        "model": "campaign_trail.question",
        "pk": 1042,
        "fields": {
            "priority": 1,
            "description": "It’s Summer 2023. The rain comes down without end, rivers overflow their banks, bridges collapse, cars are swept off the road, even downtown Montpelier is submerged. Vermont faces the worst floods in recent memory. This is an unprecedented crisis. You are the crisis manager, how will you respond?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1044,
        "fields": {
            "priority": 2,
            "description": "It’s time for the start of the 2024 legislative session, the second half of the 2023-2024 biennium. The session begins with your state of the state address, in which you will lay out your priorities for the coming session. The Dem/Prog supermajority promises to send you proposals you won’t like, but there’s broad overlap on most issues, and lawmakers are curious to hear what you’ll say.\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1043,
        "fields": {
            "priority": 2,
            "description": "Secretary of Education Dan French, an administration ally who took over from Rebecca Holcombe has stepped down to accept a post with the Council of Chief State School Officers. In keeping with procedure, the State Board of Education has provided a list of names to choose from to pick French's successor. The decision is yours Governor.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1045,
        "fields": {
            "priority": 3,
            "description": "S. 209, an act relating to prohibiting unserialized firearms and unserialized firearms frames and receivers, would crack down hard on so-called “ghost guns.” It’s the latest in a line of gun control proposals sent you over the course of the last 8 years. The bill has bipartisan support, and a veto-proof majority, but the NRA is lobbying hard against it. Will you sign it?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1046,
        "fields": {
            "priority": 4,
            "description": "The House and Senate Democrats have finally agreed on a budget to send to your desk. It's only a hair more in spending than the budget you set forward in January, but they've packed even more spending in other bills they plan on sending to you, and the budget includes some tax increases you promised to oppose. Will you sign the budget or send it back?\n\n ",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1051,
        "fields": {
            "priority": 5,
            "description": "So far, former Middlebury selectwoman Esther Charlestin is the only candidate filed to run on the Democratic side against you. Miro Weinberger is obviously hoping to run but he’s a non threat, real heavyweights like Treasurer Pieciak are seemingly waiting for you to retire. It seems that this will be another year of the VTDP effectively giving up on challenging you. Meanwhile, Republicans in the state legislature see unpopular property tax increases as an opportunity to gain ground. How will you approach electoral politics in early 2024?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1058,
        "fields": {
            "priority": 5,
            "description": "Example, if yur here you used cheets",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1077,
        "fields": {
            "priority": 6,
            "description": "There's a peculiar rumor going around Montpelier. It's hard to believe, but everyday it seems more credible. Word of a name thought to be out of politics for good. And then…",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1065,
        "fields": {
            "priority": 7,
            "description": "For the last few cycles, you've waited until the days before the filing deadline to file paperwork for the November election. It's now May, and you have a lot to weigh before making your decision. Will you seek re-election in 2024?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1059,
        "fields": {
            "priority": 7,
            "description": "Sad news, Governor. Your longtime friend and mentor, Colchester fixture and long-serving Senator Dick Mazza, has died after a battle with pancreatic cancer. This is a terrible loss for Vermont.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1057,
        "fields": {
            "priority": 7,
            "description": "The University of New Hampshire poll puts Governor Dean only ten points behind you. They’ve underestimated you before, but the signs are all indicating a close race. Dean’s reputation lends immediate credibility to his campaign, and he’s found success campaigning against dysfunction and a lack of action on healthcare. Do you have any strategies to stop his momentum?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1053,
        "fields": {
            "priority": 7,
            "description": "Donald J. Trump steps onto the stage in Milwaukee to a frenzied crowd of MAGA Republicans. Speakers line up one by one to offer slavish praise to their putrid master. Trump’s speech is an incoherent fascistic mess, the polls show him surging. Someone has to stand up to him, for the sake of the party, for the sake of the country.\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1060,
        "fields": {
            "priority": 7,
            "description": "Before the general election can truly get underway, you must secure the Republican nomination. Though this is generally a given, a right-wing primary challenger has been inevitable every year since you became Governor. This year, it's Jim Sexton, a conspiracy theorist and far-right gadfly with no name recognition. How do you plan to address this insurgency?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1068,
        "fields": {
            "priority": 7,
            "description": "Now that the primary is concluded, the general election can begin in earnest. What theme do you want to emphasize as the campaign gets underway?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1069,
        "fields": {
            "priority": 7,
            "description": "Now that the primary is concluded, the general election can begin in earnest. Unfortunately, John Klar has announced a write-in campaign for the governorship to protest your “betrayal” of conservative voters. What theme do you want to emphasize as the campaign gets underway?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1063,
        "fields": {
            "priority": 7,
            "description": "Republicans smell opportunity. A substantial property tax increase has left voters seething, and they just know voters are sick and tired of the out of control supermajority, something is stewing out there. Patricia McCoy and Paul Dame are hoping you’ll play an active role in the legislative campaign. Will you agree to actively stump for down ballot Republicans?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1066,
        "fields": {
            "priority": -7,
            "description": "Doctor Howard Dean’s reputation on healthcare is sterling. Now he is using his credibility to sharpen the healthcare issue into a deadly weapon against you. He tells concerned seniors and eager young people how you’ve ignored the issue, let it fester, he emphasizes the need to continue his work. People are listening, Governor. Do you have any response?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1067,
        "fields": {
            "priority": -6,
            "description": "Howard Dean was DNC Chairman, he was very nearly his party’s nominee for President, he has connections you can never hope to match. Barack Obama just held an event with Howard Dean in Burlington, Elizabeth Warren is coming next week, the star power is blinding. How can you hope to match it?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1071,
        "fields": {
            "priority": -5,
            "description": "One of the worst parts about your job is that it has taken you away from your true passion, the racetrack and the stockcar. But with the Governor’s Cup coming up, and in the midst of an exhausting campaign, maybe you ought to get back out there, you think. Will you race this July, Governor?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1072,
        "fields": {
            "priority": -4,
            "description": "The Democrats are mobilized, they’re angry, they smell blood in the water. State Representative Rebecca Holcombe, tears into you, accusing you of trying to destroy public education. Howard Dean tut-tuts to NBC5 about your advocacy for Medicare Advantage. It’s coordinated, and it’s effective. How will you respond?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1074,
        "fields": {
            "priority": -3,
            "description": "As the autumn rolls on, it becomes clear that the Phil Scott campaign apparatus has become rusty and complacent, not having been truly put to work for 8 years. Your worries are compounded by the Dean campaign’s overpowering presence on television and radio. Is a major course correction in order for your campaign?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1073,
        "fields": {
            "priority": -3,
            "description": "Howard Dean sits across from you, laughing jovially, without a care in the world. Your nervous smile betrays your discomfort as Paul Heintz prepares to begin the VTDigger debate. How will you approach your first debate with Governor Dean?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1075,
        "fields": {
            "priority": -2,
            "description": "Howard Dean’s attacks aren’t letting up. Now he’s taking the attack to the Trump-supporting Republican nominee for U.S. Senate, Gerald Malloy. Dean offers his full-throated support for Senator Sanders’ re-election, can you say the same for your party’s nominee?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1076,
        "fields": {
            "priority": -1,
            "description": "As the campaign approaches its close, most people's attention is diverted towards the presidential election, and away from local politics. The national scene is a nightmare, with a national mood that resembles an upcoming apocalypse. The debates are a shitshow, Trump seemingly openly promises to end democracy at his rallies, Biden’s campaign prematurely ends and Harris takes up the Democratic mantle. War rages in Europe and the Middle East. Do you have anything to say on this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 20983,
        "fields": {
            "priority": 0,
            "description": "You have traditionally ended each of your campaigns with a trip to every county in the state in one day. It’s a long day, but it’s your favorite part of every campaign. Are you ready for one last tour of the Green Mountain State?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21018,
        "fields": {
            "priority": 0,
            "description": "You have cast your ballot, as you exit the polling site in Barre to enter your truck, a few reporters are waiting. It’s a question you expected. “Governor, who did you vote for for President?”",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21022,
        "fields": {
            "priority": 0,
            "description": "You have cast your ballot, as you exit the polling site in Barre to enter your truck, there is a group of people who look like they came straight out of Slate Ridge holding Trump signs, waving Gadsden Flags, and booing, cursing, and hissing. They hate you so much.\n",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 5139,
        "fields": {
            "question": 1042,
            "description": "I think this crisis demonstrates the importance of climate resiliency. We’re going to get everyone the help they need, and afterwards, I’m going to ask the legislature to support my important initiatives to protect Vermonters from the effects of climate change.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5140,
        "fields": {
            "question": 1042,
            "description": "I want to be seen as a man of action, going to disaster sites, in rubber boots and so on. Vermonters need to know that their Governor cares. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5141,
        "fields": {
            "question": 1042,
            "description": "Vermonters are being tested right now, but I know how strong our communities are when they band together. I’m promising swift support to all communities affected. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5142,
        "fields": {
            "question": 1042,
            "description": "This is truly horrible. Reconstruction is going to be expensive, very expensive. Time to ring up Senator Welch and Senator Sanders, we’re going to need a generous federal rescue package."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5143,
        "fields": {
            "question": 1043,
            "description": "You see this guy? He was a liaison to the teacher’s union and even worked on a Democratic campaign. Easy confirmation, we don’t need any new problems.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5144,
        "fields": {
            "question": 1043,
            "description": "This one here, she’s a strong professional woman and has experience in the private and public sphere, and will provide the administrative versatility and flexibility to keep our system afloat. Plus, Gibbs is a big fan.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5145,
        "fields": {
            "question": 1043,
            "description": "I like her. Two decades of administrative experience, quiet, hard-working, no problems."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5147,
        "fields": {
            "question": 1044,
            "description": "The time is right to make a real effort to reconcile with lawmakers. Vermonters sent me and the supermajority into office on the same ballot, and that means something. I want to offer substantive, broadly agreeable, plans on housing, education funding, and public safety and extend the hand of cooperation, even if that means some new taxes.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5148,
        "fields": {
            "question": 1044,
            "description": "Someone needs to be the adult in the room. I want to remind the legislature that I pointed out we’d have an education funding crisis years ago, and I wasn’t heeded. Otherwise, I want to touch on our usual talking points on housing, fiscal responsibility, and public safety.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5149,
        "fields": {
            "question": 1044,
            "description": "Nothing is more important than the floods, and the powerful message of community and respect that Vermonters showed when they worked together to overcome this challenge. I want to talk about what we’ve done to recover and tell inspiring stories of Vermonters banding together.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5150,
        "fields": {
            "question": 1044,
            "description": "We need to be honest about the financial situation we face as a state. We don’t have any money. I am asking the legislature to be realistic about the situation we face and the measures necessary to keep our books in order."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5151,
        "fields": {
            "question": 1045,
            "description": "I let this bill become law despite my concerns over legal technicalities. If we’re serious about reducing crime in our state, we have to stop the flow of illegal arms."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5152,
        "fields": {
            "question": 1045,
            "description": "I will veto this legislation, the gun safety package I signed in 2018 has sufficiently addressed my concerns on this issue, I don’t see any need to go further.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5155,
        "fields": {
            "question": 1046,
            "description": "I will sign this budget. It's not exactly what I wanted, and there's a lot within it I disagree with, and I won't hesitate to send back bills that attempt to go around the budget, but Vermonters need to know that their Governor and legislature are capable of working together on basic issues. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5156,
        "fields": {
            "question": 1046,
            "description": "I will veto this budget. Vermonters cannot afford these tax increases, especially with the already rising cost of living and inflation we're dealing with, not to mention the fact that this budget is highly misleading. I campaigned against this kind of legislation, and I ask the legislature to reconsider this path. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5157,
        "fields": {
            "question": 1046,
            "description": "I can't support this budget, but I need the political capital to veto other legislation that tries to sneak more spending outside the budget. I'll let this pass without my signature and get ready to issue more vetoes next week.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5170,
        "fields": {
            "question": 1051,
            "description": "I need a State House not encumbered by a supermajority of Dems and Progs. Unfortunately, the VTGOP is uhhh…not in a great place. I’m going to personally take time to involve myself in candidate recruitment, to locate thoughtful, pro-business moderates to run for office with an R next to their name.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5171,
        "fields": {
            "question": 1051,
            "description": "I don’t have time for politics right now, I need to focus on flood recovery and our fiscal future. My mind stays on the work of the fifth floor.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5172,
        "fields": {
            "question": 1051,
            "description": "We all have an obligation to our democratic system of government right now. Donald Trump cannot become the Republican nominee. Nikki Haley wasn’t my first choice, but she’s our only choice to stop him. I’m going to offer her my full support and to introduce her at her planned rally in South Burlington.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5173,
        "fields": {
            "question": 1052,
            "description": "“You just became the biggest tax-raiser in the history of the state. I hope you’re happy”"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5176,
        "fields": {
            "question": 1053,
            "description": "In 2020 I solemnly noted after casting my ballot that I voted for Joe Biden. Let’s not wait this time, I want to make it very clear that I will be voting for the Vice President in November, with whom I have a good working relationship, and I encourage my fellow moderate Republicans to do so as well. We have to stop this man.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5177,
        "fields": {
            "question": 1053,
            "description": "This is horrible, but I won’t give up on the Republican Party. I want to note the performance of Nikki Haley in the primaries, I’m confident that the vision of Mitt Romney and Liz Cheney will ultimately win out."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5178,
        "fields": {
            "question": 1053,
            "description": "I’ll offer my usual criticisms of the former President, who I have never supported and never will. Other than that, we should keep focus on local issues.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5184,
        "fields": {
            "question": 1055,
            "description": "You know what? I think Jason’s right. It’s frankly irresponsible and arrogant for the legislature to ignore my veto like that. They’re jacking up taxes to unbelievable levels and it's Vermonters who are going to pay. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5185,
        "fields": {
            "question": 1055,
            "description": "Jason’s got the spirit, but he’s a bit aggressive. Vermonters don’t like this kind of negative campaigning. We’ll stand by our veto of the yield bill and lob in some criticisms, but there’s no need to escalate things.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5189,
        "fields": {
            "question": 1057,
            "description": "I’ve never waged a negative campaign, and I never will. But we can highlight our accomplishments, and our greatest success is in housing. We need to make this a major campaign issue, we’ve had real action and real success."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5190,
        "fields": {
            "question": 1057,
            "description": "The circumstances demand we are more assertive here. I don’t want to attack Dean, he’s a good man, but the legislature is an easy target. For two years the supermajority has obstructed progress and disrespected taxpayers.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5191,
        "fields": {
            "question": 1057,
            "description": "I hate to say it, but we need to take the bull by the horns here. Howard Dean is a total has been, he doesn’t understand the problems we have now. People need to know this.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5196,
        "fields": {
            "question": 1059,
            "description": "I am heartbroken at the loss of my very dear friend, mentor and long-time colleague, Senator Dick Mazza. My thoughts go out to Dolly, Mike, Melissa and the entire Mazza family, as well as his ‘family’ at the store and in the Senate.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5200,
        "fields": {
            "question": 1060,
            "description": "I’ve seen this movie before. Let’s focus on fundraising for the general election and not dignify this nut.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5201,
        "fields": {
            "question": 1060,
            "description": "We can’t afford to be complacent, let’s run an active primary campaign, ads, debates, and events, and get the wheels running fast in time for the general.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5202,
        "fields": {
            "question": 1060,
            "description": "I think we can afford to bypass the primary entirely and start our general election campaigning now. We have to let Vermonters know they still know who I am, I’m a moderate, like most people.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5212,
        "fields": {
            "question": 1063,
            "description": "I don’t want to Govern like the last two years for the next two. I need my veto pen back. I will proactively campaign for Republican candidates for the General Assembly. We must stop the supermajority.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5213,
        "fields": {
            "question": 1063,
            "description": "The Vermont Republican Party has been telling me to buzz off for years, and now they want my help? Ah, no thanks. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5214,
        "fields": {
            "question": 1063,
            "description": "I think it would be a mistake to lean into the Republican brand at a time like this. Let’s focus on my record and my image as the adult in the room, and whatever happens will happen.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5215,
        "fields": {
            "question": 1063,
            "description": "We can have this both ways, let’s campaign with folks like Scott Beck who share my approach to the state, and otherwise just utilize my bully pulpit to push my message of affordability to help Republicans downballot.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5220,
        "fields": {
            "question": 1065,
            "description": "I will seek re-election. The last two years have shown that the legislature still needs someone in the room to say \"this is too much, Vermonters can't afford this.\" We need moderation in Montpelier, and I believe I'm the only person who can provide that. Let's do this.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5221,
        "fields": {
            "question": 1065,
            "description": "It's been 8 years, and I enjoy this job less and less. The voters keep sending me supermajorities that act like I'm not even there. Let that be Howard's problem. Let's announce that this term will be my last, and call up Joe Benning to see if he's interested in giving it a go to protect my legacy and our state's fiscal future.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5224,
        "fields": {
            "question": 1066,
            "description": "These proposals sound nice, but what they mean are more tax increases. When you hear new programs, it either means new taxes or big cutbacks, neither of which Vermont wants. Someone has to be the adult in the room and say we can’t afford this.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5225,
        "fields": {
            "question": 1066,
            "description": "It’s not true that my administration hasn’t acted on healthcare. I reappointed competent leaders to the Green Mountain Care Board, and together we’re working to implement the all-payer model successfully.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5226,
        "fields": {
            "question": 1066,
            "description": "If Howard wants to talk about healthcare, I’d be happy to talk about COVID-19, where I successfully dealt with a generational challenge that pushed our healthcare system to the maximum.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5227,
        "fields": {
            "question": 1067,
            "description": "Well I campaigned for Nikki Haley, I’m sure she’d be happy to return the favor. Let’s see if she wants to hold an event in Rutland with me.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5228,
        "fields": {
            "question": 1067,
            "description": "It’s a bit daunting for sure, but while I may not have the support of political elites, I have the blue collar folks of Vermont. I may not have Al Franken, but I have Al’s French Fries. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5229,
        "fields": {
            "question": 1067,
            "description": "Mitt Romney has always been an inspiration to me, his courage is remarkable. I’d love to see if he would stump for me.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5230,
        "fields": {
            "question": 1067,
            "description": "President Biden is a good man. Joe and I have always worked together well, I know he won’t support me, but I’d love to visit the White House for more meetings on infrastructure, the photos would be great. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5231,
        "fields": {
            "question": 1068,
            "description": "Our accomplishments on housing can’t be beat. This is the biggest challenge facing our state, and I’ve overseen critical investments to reduce costs and increase our economic viability, especially for young people.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5232,
        "fields": {
            "question": 1068,
            "description": "I’ve held the line for 8 years on taxes and fees. If it wasn’t for me, Vermont would be even more expensive and unaffordable. Even now, Democrats are raising property taxes by 14%. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5233,
        "fields": {
            "question": 1068,
            "description": "I’m the crisis manager. We’ve faced a once in a lifetime pandemic, historic flooding, and terrifying national political polarization. With my leadership, Vermont is weathering the storm.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5234,
        "fields": {
            "question": 1068,
            "description": "The Vermont I know is a safe one, but over the last few years we’ve watched in fear as crime has surged in our major urban centers. Vermonters can trust me to keep them safe in these troubled times.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5235,
        "fields": {
            "question": 1069,
            "description": "Our accomplishments on housing can’t be beat. This is the biggest challenge facing our state, and I’ve overseen critical investments to reduce costs and increase our economic viability, especially for young people.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5236,
        "fields": {
            "question": 1069,
            "description": "I’ve held the line for 8 years on taxes and fees. If it wasn’t for me, Vermont would be even more expensive and unaffordable. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5237,
        "fields": {
            "question": 1069,
            "description": "I’m the crisis manager. We’ve faced a once in a lifetime pandemic, historic flooding, and terrifying national political polarization. With my leadership, Vermont is weathering the storm.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5242,
        "fields": {
            "question": 1071,
            "description": "As much as I’d like to, I’ve got too much on my mind right now, maybe next year."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5243,
        "fields": {
            "question": 1071,
            "description": "Let’s do it! I can’t wait."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5246,
        "fields": {
            "question": 1072,
            "description": "It’s unfortunate that my opponent has taken this race in such a negative direction. But I will rise above it, Vermonters deserve better.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5247,
        "fields": {
            "question": 1072,
            "description": "We have to respond to these attacks. I have consistently stood for affordability and cost-saving, these attacks are misleading and untrue!\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5248,
        "fields": {
            "question": 1072,
            "description": "If they want to make this a negative race, we’ll have to follow them. Who’s the new Howard Dean? More taxes, more spending. Vermont can’t afford him.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5249,
        "fields": {
            "question": 1072,
            "description": "This campaign is clearly going to be a lot different. Let’s get on television with positive ads touting my record on COVID-19 and housing."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5250,
        "fields": {
            "question": 1073,
            "description": "My best debates with Brenda Siegel were the ones where I - respectfully - went on the attack. I’m going to ask Howard how he’s going to pay for his new programs, and contrast his experiments with my tested and true approach.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5251,
        "fields": {
            "question": 1073,
            "description": "I’ve had a lot of debates, this isn’t different. I’m gonna stick to my approach, growing the economy, affordability, and protecting the most vulnerable. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5252,
        "fields": {
            "question": 1073,
            "description": "You know, Governor Dean and I actually have a lot in common. I think our governorships have been rather similar, balanced budgets and unafraid to tell the legislature “no.” Why is he running?\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5253,
        "fields": {
            "question": 1074,
            "description": "Remember Bruce Lisman? He tried to swamp me in negative advertising, but we beat him. Let’s turn the tables on old Howard, Vermont deserves better than this negativity."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5254,
        "fields": {
            "question": 1074,
            "description": "We certainly have grown complacent over the years, we need to get back in touch. As much as I hate to do it, we gotta let some folks go on the campaign side, bring in a new media firm too. Change things up.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5255,
        "fields": {
            "question": 1074,
            "description": "Sorry, I don’t buy it. There’s a lot of noise out there, but Howard Dean hasn’t run a campaign here in 24 years, I know these people. Campaign stays as it is, meeting blue collar people and talking about the issues with civility and respect in mind.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5256,
        "fields": {
            "question": 1075,
            "description": "Well you know I’m a proud Republican, so I’ll be voting for the Republican ticket in November, even if I don’t like every candidate.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5257,
        "fields": {
            "question": 1075,
            "description": "I have no plans to vote for Mr. Malloy, he and I don’t have very much in common. Other than that I don’t know.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5258,
        "fields": {
            "question": 1076,
            "description": "This election is like no other, it calls for unity from all pro-democracy forces. Let’s reach out to Governor Dean to release a joint statement after our next debate denouncing our country’s turn towards polarization and authoritarianism.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5259,
        "fields": {
            "question": 1076,
            "description": "We have to do better. Our children are watching, they are looking for examples from us. This simply cannot go on.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5260,
        "fields": {
            "question": 1076,
            "description": "We ought to just keep our heads down and focus on our race. Whatever happens between Trump and Harris will happen."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5261,
        "fields": {
            "question": 1076,
            "description": "In the face of fear, violence, and in a world that makes less and less sense, Vermont can do something different. I’m inviting Vermonters to start a discussion about how they’re bringing respect and decency into their lives."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5262,
        "fields": {
            "question": 1077,
            "description": "There’s no way… \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20845,
        "fields": {
            "question": 1051,
            "description": "We need to be very vigilant. I want to weaken potential strong opponents before they get into the race and clear the field ourselves. Let’s start slighting the work of the Treasurer’s office in statements to the press.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20883,
        "fields": {
            "question": 1057,
            "description": "Let’s just focus on our fundraising and organization, the primary isn’t even over."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20909,
        "fields": {
            "question": 1069,
            "description": "The Vermont I know is a safe one, but over the last few years we’ve watched in fear as crime has surged in our major urban centers. Vermonters can trust me to keep them safe in these troubled times."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20934,
        "fields": {
            "question": 1066,
            "description": "We need to pivot to an issue where I’m on stronger ground. My administration has overseen historic infrastructure improvements across our state, Vermont is becoming more durable, more accessible, and stronger.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20970,
        "fields": {
            "question": 1074,
            "description": "Can’t go negative, won’t go negative. Never have, never will. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20980,
        "fields": {
            "question": 1073,
            "description": "Where’s he been for the past twenty years? Running for President, running the DNC, hanging around national news circuits. Howard Dean has forgotten about Vermont, he doesn’t understand our problems."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20984,
        "fields": {
            "question": 1075,
            "description": "When I go out in Vermont, I see yard signs for Senator Sanders and myself next to each other, and I think that is very unique. We’re 180 degrees apart on a lot of issues, but we work together well and he does right by our state. I’ll be voting for him.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20989,
        "fields": {
            "question": 1075,
            "description": "I think everyone knows where I stand when it comes to the former President and support for the former President in the party. I’m opposed. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21009,
        "fields": {
            "question": 20983,
            "description": "Let’s do it! Let’s bring the dogs and make it a grand old time."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21012,
        "fields": {
            "question": 20983,
            "description": "This is not the same kind of campaign we’ve had before. Let’s be a bit more narrow, focused. Let’s bring this home.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21019,
        "fields": {
            "question": 21018,
            "description": "Donald Trump cannot be allowed to become President again, I had to do my part, I voted for Vice President Harris, and I hope she knows it’ll be the moderate, centrist vote that does it for her if she wins."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21020,
        "fields": {
            "question": 21018,
            "description": "I don’t know, but I voted for Phil Scott for Governor!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21021,
        "fields": {
            "question": 21018,
            "description": "I think we’re all disappointed that we’re faced with two options so far diverged from the political mainstream. I decided to write-in a good friend of mine, Governor Douglas. I hope we can move forward as a country.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21030,
        "fields": {
            "question": 21022,
            "description": "What is the country coming to? \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21031,
        "fields": {
            "question": 21022,
            "description": "“Shame on you! Really, there are children here coming to vote with their parents, you should be ashamed of yourself. This is a disgrace.”\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21032,
        "fields": {
            "question": 21022,
            "description": "“Vote for Kamala!”\n"
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 20681,
        "fields": {
            "name": "Windsor",
            "abbr": "Windsor",
            "electoral_votes": 1,
            "popular_votes": 33844,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 316.53 368.69 316.79 374.59 321.53 376.78 322.07 379.38 320.91 381.84 336.32 387.65 337.07 386.51 363.55 396.67 400.03 412.05 399.73 412.53 413.77 416.44 430.37 421.64 464.3 435.2 460.52 437.87 456.99 444.03 454.24 445.04 446.62 450.48 440.5 457.9 439.1 461.72 438.89 465.99 439.63 467.72 438.96 471.74 436.88 475.36 436.58 480.58 433.51 482.12 431.67 489.87 433.32 492.54 432.28 495.15 427.84 499.21 421.9 502.03 420.19 504.13 419.57 507.44 420.15 515.53 417.94 519.93 416.64 520.23 415.55 525.1 416.12 526.97 419.05 529.68 420.04 532.07 419.84 536.7 417.07 541.94 417.6 546.76 416.32 551.18 414.26 567.41 411.89 570.07 411.18 572.78 411.84 577.58 417.56 580.27 415 583.48 412.62 588.39 416.42 594.89 414.85 598.24 413.28 605.38 409.79 612.16 406.32 613.89 405.37 618.85 406.69 622.75 377.29 621.75 344.89 625.82 342.55 626.34 324.37 620.34 308.39 614.6 308.38 599.5 295.97 599.04 296.98 582.28 299.59 582.09 300.22 572.69 307.95 572.91 307.97 571.21 324.07 580.77 323.11 574.46 329.24 558.6 333.31 543.62 332.89 540.8 320.94 537.06 321.52 532.64 316.24 531.56 318.34 514.37 321.03 497.96 324.46 499.25 331.47 484.15 339.28 465.46 308.92 454.18 313.01 445.74 309.14 443.86 318.41 423.8 316.08 419.45 316.3 417.32 314.89 415.03 306.39 411.53 304.43 414.96 295.48 411.31 295.36 404.89 273.79 415.92 270.55 401.73 268.7 402.69 268.76 396.09 275.54 398.94 294.91 389.32 295.45 402.8 297.69 403.65 310.13 377.18 311.73 377.78 316.53 368.69 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20691,
        "fields": {
            "name": "Essex",
            "abbr": "Essex",
            "electoral_votes": 1,
            "popular_votes": 3181,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 538.38 3.99 570.99 2.58 589.67 2.41 609.96 1.75 622.15 1.67 645.89 1 642.48 3.19 641.98 4.99 639.73 5.43 636.09 3.01 631.04 5.26 628.25 7.85 627.67 10.41 630.72 15.95 633.31 18.42 633.07 23.74 633.67 31.36 636.42 34.06 638.56 37.58 634.15 43.12 633.03 46.04 629.23 51.43 626.47 52.62 626.01 55.9 624.08 59.31 625.31 62.26 623.77 63.78 622.47 67.6 619.72 68.55 619.11 71.42 620.96 73.13 619.89 76.45 620.36 78.05 618.31 81.08 615.15 81.83 614.53 84.36 610.43 88.26 609.24 91.08 605.48 92.45 607.19 95.82 606.97 100.6 613.89 109.5 615.07 111.69 614.14 113.5 615.1 116.26 614.66 118.42 617.14 119.54 617.31 125.27 619.06 127.66 623.04 127.13 624.32 131 622.99 132.6 625.79 134.86 624.74 138.53 625.51 142.45 623.85 145.44 625.63 147.72 629 148.79 629.69 150.43 627.39 153.05 626.72 155.9 624.33 157.74 621.71 158.35 617.19 157.35 615.1 159.08 614.88 161.54 620.59 166.08 620.6 169.17 618.53 172.12 615.72 172.73 618.62 177.4 620.14 178.81 615.59 182.58 614.59 185.08 609.97 185.28 608.34 189.01 606.11 187.98 603.26 189.06 603.66 194.14 601.4 194.19 599.68 200.85 598.76 202.14 594.82 203.38 595.66 205.33 589.17 210.58 586.08 212.09 580.58 212.19 579.18 215 575.72 213.29 573.5 213.25 570.11 215.64 567.09 215.51 564.2 217.93 564.84 220.51 561.22 221.94 560.79 227 561.79 230.51 560.2 232.05 555.48 233.9 531.37 201.55 538.82 196.76 550.34 182.2 537.17 164.31 553.59 142.26 536.6 129.86 554.61 105.5 529.07 87.21 520.2 81.07 531.4 66.23 533.71 63.68 544.04 49.02 533.5 41.17 538.38 3.99 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20701,
        "fields": {
            "name": "Washington",
            "abbr": "Washington",
            "electoral_votes": 1,
            "popular_votes": 35016,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 276.34 299.15 290.89 258.58 288.15 257.71 299.48 227.69 306.61 230.56 308.29 230.47 314.23 220.2 304.89 214.99 313.69 198.15 323.49 201.35 334.87 207.55 351.24 216.92 364.78 190.58 365.53 188.7 391.42 208.01 393.63 202.73 397.99 195.04 406.25 179.43 458.82 207.58 460.51 212.3 447.33 237.05 435.67 251.57 435.74 260.81 422.7 284.64 410.07 278.77 404.03 310.81 400.98 309.23 374.83 298.93 373.76 301.76 368.09 299.85 357.38 325.06 356.03 324.54 343.81 351.16 328.89 345.26 302.17 334.42 290.07 329.78 285.07 330.37 283.86 322.41 281.36 301.23 280.89 298.68 276.34 299.15 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20711,
        "fields": {
            "name": "Windham",
            "abbr": "Windham",
            "electoral_votes": 1,
            "popular_votes": 25499,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 308.39 614.6 324.37 620.34 342.55 626.34 344.89 625.82 377.29 621.75 406.69 622.75 404.98 627.62 405.7 633.29 402.49 636.87 404.16 640.44 401.92 643.96 402.18 649.87 400.82 652.86 402.07 655.52 404.9 656.61 404.38 658.56 406.93 662.23 406.45 665.62 404.36 668.78 406.37 673.73 403.82 679.05 399.06 683.91 398.16 685.56 399.98 689.73 399.28 693.96 400.8 697.88 403.98 700.21 402.93 703.49 400.06 703.87 398.68 707.53 399.63 709.85 396.51 713.63 394.5 712.96 391.71 715.16 385.1 716.72 381.58 719.58 380.97 721.34 383 724.82 382.88 728.76 383.61 732.27 382.07 734.68 381.75 739.43 379.38 742.41 376.27 743.95 375.4 750.22 375.91 752.63 375.14 755.07 377.36 758.9 378.33 766.41 379.65 771.85 385.1 776.79 387.54 780.53 387.67 782.38 385.52 784.44 386.45 786.13 392.09 783.12 395.99 788.26 396.73 792.37 399.83 796.79 400.47 799 359.92 797.46 310.4 795.47 279.32 794.44 280.37 765.12 280.18 762.87 281.37 733.17 281.27 728.89 259.68 727.68 261.16 695.27 261.8 695.31 261.61 677.36 263.18 662.19 275.32 662.68 288.12 663.74 295.79 664.02 297.48 632.24 300.16 632.39 301.14 612.19 308.39 614.6 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20721,
        "fields": {
            "name": "Bennington",
            "abbr": "Bennington",
            "electoral_votes": 1,
            "popular_votes": 20007,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 197.78 593.52 219.65 594.79 238.98 596.49 250.63 596.52 265.7 597.33 264.46 602.3 268.65 602.38 268.83 597.64 295.97 599.04 308.38 599.5 308.39 614.6 301.14 612.19 300.16 632.39 297.48 632.24 295.79 664.02 288.12 663.74 275.32 662.68 263.18 662.19 261.61 677.36 261.8 695.31 261.16 695.27 259.68 727.68 281.27 728.89 281.37 733.17 280.18 762.87 280.37 765.12 279.32 794.44 190.38 791.41 186.83 771.92 188.71 767.77 187.88 765.58 188.36 760.73 190.08 760.98 191.02 738.76 191.5 723.75 193.01 690.49 194.27 669.5 196.45 622.97 197.11 612.75 197.78 593.52 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20731,
        "fields": {
            "name": "Grand Isle",
            "abbr": "Grand",
            "electoral_votes": 1,
            "popular_votes": 4824,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 178.77 13.02 178.36 10.68 181.29 2.52 204.5 2.29 214.22 2.06 211.98 11.05 210.72 12.68 207.94 18.68 202.46 20.51 200.43 22.29 201.81 28.46 199.04 33.09 198.13 36.31 199.16 37.51 198.64 41.21 195.24 52.83 193.21 54.36 188.94 52.05 188.96 50.34 190.94 46.08 190.42 40.49 188.38 39.42 188.37 35.7 189.47 32.68 188.5 27.35 190.22 22.41 190.69 18.06 188.72 12.36 181.89 11.77 178.77 13.02 Z M 198.6 54.17 197.81 47.54 199.5 43.29 201.33 42.7 205.54 34.38 206.67 34.14 208.26 37.77 208.58 46.88 205.4 47.94 203.55 50.37 203.93 53.52 202.32 55.23 201.88 57.92 198.26 66.1 196.61 68.99 194.59 69.77 193.88 78.22 194.27 82.73 192.42 86.67 190.62 84.84 189.22 87.51 185.91 87.85 185.01 86.16 185.47 82.89 187.48 79.95 188.18 76.59 187.63 70.22 188.7 67.76 191.09 69.4 192.66 65.21 195.6 65.54 197.08 64.1 197.68 61.09 195.44 59.47 196.23 54.85 198.6 54.17 Z M 206.55 67.63 207.37 64.73 211.19 59.99 212.6 60.87 213.18 63.63 210.47 63.65 207.62 69.07 206.55 67.63 Z M 199.78 92.38 202.61 96.53 201.84 100.75 195.21 103.3 194.88 108.25 193.25 113.32 193.55 114.87 190.93 119.79 186.47 122.05 186.41 126.44 187.97 128.28 191.98 128.06 193.21 127.16 194.56 121.69 196.22 123.66 197.19 128.38 199.41 131.65 199.01 134.78 197.08 136.18 196.31 141.55 192.13 141.76 190.69 146.05 188 145.98 187.36 143.41 185.42 141.04 185 138.4 178.28 137.19 178.85 132.38 178.47 118.27 177.9 111.32 183.55 95.74 185.04 96.02 187.86 92.65 190.73 94.51 193.44 93.88 194.46 87.83 198 87.69 199.78 92.38 Z M 181.33 65.27 179.87 66.01 176.74 64.26 177.04 61.62 175.17 59.6 176.15 57.76 177.4 48.25 180.57 38.94 187.05 40.63 187.6 43.42 184.64 51.52 185.84 54.44 183.47 57.2 184.43 58.39 182.16 61.66 181.33 65.27 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20741,
        "fields": {
            "name": "Orleans",
            "abbr": "Orleans",
            "electoral_votes": 1,
            "popular_votes": 13851,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 376.49 4.5 381.78 4.64 394.51 4.29 402.46 4.41 414.23 5.07 427.27 5.39 436.79 6 446.49 5.85 473.78 5.05 487.99 5.19 507.72 4.67 526.54 4.01 538.38 3.99 533.5 41.17 544.04 49.02 533.71 63.68 531.4 66.23 520.2 81.07 529.07 87.21 514.23 107.65 511.3 111.92 485.62 94.3 491.96 116.82 477.84 110.12 476.86 112.44 463.89 138.18 462.74 140.75 448.94 166.65 439.06 161.46 423.07 153.37 421.24 152.2 421.93 149.01 394.1 134.83 410.33 103.87 389.6 93.55 370.18 83.69 381.56 65.17 379.57 33.16 380.78 33.12 376.49 4.5 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20751,
        "fields": {
            "name": "Lamoille",
            "abbr": "Lamoille",
            "electoral_votes": 1,
            "popular_votes": 14816,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 370.18 83.69 389.6 93.55 410.33 103.87 394.1 134.83 421.93 149.01 421.24 152.2 407.66 177.15 406.25 179.43 397.99 195.04 393.63 202.73 391.42 208.01 365.53 188.7 364.78 190.58 351.24 216.92 334.87 207.55 323.49 201.35 313.69 198.15 305.35 195.54 314.06 179.21 307.31 175.65 312.54 165.12 308.29 163.72 300.51 153.57 287.76 135.58 284.32 134.86 283.47 130.5 289.52 130.31 292.3 127.09 302.61 107.81 316.89 115 320.4 96.49 321.64 96.73 323.1 89.13 325.6 89.61 326.48 84.95 328.78 85.35 328.53 80.41 332.95 75.56 361.62 76.88 360.84 78.47 365.51 81.54 366.38 80.41 370.18 83.69 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20761,
        "fields": {
            "name": "Addison",
            "abbr": "Addison",
            "electoral_votes": 1,
            "popular_votes": 21089,
            "poll_closing_time": 110,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 276.34 299.15 280.89 298.68 281.36 301.23 283.86 322.41 285.07 330.37 290.07 329.78 302.17 334.42 328.89 345.26 325.89 351.39 316.53 368.69 311.73 377.78 310.13 377.18 297.69 403.65 295.45 402.8 294.91 389.32 275.54 398.94 268.76 396.09 268.7 402.69 270.55 401.73 273.79 415.92 259.27 423.22 256.9 410.22 256.12 408.62 224.27 409.93 224.41 410.85 208.41 411.55 211.39 436.13 173.51 440.3 176.48 437.18 176.73 432.79 174.92 430.45 174.11 426.47 171.04 425.3 168.45 420.29 165.17 416.3 167.93 411.82 169.9 412.13 170.87 408.38 169.73 403.91 171.2 400.8 171.13 396.86 169.52 394.56 169.39 388.64 164.64 386.51 164.86 380.04 162.72 379.26 162.39 377.07 163.83 374.21 162.48 372.11 162.06 364.94 161.43 363.03 163.74 360.39 162.68 356.16 164.33 352.56 165.15 348.61 162.72 345 158.32 342.36 157.53 337.79 160.51 332.17 159.72 329.01 164.51 322.77 167.01 321.3 166.53 317.79 167.43 314.48 171.55 308.98 174.04 297.6 176.23 293.2 171.2 290.87 171.67 287.33 174.87 284.88 176.28 281.41 179.33 279.01 184.41 278.8 185.98 275.37 185.21 271.85 187.59 270.43 194.12 270.63 194.94 275.06 196.8 275.09 195.39 271.14 198.68 271.15 197.92 268.79 194.72 266.89 196.73 264.17 215.27 262.07 226.46 260.14 246.92 256.33 247.06 257.69 260.47 255.88 259.54 249.48 270.66 252.58 273.15 274.76 276.34 299.15 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20771,
        "fields": {
            "name": "Franklin",
            "abbr": "Franklin",
            "electoral_votes": 1,
            "popular_votes": 25649,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 376.49 4.5 380.78 33.12 379.57 33.16 381.56 65.17 370.18 83.69 366.38 80.41 365.51 81.54 360.84 78.47 361.62 76.88 332.95 75.56 328.53 80.41 328.78 85.35 326.48 84.95 325.6 89.61 323.1 89.13 321.64 96.73 320.4 96.49 316.89 115 302.61 107.81 292.3 127.09 289.52 130.31 283.47 130.5 284.32 134.86 255.92 128.45 239.48 119.43 214.06 106 217.01 97.24 220.27 93.3 220.84 91.26 224.96 89.3 225.41 87.12 230.39 80.59 231.83 74.77 227.96 72.83 225.79 77.57 222.85 78.62 222.11 82.77 219.5 82.22 219 80.32 220.75 75.88 222.72 75.65 223.67 73.2 220.55 70.57 218.74 70.34 219.66 64.52 221.07 51.42 222.62 48.72 224.55 42.88 224.63 39.48 225.94 34.76 225.05 32.12 221.25 29.75 218.13 29 215.85 29.56 214.3 32.91 210.87 30.99 209.6 28.2 211.16 21.95 213.92 16.39 217.14 15.5 219.35 13.17 220.87 9.69 225.37 10.34 226.09 6.91 225.73 4.19 229.69 3.21 233.11 4.88 230.29 7.79 230.4 13.87 232.84 15.22 234.88 14.33 238.3 15.53 244.12 10.15 243.4 2.52 245.15 1.72 262.51 1.76 274.07 2.14 304.34 1.4 321.24 1.74 346.59 1.95 367.59 2.76 376.49 4.5 Z M 213.06 85.92 214.97 84.07 217.38 84.95 213.74 87.54 213.06 85.92 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20781,
        "fields": {
            "name": "Caledonia",
            "abbr": "Caledonia",
            "electoral_votes": 1,
            "popular_votes": 15973,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 406.25 179.43 407.66 177.15 421.24 152.2 423.07 153.37 439.06 161.46 448.94 166.65 462.74 140.75 463.89 138.18 476.86 112.44 477.84 110.12 491.96 116.82 485.62 94.3 511.3 111.92 514.23 107.65 529.07 87.21 554.61 105.5 536.6 129.86 553.59 142.26 537.17 164.31 550.34 182.2 538.82 196.76 531.37 201.55 555.48 233.9 551.78 236.32 546.82 237.83 539.33 234.1 535.55 234.47 532.65 237.61 524.14 238.02 519.64 237.72 518.31 239.92 513.97 242.43 510.22 243.8 507.67 243.05 506.8 250 505.11 252.28 500.28 255.69 497.91 260.9 500.39 261.66 500.11 265.91 503.12 272.3 501.72 276.65 502 279.14 500.26 282.13 500.14 285.57 498.63 289.29 500.83 292.88 501.97 296.89 504.36 300.65 472.41 288.65 471.49 288.41 438.68 291.85 422.7 284.64 435.74 260.81 435.67 251.57 447.33 237.05 460.51 212.3 458.82 207.58 406.25 179.43 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20791,
        "fields": {
            "name": "Rutland",
            "abbr": "Rutland",
            "electoral_votes": 1,
            "popular_votes": 33530,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 173.51 440.3 211.39 436.13 208.41 411.55 224.41 410.85 224.27 409.93 256.12 408.62 256.9 410.22 259.27 423.22 273.79 415.92 295.36 404.89 295.48 411.31 304.43 414.96 306.39 411.53 314.89 415.03 316.3 417.32 316.08 419.45 318.41 423.8 309.14 443.86 313.01 445.74 308.92 454.18 339.28 465.46 331.47 484.15 324.46 499.25 321.03 497.96 318.34 514.37 316.24 531.56 321.52 532.64 320.94 537.06 332.89 540.8 333.31 543.62 329.24 558.6 323.11 574.46 324.07 580.77 307.97 571.21 307.95 572.91 300.22 572.69 299.59 582.09 296.98 582.28 295.97 599.04 268.83 597.64 268.65 602.38 264.46 602.3 265.7 597.33 250.63 596.52 238.98 596.49 219.65 594.79 197.78 593.52 198.45 573.85 199.83 539.23 200.4 519.97 201.64 516.79 199.62 513.81 200.03 510.18 197.53 506.3 194.83 503.83 192.21 503.01 190.92 501.25 188.73 501.49 189.14 493.13 187.13 490.23 186.72 485.5 182.81 484.43 176.57 484.81 175.18 486.04 172.41 485.12 169.52 487.17 167.95 489.41 168.85 491.72 165.27 496.82 165.75 502.31 162.19 504.86 154.52 499.23 154.11 496.95 156.37 492.62 155.87 489.37 157.28 485.56 154.9 481.67 155.29 478.83 157.26 477.01 160.05 469.53 161.66 461.31 163.79 459.21 165.82 455 170.13 451.89 171.01 443.89 173.51 440.3 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20801,
        "fields": {
            "name": "Orange",
            "abbr": "Orange",
            "electoral_votes": 1,
            "popular_votes": 16999,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 316.53 368.69 325.89 351.39 328.89 345.26 343.81 351.16 356.03 324.54 357.38 325.06 368.09 299.85 373.76 301.76 374.83 298.93 400.98 309.23 404.03 310.81 410.07 278.77 422.7 284.64 438.68 291.85 471.49 288.41 472.41 288.65 504.36 300.65 504.82 307.42 506.96 309.68 506.09 311.72 502.23 313.61 501.55 316.92 502.26 320.16 504.59 321.49 505.35 319.36 507.66 320.61 507.31 323.46 504.3 325.41 507.1 326.95 502.28 328.65 503.19 331.33 501.1 335.06 498.51 335.18 499.03 338.27 495.84 340.29 496.74 343.91 494.08 348.01 492.12 347.06 491.05 350.12 489.01 351.57 489.56 353.96 486.2 357.37 487.42 360.02 486.81 366.47 489.22 365.92 490.77 370.27 489.43 372.54 486.3 373.73 486.02 382.05 484.58 384.35 477.7 389.72 475.12 394.93 472.87 395.14 472.12 397.41 473.56 401.09 469.8 402.35 468.53 405.63 469.82 409.46 470 413.32 468.42 417.06 469.53 420.81 469.38 423.53 466.81 427.85 464.18 430.56 464.3 435.2 430.37 421.64 413.77 416.44 399.73 412.53 400.03 412.05 363.55 396.67 337.07 386.51 336.32 387.65 320.91 381.84 322.07 379.38 321.53 376.78 316.79 374.59 316.53 368.69 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20811,
        "fields": {
            "name": "Chittenden",
            "abbr": "Chittenden",
            "electoral_votes": 1,
            "popular_votes": 97615,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 284.32 134.86 287.76 135.58 300.51 153.57 308.29 163.72 312.54 165.12 307.31 175.65 314.06 179.21 305.35 195.54 313.69 198.15 304.89 214.99 314.23 220.2 308.29 230.47 306.61 230.56 299.48 227.69 288.15 257.71 290.89 258.58 276.34 299.15 273.15 274.76 270.66 252.58 259.54 249.48 260.47 255.88 247.06 257.69 246.92 256.33 226.46 260.14 215.27 262.07 196.73 264.17 197.44 261.52 193.95 258.87 190.33 262.19 188.62 260.79 194.23 254.8 192.1 251.75 188.54 252.95 189.5 247.28 192.77 240 194.44 237.92 193.43 234.1 196.21 232.44 198.14 228.41 197.05 226.64 197.6 223.6 196.3 222.18 195.05 217.32 198.46 213.99 200.85 210.71 203.58 211.06 205.54 215.14 208.74 213.97 210.38 207.21 209.79 201.18 206.99 200.5 207.25 196.73 209.89 194.38 209.4 188.41 208.24 185.53 204.27 183.45 203.05 180.66 196.09 178.31 198.04 175.13 197.03 169.98 195.44 167.07 188.88 162.8 191.07 160.84 192.34 162.61 195.57 161.09 196.87 162.81 200.26 162.65 203.8 161.55 205.65 159.93 205.06 156.74 207.84 156.96 207.59 161.87 211.59 164.26 213.75 163.77 217.34 160.96 219.54 152.93 217.13 152.19 211.79 154.31 209.1 153.37 208.18 144.63 203.39 140.17 206.29 138.72 206.99 135.83 212.56 133.55 213.42 131.89 212.28 127.89 213.18 119.62 212.6 116.69 214.06 106 239.48 119.43 255.92 128.45 284.32 134.86 Z"
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 100,
        "fields": {
            "name": "Taxes",
            "description": "",
            "stance_1": "New Hampshire",
            "stance_desc_1": "",
            "stance_2": "No New Taxes",
            "stance_desc_2": "",
            "stance_3": "No New Taxes",
            "stance_desc_3": "",
            "stance_4": "Pragmatic",
            "stance_desc_4": "",
            "stance_5": "Pragmatic",
            "stance_desc_5": "",
            "stance_6": "Tax the Rich",
            "stance_desc_6": "",
            "stance_7": "Soak ‘em Dry",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 101,
        "fields": {
            "name": "Phil Scott Approval",
            "description": "",
            "stance_1": "King Phil",
            "stance_desc_1": "",
            "stance_2": "Beloved ",
            "stance_desc_2": "",
            "stance_3": "Beloved ",
            "stance_desc_3": "",
            "stance_4": "Popular",
            "stance_desc_4": "",
            "stance_5": "Liked ",
            "stance_desc_5": "",
            "stance_6": "Liked ",
            "stance_desc_6": "",
            "stance_7": "Middling",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 102,
        "fields": {
            "name": "Culture",
            "description": "",
            "stance_1": "Take Back Vermont",
            "stance_desc_1": "",
            "stance_2": "Conservative",
            "stance_desc_2": "",
            "stance_3": "Conservative",
            "stance_desc_3": "",
            "stance_4": "Moderate",
            "stance_desc_4": "",
            "stance_5": "Liberal",
            "stance_desc_5": "",
            "stance_6": "Liberal",
            "stance_desc_6": "",
            "stance_7": "Wokiste",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 103,
        "fields": {
            "name": "Moderation",
            "description": "",
            "stance_1": "Very Important",
            "stance_desc_1": "",
            "stance_2": "Valued",
            "stance_desc_2": "",
            "stance_3": "Valued",
            "stance_desc_3": "",
            "stance_4": "Apathetic",
            "stance_desc_4": "",
            "stance_5": "Apathetic",
            "stance_desc_5": "",
            "stance_6": "Partisan",
            "stance_desc_6": "",
            "stance_7": "Radicals!",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 104,
        "fields": {
            "name": "Urban/Rural ",
            "description": "",
            "stance_1": "Chittendenworld",
            "stance_desc_1": "",
            "stance_2": "Mixed",
            "stance_desc_2": "",
            "stance_3": "Mixed",
            "stance_desc_3": "",
            "stance_4": "Small Towns",
            "stance_desc_4": "",
            "stance_5": "Small Towns",
            "stance_desc_5": "",
            "stance_6": "Rural",
            "stance_desc_6": "",
            "stance_7": "Remote",
            "stance_desc_7": "",
            "election": 20
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20686,
        "fields": {
            "state": 20681,
            "issue": "100",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20687,
        "fields": {
            "state": 20681,
            "issue": "101",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20688,
        "fields": {
            "state": 20681,
            "issue": "102",
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20689,
        "fields": {
            "state": 20681,
            "issue": "103",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20690,
        "fields": {
            "state": 20681,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20696,
        "fields": {
            "state": 20691,
            "issue": "100",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20697,
        "fields": {
            "state": 20691,
            "issue": "101",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20698,
        "fields": {
            "state": 20691,
            "issue": "102",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20699,
        "fields": {
            "state": 20691,
            "issue": "103",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20700,
        "fields": {
            "state": 20691,
            "issue": "104",
            "state_issue_score": 1,
            "weight": 0.00003
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20706,
        "fields": {
            "state": 20701,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20707,
        "fields": {
            "state": 20701,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20708,
        "fields": {
            "state": 20701,
            "issue": "102",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20709,
        "fields": {
            "state": 20701,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20710,
        "fields": {
            "state": 20701,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20716,
        "fields": {
            "state": 20711,
            "issue": "100",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20717,
        "fields": {
            "state": 20711,
            "issue": "101",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20718,
        "fields": {
            "state": 20711,
            "issue": "102",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20719,
        "fields": {
            "state": 20711,
            "issue": "103",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20720,
        "fields": {
            "state": 20711,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20726,
        "fields": {
            "state": 20721,
            "issue": "100",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20727,
        "fields": {
            "state": 20721,
            "issue": "101",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20728,
        "fields": {
            "state": 20721,
            "issue": "102",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20729,
        "fields": {
            "state": 20721,
            "issue": "103",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20730,
        "fields": {
            "state": 20721,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20736,
        "fields": {
            "state": 20731,
            "issue": "100",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20737,
        "fields": {
            "state": 20731,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20738,
        "fields": {
            "state": 20731,
            "issue": "102",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20739,
        "fields": {
            "state": 20731,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20740,
        "fields": {
            "state": 20731,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20746,
        "fields": {
            "state": 20741,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20747,
        "fields": {
            "state": 20741,
            "issue": "101",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20748,
        "fields": {
            "state": 20741,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20749,
        "fields": {
            "state": 20741,
            "issue": "103",
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20750,
        "fields": {
            "state": 20741,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20756,
        "fields": {
            "state": 20751,
            "issue": "100",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20757,
        "fields": {
            "state": 20751,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20758,
        "fields": {
            "state": 20751,
            "issue": "102",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20759,
        "fields": {
            "state": 20751,
            "issue": "103",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20760,
        "fields": {
            "state": 20751,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20766,
        "fields": {
            "state": 20761,
            "issue": "100",//Taxes
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20767,
        "fields": {
            "state": 20761,
            "issue": "101", //Aproval
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20768,
        "fields": {
            "state": 20761,
            "issue": "102", //Culture
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20769,
        "fields": {
            "state": 20761,
            "issue": "103",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20770,
        "fields": {
            "state": 20761,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20776,
        "fields": {
            "state": 20771,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20777,
        "fields": {
            "state": 20771,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20778,
        "fields": {
            "state": 20771,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20779,
        "fields": {
            "state": 20771,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20780,
        "fields": {
            "state": 20771,
            "issue": "104",
            "state_issue_score": -0.3,
            "weight": 0.4
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20786,
        "fields": {
            "state": 20781,
            "issue": "100",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20787,
        "fields": {
            "state": 20781,
            "issue": "101",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20788,
        "fields": {
            "state": 20781,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20789,
        "fields": {
            "state": 20781,
            "issue": "103",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20790,
        "fields": {
            "state": 20781,
            "issue": "104",
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20796,
        "fields": {
            "state": 20791,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20797,
        "fields": {
            "state": 20791,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20798,
        "fields": {
            "state": 20791,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20799,
        "fields": {
            "state": 20791,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20800,
        "fields": {
            "state": 20791,
            "issue": "104",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20806,
        "fields": {
            "state": 20801,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20807,
        "fields": {
            "state": 20801,
            "issue": "101",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20808,
        "fields": {
            "state": 20801,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20809,
        "fields": {
            "state": 20801,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20810,
        "fields": {
            "state": 20801,
            "issue": "104",
            "state_issue_score": 0.7,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20816,
        "fields": {
            "state": 20811,
            "issue": "100",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20817,
        "fields": {
            "state": 20811,
            "issue": "101",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20818,
        "fields": {
            "state": 20811,
            "issue": "102",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20819,
        "fields": {
            "state": 20811,
            "issue": "103",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20820,
        "fields": {
            "state": 20811,
            "issue": "104",
            "state_issue_score": -1,
            "weight": 1.5
        }
    }
]
campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20682,
        "fields": {
            "candidate": 200,
            "state": 20681,
            "state_multiplier": 0.29
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20683,
        "fields": {
            "candidate": 201,
            "state": 20681,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20684,
        "fields": {
            "candidate": 202,
            "state": 20681,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20685,
        "fields": {
            "candidate": 203,
            "state": 20681,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20692,
        "fields": {
            "candidate": 200,
            "state": 20691,
            "state_multiplier": 1.08
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20693,
        "fields": {
            "candidate": 201,
            "state": 20691,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20694,
        "fields": {
            "candidate": 202,
            "state": 20691,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20695,
        "fields": {
            "candidate": 203,
            "state": 20691,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20702,
        "fields": {
            "candidate": 200,
            "state": 20701,
            "state_multiplier": 0.58
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20703,
        "fields": {
            "candidate": 201,
            "state": 20701,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20704,
        "fields": {
            "candidate": 202,
            "state": 20701,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20705,
        "fields": {
            "candidate": 203,
            "state": 20701,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20712,
        "fields": {
            "candidate": 200,
            "state": 20711,
            "state_multiplier": 0.29
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20713,
        "fields": {
            "candidate": 201,
            "state": 20711,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20714,
        "fields": {
            "candidate": 202,
            "state": 20711,
            "state_multiplier": 0.26
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20715,
        "fields": {
            "candidate": 203,
            "state": 20711,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20722,
        "fields": {
            "candidate": 200,
            "state": 20721,
            "state_multiplier": 0.448
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20723,
        "fields": {
            "candidate": 201,
            "state": 20721,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20724,
        "fields": {
            "candidate": 202,
            "state": 20721,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20725,
        "fields": {
            "candidate": 203,
            "state": 20721,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20732,
        "fields": {
            "candidate": 200,
            "state": 20731,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20733,
        "fields": {
            "candidate": 201,
            "state": 20731,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20734,
        "fields": {
            "candidate": 202,
            "state": 20731,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20735,
        "fields": {
            "candidate": 203,
            "state": 20731,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20742,
        "fields": {
            "candidate": 200,
            "state": 20741,
            "state_multiplier": 0.45
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20743,
        "fields": {
            "candidate": 201,
            "state": 20741,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20744,
        "fields": {
            "candidate": 202,
            "state": 20741,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20745,
        "fields": {
            "candidate": 203,
            "state": 20741,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20752,
        "fields": {
            "candidate": 200,
            "state": 20751,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20753,
        "fields": {
            "candidate": 201,
            "state": 20751,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20754,
        "fields": {
            "candidate": 202,
            "state": 20751,
            "state_multiplier": 0.26
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20755,
        "fields": {
            "candidate": 203,
            "state": 20751,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20762,
        "fields": {
            "candidate": 200,
            "state": 20761,
            "state_multiplier": 0.95123
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20763,
        "fields": {
            "candidate": 201,
            "state": 20761,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20764,
        "fields": {
            "candidate": 202,
            "state": 20761,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20765,
        "fields": {
            "candidate": 203,
            "state": 20761,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20772,
        "fields": {
            "candidate": 200,
            "state": 20771,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20773,
        "fields": {
            "candidate": 201,
            "state": 20771,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20774,
        "fields": {
            "candidate": 202,
            "state": 20771,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20775,
        "fields": {
            "candidate": 203,
            "state": 20771,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20782,
        "fields": {
            "candidate": 200,
            "state": 20781,
            "state_multiplier": 0.74
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20783,
        "fields": {
            "candidate": 201,
            "state": 20781,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20784,
        "fields": {
            "candidate": 202,
            "state": 20781,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20785,
        "fields": {
            "candidate": 203,
            "state": 20781,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20792,
        "fields": {
            "candidate": 200,
            "state": 20791,
            "state_multiplier": 0.49
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20793,
        "fields": {
            "candidate": 201,
            "state": 20791,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20794,
        "fields": {
            "candidate": 202,
            "state": 20791,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20795,
        "fields": {
            "candidate": 203,
            "state": 20791,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20802,
        "fields": {
            "candidate": 200,
            "state": 20801,
            "state_multiplier": 0.67
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20803,
        "fields": {
            "candidate": 201,
            "state": 20801,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20804,
        "fields": {
            "candidate": 202,
            "state": 20801,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20805,
        "fields": {
            "candidate": 203,
            "state": 20801,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20812,
        "fields": {
            "candidate": 200,
            "state": 20811,
            "state_multiplier": 0.61
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20813,
        "fields": {
            "candidate": 201,
            "state": 20811,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20814,
        "fields": {
            "candidate": 202,
            "state": 20811,
            "state_multiplier": 0.42
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20815,
        "fields": {
            "candidate": 203,
            "state": 20811,
            "state_multiplier": 0.1
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3089,
        "fields": {
            "answer": 5178,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3094,
        "fields": {
            "answer": 5191,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3097,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3099,
        "fields": {
            "answer": 5243,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3102,
        "fields": {
            "answer": 5248,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3103,
        "fields": {
            "answer": 5249,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3104,
        "fields": {
            "answer": 5250,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3105,
        "fields": {
            "answer": 5251,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3106,
        "fields": {
            "answer": 5252,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3108,
        "fields": {
            "answer": 5254,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3131,
        "fields": {
            "answer": 5143,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3132,
        "fields": {
            "answer": 5144,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3133,
        "fields": {
            "answer": 5150,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3146,
        "fields": {
            "answer": 5189,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3153,
        "fields": {
            "answer": 5201,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3161,
        "fields": {
            "answer": 5243,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3164,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3181,
        "fields": {
            "answer": 5147,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3191,
        "fields": {
            "answer": 5243,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3211,
        "fields": {
            "answer": 5201,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3286,
        "fields": {
            "answer": 5142,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3305,
        "fields": {
            "answer": 5212,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3307,
        "fields": {
            "answer": 5215,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3319,
        "fields": {
            "answer": 5224,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3320,
        "fields": {
            "answer": 5225,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3321,
        "fields": {
            "answer": 5226,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3323,
        "fields": {
            "answer": 5227,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3324,
        "fields": {
            "answer": 5233,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3325,
        "fields": {
            "answer": 5235,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3327,
        "fields": {
            "answer": 5236,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3328,
        "fields": {
            "answer": 5237,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3329,
        "fields": {
            "answer": 5237,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3330,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3331,
        "fields": {
            "answer": 5256,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20821,
        "fields": {
            "answer": 5139,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20822,
        "fields": {
            "answer": 5140,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20823,
        "fields": {
            "answer": 5141,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20839,
        "fields": {
            "answer": 5155,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20840,
        "fields": {
            "answer": 5156,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20843,
        "fields": {
            "answer": 5172,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20844,
        "fields": {
            "answer": 5172,
            "candidate": 203,
            "affected_candidate": 200,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20847,
        "fields": {
            "answer": 20845,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20866,
        "fields": {
            "answer": 5262,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20867,
        "fields": {
            "answer": 5262,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20873,
        "fields": {
            "answer": 5221,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20875,
        "fields": {
            "answer": 5190,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20901,
        "fields": {
            "answer": 5231,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20903,
        "fields": {
            "answer": 5232,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20905,
        "fields": {
            "answer": 5234,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20906,
        "fields": {
            "answer": 5235,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20907,
        "fields": {
            "answer": 5235,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20911,
        "fields": {
            "answer": 20909,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20925,
        "fields": {
            "answer": 5212,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20927,
        "fields": {
            "answer": 5213,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20928,
        "fields": {
            "answer": 5213,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20930,
        "fields": {
            "answer": 5224,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20931,
        "fields": {
            "answer": 5225,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20932,
        "fields": {
            "answer": 5226,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20933,
        "fields": {
            "answer": 5226,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20953,
        "fields": {
            "answer": 5248,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20982,
        "fields": {
            "answer": 20980,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20986,
        "fields": {
            "answer": 20984,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20987,
        "fields": {
            "answer": 20984,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20988,
        "fields": {
            "answer": 20984,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20991,
        "fields": {
            "answer": 20989,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20993,
        "fields": {
            "answer": 5258,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20994,
        "fields": {
            "answer": 5258,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20999,
        "fields": {
            "answer": 5260,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21011,
        "fields": {
            "answer": 21009,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21014,
        "fields": {
            "answer": 21012,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21024,
        "fields": {
            "answer": 21019,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21025,
        "fields": {
            "answer": 21019,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21027,
        "fields": {
            "answer": 21020,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21029,
        "fields": {
            "answer": 21021,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21034,
        "fields": {
            "answer": 21030,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21035,
        "fields": {
            "answer": 21030,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21037,
        "fields": {
            "answer": 21031,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21038,
        "fields": {
            "answer": 21031,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21040,
        "fields": {
            "answer": 21032,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.02
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2656,
        "fields": {
            "answer": 5170,
            "issue": 103,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2660,
        "fields": {
            "answer": 5173,
            "issue": 100,
            "issue_score": 0.8,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2684,
        "fields": {
            "answer": 5201,
            "issue": 100,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2685,
        "fields": {
            "answer": 5201,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2882,
        "fields": {
            "answer": 5220,
            "issue": 100,
            "issue_score": 0.675,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2886,
        "fields": {
            "answer": 5225,
            "issue": 103,
            "issue_score": 0.666,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2889,
        "fields": {
            "answer": 5233,
            "issue": 102,
            "issue_score": -0.3,
            "issue_importance": 3
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20825,
        "fields": {
            "answer": 5151,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20826,
        "fields": {
            "answer": 5151,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20827,
        "fields": {
            "answer": 5151,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20828,
        "fields": {
            "answer": 5151,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20829,
        "fields": {
            "answer": 5151,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20831,
        "fields": {
            "answer": 5152,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20832,
        "fields": {
            "answer": 5152,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20833,
        "fields": {
            "answer": 5152,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20834,
        "fields": {
            "answer": 5152,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20835,
        "fields": {
            "answer": 5152,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20836,
        "fields": {
            "answer": 5152,
            "state": 20681,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20837,
        "fields": {
            "answer": 5152,
            "state": 20751,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20838,
        "fields": {
            "answer": 5152,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20848,
        "fields": {
            "answer": 5184,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20849,
        "fields": {
            "answer": 5184,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20850,
        "fields": {
            "answer": 5184,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20851,
        "fields": {
            "answer": 5184,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20852,
        "fields": {
            "answer": 5184,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20853,
        "fields": {
            "answer": 5184,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20854,
        "fields": {
            "answer": 5184,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20855,
        "fields": {
            "answer": 5173,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20856,
        "fields": {
            "answer": 5173,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20857,
        "fields": {
            "answer": 5173,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20858,
        "fields": {
            "answer": 5173,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20859,
        "fields": {
            "answer": 5173,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20860,
        "fields": {
            "answer": 5173,
            "state": 20681,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20861,
        "fields": {
            "answer": 5173,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20862,
        "fields": {
            "answer": 5173,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 203,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20863,
        "fields": {
            "answer": 5173,
            "state": 20711,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20864,
        "fields": {
            "answer": 5173,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20868,
        "fields": {
            "answer": 5262,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.18
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 208700,
        "fields": {
            "answer": 5262,
            "state": 20681,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.18
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20869,
        "fields": {
            "answer": 5262,
            "state": 20711,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20871,
        "fields": {
            "answer": 5262,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.19
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21871,
        "fields": {
            "answer": 5262,
            "state":  20801,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20876,
        "fields": {
            "answer": 5191,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20877,
        "fields": {
            "answer": 5191,
            "state": 20761,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20878,
        "fields": {
            "answer": 5191,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20879,
        "fields": {
            "answer": 5191,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20880,
        "fields": {
            "answer": 5191,
            "state": 20751,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20881,
        "fields": {
            "answer": 5191,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20882,
        "fields": {
            "answer": 5191,
            "state": 20731,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20885,
        "fields": {
            "answer": 5176,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20886,
        "fields": {
            "answer": 5176,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20887,
        "fields": {
            "answer": 5176,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20888,
        "fields": {
            "answer": 5176,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20889,
        "fields": {
            "answer": 5176,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20890,
        "fields": {
            "answer": 5176,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20891,
        "fields": {
            "answer": 5177,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20892,
        "fields": {
            "answer": 5177,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20893,
        "fields": {
            "answer": 5177,
            "state": 20751,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20894,
        "fields": {
            "answer": 5177,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20895,
        "fields": {
            "answer": 5177,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20896,
        "fields": {
            "answer": 5177,
            "state": 20761,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20897,
        "fields": {
            "answer": 5177,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20898,
        "fields": {
            "answer": 5177,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20912,
        "fields": {
            "answer": 20909,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20913,
        "fields": {
            "answer": 20909,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20914,
        "fields": {
            "answer": 20909,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20915,
        "fields": {
            "answer": 20909,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20916,
        "fields": {
            "answer": 20909,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20917,
        "fields": {
            "answer": 20909,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20918,
        "fields": {
            "answer": 5236,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20919,
        "fields": {
            "answer": 5236,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20920,
        "fields": {
            "answer": 5236,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20921,
        "fields": {
            "answer": 5236,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20922,
        "fields": {
            "answer": 5236,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20923,
        "fields": {
            "answer": 5236,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20924,
        "fields": {
            "answer": 5236,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20936,
        "fields": {
            "answer": 20934,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20937,
        "fields": {
            "answer": 20934,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20938,
        "fields": {
            "answer": 20934,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20939,
        "fields": {
            "answer": 5227,
            "state": 20711,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20940,
        "fields": {
            "answer": 5227,
            "state": 20681,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20941,
        "fields": {
            "answer": 5227,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20942,
        "fields": {
            "answer": 5227,
            "state": 20751,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20943,
        "fields": {
            "answer": 5227,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20944,
        "fields": {
            "answer": 5228,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20945,
        "fields": {
            "answer": 5228,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20946,
        "fields": {
            "answer": 5228,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20948,
        "fields": {
            "answer": 5229,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20950,
        "fields": {
            "answer": 5247,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20951,
        "fields": {
            "answer": 5247,
            "state": 20711,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20952,
        "fields": {
            "answer": 5247,
            "state": 20711,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20954,
        "fields": {
            "answer": 5253,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20955,
        "fields": {
            "answer": 5253,
            "state": 20761,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20956,
        "fields": {
            "answer": 5253,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20957,
        "fields": {
            "answer": 5253,
            "state": 20751,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20958,
        "fields": {
            "answer": 5253,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20959,
        "fields": {
            "answer": 5253,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20960,
        "fields": {
            "answer": 5253,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20961,
        "fields": {
            "answer": 5253,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20962,
        "fields": {
            "answer": 5255,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20963,
        "fields": {
            "answer": 5255,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20964,
        "fields": {
            "answer": 5255,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20965,
        "fields": {
            "answer": 5255,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20966,
        "fields": {
            "answer": 5255,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20967,
        "fields": {
            "answer": 5255,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20968,
        "fields": {
            "answer": 5255,
            "state": 20681,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20969,
        "fields": {
            "answer": 5255,
            "state": 20711,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20972,
        "fields": {
            "answer": 20970,
            "state": 20771,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20973,
        "fields": {
            "answer": 20970,
            "state": 20691,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20974,
        "fields": {
            "answer": 20970,
            "state": 20741,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20975,
        "fields": {
            "answer": 5250,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20976,
        "fields": {
            "answer": 5250,
            "state": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20977,
        "fields": {
            "answer": 5250,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20978,
        "fields": {
            "answer": 5250,
            "state": 20691,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20979,
        "fields": {
            "answer": 5250,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21003,
        "fields": {
            "answer": 5261,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21004,
        "fields": {
            "answer": 5261,
            "state": 20761,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21005,
        "fields": {
            "answer": 5261,
            "state": 20701,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21006,
        "fields": {
            "answer": 5261,
            "state": 20801,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21007,
        "fields": {
            "answer": 5261,
            "state": 20781,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21008,
        "fields": {
            "answer": 5261,
            "state": 20751,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21015,
        "fields": {
            "answer": 21012,
            "state": 20811,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21016,
        "fields": {
            "answer": 21012,
            "state": 20771,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21017,
        "fields": {
            "answer": 21012,
            "state": 20791,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2620,
        "fields": {
            "answer": 5139,
            "candidate": 200,
            "answer_feedback": "Well in tune with the public mood as usual, Governor. Commentators everyone discuss the potential implications of climate change for Vermont, and these floods are clearly a sign that resiliency measures are needed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2621,
        "fields": {
            "answer": 5140,
            "candidate": 200,
            "answer_feedback": "Your presence is noted and appreciated by locals and first responders, you really are a man of action. Some feel that the entire thing stinks of political gamesmanship and not substance however."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2622,
        "fields": {
            "answer": 5141,
            "candidate": 200,
            "answer_feedback": "Your response to the crisis is widely praised, and there is bipartisan cooperation to support reconstruction efforts. Some liberals complain over your attempt to bring back “Vermont Strong” license plates unilaterally."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2623,
        "fields": {
            "answer": 5142,
            "candidate": 200,
            "answer_feedback": "Welch and Sanders do their best to send federal dollars your way, but Senator Leahy’s absence is clearly a hindrance to getting a major package. They just don’t have his seniority. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2624,
        "fields": {
            "answer": 5143,
            "candidate": 200,
            "answer_feedback": "Democrats praise your “sound judgment” and “olive branch” and confirm your pick quickly. Gibbs mumbles something about the flaws of the public education model… "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2625,
        "fields": {
            "answer": 5144,
            "candidate": 200,
            "answer_feedback": "The appointment of Zoie Saunders becomes an unmitigated disaster. The left screams “Florida” and “privatization” as Saunders comes under heavy assault. The Senate votes down the nomination, and Saunders is stuck in the limbo of an interim appointment. Public school advocates, many of whom voted for you, are incensed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2626,
        "fields": {
            "answer": 5145,
            "candidate": 200,
            "answer_feedback": "Another moderate technocrat is added to the ranks of your administration, and there is nary a peep about the whole thing. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2628,
        "fields": {
            "answer": 5147,
            "candidate": 200,
            "answer_feedback": "Democrats applaud your reach across the aisle, finally, it’s the Phil Scott they thought they’d get in 2017. Senator Baruth and Speaker Krowinski book several meetings with you to shepherd a bipartisan agenda through swiftly. Jason Gibbs tells you you’re making a big mistake."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2629,
        "fields": {
            "answer": 5148,
            "candidate": 200,
            "answer_feedback": "The usual intones of “Governor Dad” fill the State House chamber, you can see Democrats trying not to roll their eyes as you chide them for their irresponsibility. Looks like another year of dysfunction is coming. Gibbs is thrilled by their discontent."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2630,
        "fields": {
            "answer": 5149,
            "candidate": 200,
            "answer_feedback": "Everyone agrees with you, but this speech feels misplaced, where is your agenda for the coming year? This feels light on specifics."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2631,
        "fields": {
            "answer": 5150,
            "candidate": 200,
            "answer_feedback": "Your optimism has seemingly been replaced by dour pessimism, and it leaves everyone unsettled. When Democrats catch their footing they accuse you of demanding massive cuts to public services. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2632,
        "fields": {
            "answer": 5151,
            "candidate": 200,
            "answer_feedback": "Legislators offer praise for your bipartisan goodwill, but your office is also hit with a deluge of handwritten letters, and Governor, they’re angry."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2633,
        "fields": {
            "answer": 5152,
            "candidate": 200,
            "answer_feedback": "Outrage! Democrats slam your intransigence. Rep. Beck and Rep. Donahue struggle to understand your reasoning for vetoing such a common-sense proposal. The NRA upgrades your rating, Senator Ingalls gives you a wide grin and wave next time you see him."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2636,
        "fields": {
            "answer": 5155,
            "candidate": 200,
            "answer_feedback": "Democrats, expecting a veto, are caught off guard, and Senator Baruth and party director Jim Dandeneau offer quiet praise for your willingness to work with them, clearly hoping to bludgeon you with your veto. Fiscal conservatives in your inner circle are furious, of course, but they don't understand the politics like you do."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2637,
        "fields": {
            "answer": 5156,
            "candidate": 200,
            "answer_feedback": "When the veto comes down, the Democrats are ready. They hit you with a blistering line of press releases and statements slamming your intransigence, and prepare to override your veto in the legislature. They will succeed in overriding you, but as usual, their criticisms bounce off you harmlessly."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2638,
        "fields": {
            "answer": 5157,
            "candidate": 200,
            "answer_feedback": "Onlookers are puzzled by your indecisiveness. Your veto of the yield bill is fodder for your base, but ultimately this is a net nothing."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2651,
        "fields": {
            "answer": 5170,
            "candidate": 200,
            "answer_feedback": "Your efforts to recruit intelligent moderates to run as Republicans goes absolutely nowhere, but you find some success in recruiting pro-business Democrats to challenge progressive incumbents, like Ways & Means Chair Rep. Kornheiser down in Brattleboro and Tanya Vyhovsky in Burlington."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2652,
        "fields": {
            "answer": 5171,
            "candidate": 200,
            "answer_feedback": "\nThis is your usual approach, and it’s always worked in the past. No need to change tact, but Republican politicians are frustrated with your apparent apathy.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2653,
        "fields": {
            "answer": 5172,
            "candidate": 200,
            "answer_feedback": "You hail Ambassador Haley as a pragmatist, and assail Trump as a divider to a cheering crowd of the moderate middle-class. You wince as Haley promptly delivers a speech denouncing the COVID-19 federal stimulus packages that have been Vermont’s lifeblood. Haley narrowly wins the Vermont primary on Super Tuesday thanks to independents and Democrats, but wins nothing else and drops out of the race the next day as Trump marches to the nomination with ease. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2654,
        "fields": {
            "answer": 5173,
            "candidate": 200,
            "answer_feedback": "..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2657,
        "fields": {
            "answer": 5176,
            "candidate": 200,
            "answer_feedback": "The national media covers your rebellion against MAGA, which is received with applause and pride by most Vermonters. Conservatives of course, are incensed, and VTGOP Chair Paul Dame barely shuts down a motion to censure you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2658,
        "fields": {
            "answer": 5177,
            "candidate": 200,
            "answer_feedback": "You’re completely delusional, Governor. Completely delusional."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2659,
        "fields": {
            "answer": 5178,
            "candidate": 200,
            "answer_feedback": "This has been your usual approach for some time and serves its purpose, but some Vermonters would like you to be more vocal about opposition to Trump."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2665,
        "fields": {
            "answer": 5184,
            "candidate": 200,
            "answer_feedback": "<I>Goooooood Anakin, Gooooood.</I>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2666,
        "fields": {
            "answer": 5185,
            "candidate": 200,
            "answer_feedback": "Jason grumbles something as he returns to his lunch. You change the topic to the Boston Bruins. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2669,
        "fields": {
            "answer": 5189,
            "candidate": 200,
            "answer_feedback": "Though your policies will take years to manifest themselves in the big picture, the voters trust you’re working on their behalf. They know you. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2670,
        "fields": {
            "answer": 5191,
            "candidate": 200,
            "answer_feedback": "It seems that Governor Nice Guy is a thing of the past. Dean isn’t some nobody, and your attacks only serve to damage your image as a defender of civility."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2674,
        "fields": {
            "answer": 5196,
            "candidate": 200,
            "answer_feedback": "R.I.P. Dick Mazza, 1939-2024 "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2678,
        "fields": {
            "answer": 5200,
            "candidate": 200,
            "answer_feedback": "VT-Gov Republican Primary\nPhil Scott (i): 54.2%\nJim Sexton: 36.6%\n(Small loss for Scott)\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2679,
        "fields": {
            "answer": 5201,
            "candidate": 200,
            "answer_feedback": "VT-Gov Republican Primary\nPhil Scott (i): 73.2%\nJim Sexton: 19.6%"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2684,
        "fields": {
            "answer": 5227,
            "candidate": 200,
            "answer_feedback": "Nikki Haley agrees to appear with you and the event goes well, but Dean slams you for it, emphasizing Haley’s starkly right-wing views on Social Security, Medicare and abortion, and her support for Trump. Dean lends the attacks immediate credibility. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2685,
        "fields": {
            "answer": 5228,
            "candidate": 200,
            "answer_feedback": "You’ve stared down the bright lights of political stars before. Vermonters know you, surely they’ll turn out to keep you in."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2686,
        "fields": {
            "answer": 5229,
            "candidate": 200,
            "answer_feedback": "It’s an odd thing, seeing Mitt Romney and Obama both on the campaign trail, but Romney stumps with you in Shelbourne, and the two of you hit it off"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2687,
        "fields": {
            "answer": 5230,
            "candidate": 200,
            "answer_feedback": "The President is fully booked until November unfortunately, but of course he’ll keep working with you, just not before then. Odd considering he’s barely stumping for Harris."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2688,
        "fields": {
            "answer": 5242,
            "candidate": 200,
            "answer_feedback": "Maybe next year, Governor. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2689,
        "fields": {
            "answer": 5243,
            "candidate": 200,
            "answer_feedback": "You’re met with a hail of boos and jeers. You win the race, but it all feels hollow. The children in the crowd look confused."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2692,
        "fields": {
            "answer": 5246,
            "candidate": 200,
            "answer_feedback": "Ah, “Governor Nice Guy.” Vermonters appreciate your civility and optimism, especially in contrast to the divisive national scene. That said, the Democratic vote is starting to consolidate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2693,
        "fields": {
            "answer": 5247,
            "candidate": 200,
            "answer_feedback": "Responding to these attacks directly only brings more attention to them, and Governor, it’s working. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2694,
        "fields": {
            "answer": 5248,
            "candidate": 200,
            "answer_feedback": "This departure into negative campaigning riles up the Republican base behind you, but independents and Democrats are wondering what happened to the nice, friendly Phil Scott."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2695,
        "fields": {
            "answer": 5249,
            "candidate": 200,
            "answer_feedback": "Your ads are well-received, but Dean is vastly outspending you with more and higher quality advertisements."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2696,
        "fields": {
            "answer": 5250,
            "candidate": 200,
            "answer_feedback": "Dean obviously tries tip-toeing around the necessity of tax increases in his plan for the state, and it flops. But viewers seem to find him more likable, most observers call it a draw, but who knows what effect it will have."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2697,
        "fields": {
            "answer": 5251,
            "candidate": 200,
            "answer_feedback": "Dean laughs and smiles his way through the debate, he has such easy charisma, you clearly don’t want to be there. Dean sweeps the debate with ease. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2698,
        "fields": {
            "answer": 5252,
            "candidate": 200,
            "answer_feedback": "An interesting tact, and one that seems to work. Dean tries to explain the difference in your approaches but it’s hardly convincing. Observers agree that you were the better debater."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2699,
        "fields": {
            "answer": 5253,
            "candidate": 200,
            "answer_feedback": "“What passes for business as usual in Washington D.C. has never been in line with Vermont values. So although my opponent’s misleading ads are disappointing, Vermonters know the truth.”"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2700,
        "fields": {
            "answer": 5254,
            "candidate": 200,
            "answer_feedback": "The media covers the apparent disunity in your campaign as “disarray.” Your new television ads are shiny and polished, but who knows if they’re moving anybody when you’re outspent 2 to 1. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2701,
        "fields": {
            "answer": 5255,
            "candidate": 200,
            "answer_feedback": "At autumn parades in Lyndonville and St. Albans, you receive a hero's welcome. Shaking hands, meeting voters. In a diner in Milton you see a Dean attack ad on the television. You grimace. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2702,
        "fields": {
            "answer": 5256,
            "candidate": 200,
            "answer_feedback": "Your implied support for Malloy is all Democrats need to tie you to the poisonous national Republican brand. In the past you’ve made strenuous efforts to put distance between yourself and these types, that all vanishes in the media circus."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2703,
        "fields": {
            "answer": 5257,
            "candidate": 200,
            "answer_feedback": "This is generally what is expected from you, and nobody finds it merits further discussion."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2707,
        "fields": {
            "answer": 5212,
            "candidate": 200,
            "answer_feedback": "Republicans are thrilled and energized by your presence, they’re optimistic this is their year. You do not share their optimism, you find most of their candidates are more interested in conspiracy theories about the WEF. You cut your campaigning short before you have to take any more awkward photos with lunatics who think you’re a baby murderer. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2708,
        "fields": {
            "answer": 5215,
            "candidate": 200,
            "answer_feedback": "This strategy seems to work for the most part, with the possible downside of benefitting legislative candidates who are more interested in abortion than affordability."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2711,
        "fields": {
            "answer": 5220,
            "candidate": 200,
            "answer_feedback": "It seems to be you against Howard Dean, buckle up, this election will be unlike any you've ever run."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2712,
        "fields": {
            "answer": 5221,
            "candidate": 200,
            "answer_feedback": "Joe Benning does not run for Governor, citing difficult odds and enjoying retirement from politics. Far-right crackpot Gregory Thayer sweeps the Republican nomination, and trails in the polls by 35 points to Howard Dean. You will not endorse him, and privately you vote for Vice President Harris and Governor Dean. The moderate wing of your party isn’t just dead, it’s rotting. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2714,
        "fields": {
            "answer": 5224,
            "candidate": 200,
            "answer_feedback": "The expected answer of “Governor Dad”, that gets its usual praise and disagreement. Dean hits back that the lack of action on healthcare is actually costing the state more, and Governor, people are listening. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2715,
        "fields": {
            "answer": 5225,
            "candidate": 200,
            "answer_feedback": "While it’s true your approach to healthcare has reflected moderation and pragmatism, Vermonters are tired of waiting for “all payer healthcare” to work, they don’t even know what that means."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2716,
        "fields": {
            "answer": 5226,
            "candidate": 200,
            "answer_feedback": "You can only emphasize COVID-19 so much, this is a desperate tangent. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2717,
        "fields": {
            "answer": 5233,
            "candidate": 200,
            "answer_feedback": "It was the COVID-19 crisis that turned you from a popular Governor into a beloved one. While these crises are not very recent, it’s good to remind the voters what made them love you so much. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2718,
        "fields": {
            "answer": 5235,
            "candidate": 200,
            "answer_feedback": "The housing issue has emerged as the state’s most critical challenge, and your policy of zoning reform and construction are popular and widely praised by experts. Can’t go wrong on this issue. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2719,
        "fields": {
            "answer": 5236,
            "candidate": 200,
            "answer_feedback": "Have you, Governor? It seems this session you’ve caved in to tax-and-spend Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20846,
        "fields": {
            "answer": 20845,
            "candidate": 200,
            "answer_feedback": "What happened to Governor Nice Guy? Even mild criticisms against the popular Treasurer goes against everything you’ve stood for. So much for “civility.” Pieciak ignores your criticisms and you appear petulant and childish. Criticisms of Pieciak’s work are meekly retracted. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20865,
        "fields": {
            "answer": 5262,
            "candidate": 200,
            "answer_feedback": "75 year old Howard Dean announces to cheering crowds on Church Street, in Burlington, where he announced his run for President in 2003, that he will seek the Governorship. He assails the inertia and dysfunction that has prevailed under your leadership. He says he'll do better. Big names like Welch, Sanders, Balint, and Pieciak line up to endorse him. For the first time in 8 years, you worry about an election"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20874,
        "fields": {
            "answer": 5190,
            "candidate": 200,
            "answer_feedback": "It’s definitely a more negative tone than people are used to, but attacks on the legislature rile up your base without negative consequences."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20884,
        "fields": {
            "answer": 20883,
            "candidate": 200,
            "answer_feedback": "No harm, no foul."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20899,
        "fields": {
            "answer": 5202,
            "candidate": 200,
            "answer_feedback": "VT-Gov Republican Primary\nPhil Scott (i): 66.9%\nJim Sexton: 25.4%"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20900,
        "fields": {
            "answer": 5202,
            "candidate": 200,
            "answer_feedback": "VT-Gov Republican Primary\nPhil Scott (i): 61.7%\nJim Sexton: 29.2%"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20902,
        "fields": {
            "answer": 5232,
            "candidate": 200,
            "answer_feedback": "Bang, bang, bang. Your attacks land with a punch as Democratic legislators across the state receive furious letters from their constituents demanding to know why they voted to raise property taxes, regardless of whether or not their town is even getting taxes raised. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20904,
        "fields": {
            "answer": 5234,
            "candidate": 200,
            "answer_feedback": "It’s a bit confusing to campaign against rising crime when you are the incumbent, but voters are unlikely to blame the rise in crime on you, and more likely to blame it on local officials like Sarah George and Emma Mulvaney-Stanak, who are Democrats and Progressives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20908,
        "fields": {
            "answer": 5237,
            "candidate": 200,
            "answer_feedback": "It was the COVID-19 crisis that turned you from a popular Governor into a beloved one. While these crises are not very recent, it’s good to remind the voters what made them love you so much. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20910,
        "fields": {
            "answer": 20909,
            "candidate": 200,
            "answer_feedback": "This will help with potential Klar dissidents."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20926,
        "fields": {
            "answer": 5213,
            "candidate": 200,
            "answer_feedback": "It’s true that relations between the VTGOP and yourself have been sour, but there was real hope for working together this year. Paul Dame whines about your coldness to the media, and the Republican Party seems divided. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20929,
        "fields": {
            "answer": 5214,
            "candidate": 200,
            "answer_feedback": "Emphasizing your personal brand is always a winner, but Republican leaders are disappointed in your apparent apathy. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20935,
        "fields": {
            "answer": 20934,
            "candidate": 200,
            "answer_feedback": "Thanks to Patrick Leahy, Vermont has been flush with cash and construction. Voters are giving you credit too."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20949,
        "fields": {
            "answer": 5243,
            "candidate": 200,
            "answer_feedback": "It’s a great day at the racetrack. You nab the checkered flag amidst happy crowds, it’s exactly what you missed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20971,
        "fields": {
            "answer": 20970,
            "candidate": 200,
            "answer_feedback": "Your instincts have won you many elections. Here’s hoping they will win you another one. Very noble, Governor. Gibbs calls up the RGA, they hit Vermont with a barrage of television advertisements assaulting “Crazy Howard Dean” as somehow responsible for rising property taxes. You grimace."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20981,
        "fields": {
            "answer": 20980,
            "candidate": 200,
            "answer_feedback": "Dean fires back - he ran because he’s been paying attention. He rings off a list of issues he’s observed, and emphasizes how he’s never left the state. You seem small."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20985,
        "fields": {
            "answer": 20984,
            "candidate": 200,
            "answer_feedback": "Even those who know you best are blindsided by your sudden and open support for the Senate’s democratic socialist. A cordial relationship, yes, but voting for him? Many Republicans of course, brand you a traitor. For his part, Bernie doesn’t need your support and seems to have buried the hatchet with Dean after the latter’s vocal opposition to his presidential campaign in 2016."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20990,
        "fields": {
            "answer": 20989,
            "candidate": 200,
            "answer_feedback": "This seemingly vague deflection leads to limited chatter, but it’s decently clear what you mean. \n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20992,
        "fields": {
            "answer": 5258,
            "candidate": 200,
            "answer_feedback": "Governor Dean jumps at the idea. When you speak at the press conference, your messages couldn’t be more different. Dean furiously denounces “Trumpist neo-fascism” while pointing into the air, your statement is more measured, calm, and much shorter. Your references to “white supremacy” in the Republican Party set the activist base on fire, but they have always despised you"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20995,
        "fields": {
            "answer": 5259,
            "candidate": 200,
            "answer_feedback": "You have said this many times before, Governor."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20996,
        "fields": {
            "answer": 5260,
            "candidate": 200,
            "answer_feedback": "Your silence is noticed, Governor"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21000,
        "fields": {
            "answer": 5261,
            "candidate": 200,
            "answer_feedback": "You scroll through dozens of social media posts of family members with differing views enjoying a meal together, of a bipartisan State House baseball game (Art Peterson hit a home run), and other demonstrations of bipartisanship. But you keep reading the letter you get from a 9 year old girl in elementary school. She’s scared, she’s so scared, she asks you to make things nicer."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21010,
        "fields": {
            "answer": 21009,
            "candidate": 200,
            "answer_feedback": "It’s an exciting time for the whole campaign team, and it really exposes you to the youth and energy in the party. There’s laughter, cheer, and optimism as you criss-cross the state with your team. Now all that’s left is the voting. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21013,
        "fields": {
            "answer": 21012,
            "candidate": 200,
            "answer_feedback": "South Burlington, St. Albans, Rutland, you quickly visit “central target” towns, as your team calls them. Your campaign events are monotonous, they lack energy. You’re glad when it ends. You miss the dogs."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21023,
        "fields": {
            "answer": 21019,
            "candidate": 200,
            "answer_feedback": "Hopefully she wins Governor. For the sake of the country."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21026,
        "fields": {
            "answer": 21020,
            "candidate": 200,
            "answer_feedback": "With the national mood reaching the feeling of impending apocalypse, those Vermonters who see this do not appreciate your sense of humor. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21028,
        "fields": {
            "answer": 21021,
            "candidate": 200,
            "answer_feedback": "This answer pleases only a very few, Democrats lambast your cowardice and faux-opposition to Trump. You’re a coward, Governor."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21033,
        "fields": {
            "answer": 21030,
            "candidate": 200,
            "answer_feedback": "You feel a deep sense of foreboding as you drive home. You can’t even think about your own race. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21036,
        "fields": {
            "answer": 21031,
            "candidate": 200,
            "answer_feedback": "“Republican Governor Confronts Trump Supporters” makes the rounds in the national press as the clock counts down to polls closing. You regret the whole thing, what a waste of effort. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21039,
        "fields": {
            "answer": 21032,
            "candidate": 200,
            "answer_feedback": "Your smile and laugh is received with spitting and screaming. In the truck, you can only feel scared. "
        }
    }
]

// Function to set the music player to a specific soundtrack
function getTooltips(str) {
    let matches = [];

    tooltipList.forEach((tooltip, index) => {
        // Adjust the regex to match searchString potentially surrounded by “ and followed by optional punctuation
       let regex = new RegExp(`(?<=\\b|\\s|^|“)${tooltip.searchString}(?=[.,;!?]?\\b|\\s|”|$)`, 'g');


        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push({
                start: match.index + (match[0].startsWith('“') ? 1 : 0), // Adjust for potential starting “
                end: match.index + match[0].length - (match[0].endsWith('”') ? 1 : 0) - (match[2] ? 1 : 0), 
                tooltipIndex: index
            });
        }
    });

    // Sort by starting position; if two start at the same position, longer match comes first
    matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

    // Filter out overlaps
    for (let i = 0; i < matches.length - 1; ) {
        if (matches[i + 1].start < matches[i].end) {
            matches.splice(i + 1, 1); // Remove the next match since it overlaps
        } else {
            i++; // Move to next match
        }
    }

    return matches;
}
function applyTooltips(str) {
    const matches = getTooltips(str);
    let result = '';
    let lastIndex = 0;

    matches.forEach(match => {
        const tooltip = tooltipList[match.tooltipIndex];
        result += str.slice(lastIndex, match.start);
        result += `<span class='mytooltip'>${tooltip.searchString}<span class='mytooltiptext'>${tooltip.explanationText}</span></span>`;
        lastIndex = match.end;
    });

    result += str.slice(lastIndex); // Add the remainder of the original string
    return result;
}

function applyTooltipsToObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = applyTooltips(obj[key]);
        } else if (typeof obj[key] === 'object') {
            applyTooltipsToObject(obj[key]); // Recursive call
        }
    }
}
applyTooltipsToObject(campaignTrail_temp.questions_json);
applyTooltipsToObject(campaignTrail_temp.answers_json);
applyTooltipsToObject(campaignTrail_temp.answer_feedback_json);
// Function to set the music player to a specific soundtrack
function newMusicPlayer() {
    trackSel = document.createElement("div");
    trackSel.id = "trackSelParent"
    let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
    z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
    for (i in soundtracks) {
      if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
        z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
      }
    }
    z += `</select></b><br><br>`
    // <label><input type="radio" name="option" value="option1">Option 1</label><br>
    for (i in soundtracks[e.selectedSoundtrack].tracklist) {
      let a = soundtracks[e.selectedSoundtrack].tracklist[i]
      let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
      z += b
    }
    z += "</div><br><br>"
    trackSel.innerHTML = z
  
    // select correct song
  
    musicBox.appendChild(trackSel);
    Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])[0].checked = true
  
    // set soundtrack changer
  
    soundtrackSelector = document.getElementById("selectSoundtrack")
    soundtrackSelector.onchange = function() {
      for (i in soundtracks) {
        if (soundtracks[i].name == soundtrackSelector.value) {
          e.selectedSoundtrack = i
          break
        }
      }
      document.getElementById("trackSelParent").remove()
      newMusicPlayer()
    }
  
    var matches = document.querySelectorAll('.trackSelector');
  
    for (match in matches) {
      matches[match].onchange = function() {
        audio = $("#campaigntrailmusic")[0];
        audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
        audio.currentTime = 0
      }
    }
  
    musicBox.children[2].loop = false
    musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url
  
    musicBox.children[2].onended = function() {
      console.log("next track")
      let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
      let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
      let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
        return f.tagName == "LABEL"
      }).map(f=>f.children[0])
      //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
      buttons[newSel].click()
    }
  
    for (w = 0; w < 7; w++) {
      document.getElementById("trackSelParent").appendChild(document.createElement("br"))
    }
    
    generateTime();
  }
function setSoundtrack(soundtrackName) {
    // Find the soundtrack index by name
    let soundtrackIndex = null;
    for (let i in soundtracks) {
        if (soundtracks[i].name === soundtrackName) {
            soundtrackIndex = i;
            break;
        }
    }

    // If the soundtrack is found, update the music player
    if (soundtrackIndex !== null) {
        e.selectedSoundtrack = soundtrackIndex;

        // Remove the current track selection UI
        document.getElementById("trackSelParent").remove();

        // Recreate the music player UI with the new soundtrack
        newMusicPlayer();

        // Select the first track of the new soundtrack
        var audio = document.getElementById("campaigntrailmusic");
        audio.src = soundtracks[soundtrackIndex].tracklist[0].url;
        audio.currentTime = 0;
        audio.play();
    } else {
        console.error("Soundtrack not found: " + soundtrackName);
    }
}


var Music = 0;

function updateCandidateName(candidateId, newFirstName, newLastName) {
    for (var i = 0; i < e.candidate_json.length; i++) {
        var candidate = e.candidate_json[i];
        if (candidate.pk === candidateId) {
            candidate.fields.first_name = newFirstName;
            candidate.fields.last_name = newLastName;
            break; // Exit the loop once the candidate is found and updated
        }
    }
}



campaignTrail_temp.candidate_image_url = "https://i.imgur.com/byFtv7l.png";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/GwWm2mN.png";
campaignTrail_temp.candidate_last_name = "";
campaignTrail_temp.running_mate_last_name = "";

const customStyling = document.createElement("style");
  customStyling.innerHTML = `
  #campaign_sign {
      background-image: url("https://i.imgur.com/5SlYA42.png");
      background-size: cover;
      border-color: #c9c9c9;    
      border-width: .01em;
      margin: 0 auto;
      background-position: center;
      width: 100%; 
      height: 90px; 
      margin-left: -0.07em;
    }
    `;
document.head.appendChild(customStyling);


campaignTrail_temp.cyoa = true
cyoAdventure = function (a){
ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
if (ans == 5148 || ans ==  5149 || ans ==  5150) {
    console.log("(ans == 5148 || ans ==  5149 || ans ==  5150)");
    campaignTrail_temp.questions_json[6] = {
        
        "model": "campaign_trail.question",
        "pk": 1055,
        "fields": {
            "priority": 10,
            "description": "You’re chatting over lunch with Gibbs on the fifth floor when he turns the conversation towards education funding. Vetoing the yield bill was obvious, but Gibbs wants to do more. Twist the knife he says, leave the Democrats holding the bag for a 14% property tax increase and they’ll be wiped out. He’s gleeful at the thought, as you lick the bits of your sandwich off your fingers, you think.",
            "likelihood": 1
        } 
    }
    }
    
    if (ans == 5147) {
    console.log("ans == 5147")
    campaignTrail_temp.questions_json[6] =  {
        
        "model": "campaign_trail.question",
        "pk": 1052,
        "fields": {
            "priority": 10,
            "description": "Negotiations with legislative Democrats on the state’s education finances have finally borne fruit. Major bipartisan reforms to the education financing system are on the way, including much of Representative Scott Beck’s ideas on homestead and non-homestead taxes and pupil weighting, as well as Representative Emilie Kornheiser’s measures to tax short-term rentals and limit the powers of local voters. Your signature of the yield bill is a celebration of bipartisanship. Gibbs approaches you after the signing.\n",
            "likelihood": 1
        }
    }
}
if (ans == 5262) {
updateCandidateName(202, "Howard", "Dean");
updateCandidateName(201, "Pao", "Mutino");
updateCandidateName(203, "", "Write In");
}


if (ans == 5221) {
campaignTrail_temp.question_number=24
updateCandidateName(200, "Gregory", "Thayer");
}
campaignTrail_temp.multiple_endings=true
endingPicker = (out, totv, aa, quickstats) => {
used=false
e.final_overall_results.sort((a, b) => b.popular_votes - a.popular_votes);
//Change to actuall ending
if (ans == 5221) {
        //If you want to enable replacing the image based upon your performance, copy from here....
          if (used != true) {
              setInterval(function () {
                  used = true;
                  imgg = document.getElementsByClassName("person_image")[0];
                  if (imgg != null) {
                      imgg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/%22A_sail%21_A_sail%21%21%22_LCCN2012645216.jpg/330px-%22A_sail%21_A_sail%21%21%22_LCCN2012645216.jpg";
                  }
              }, 100);
          }
          // to here!
           return "<font color='black'><h3>We have just finished counting the votes in Kentucky......</h3><p>and it appears that by the thinnest of margins you have won your and your running mates, home state! It seems that dissatisfaction among Cleavelandite Democrats coupled with a heavy investment from your campaign in Kentucky, has paid off! This has no doubt shown the nation that Byrans victory over the Democratic nomination was only a temporary flirtation with populism on the part of the party, and that the Gold Democrats are still a force to be reckoned with. It is likely that in four years, the gold wing of the party will recapture its nomination. All of this is down to your spectacular campaign, one that will no doubt be memorialized in the history books of America.</p></font>";
      }
}
}






campaignTrail_temp.jet_data = [{
    "mapping_enabled": true,
    "mapping_data": {
        "mapSvg": "",
        "x": "92",
        "y": "989",
        "dx": "-323",
        "dy": "-89"
    },
    "nicknames": {
        "200": "Scott",
        "201": "Dean",
        "202": "Cheislstein",
        "203": "Write in"
    }
}
]





 