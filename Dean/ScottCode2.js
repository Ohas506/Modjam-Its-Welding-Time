
// Generated mapping code
(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=370,u=215,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-323, -89, 92, 989, false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={Windsor:"M 316.53 368.69 316.79 374.59 321.53 376.78 322.07 379.38 320.91 381.84 336.32 387.65 337.07 386.51 363.55 396.67 400.03 412.05 399.73 412.53 413.77 416.44 430.37 421.64 464.3 435.2 460.52 437.87 456.99 444.03 454.24 445.04 446.62 450.48 440.5 457.9 439.1 461.72 438.89 465.99 439.63 467.72 438.96 471.74 436.88 475.36 436.58 480.58 433.51 482.12 431.67 489.87 433.32 492.54 432.28 495.15 427.84 499.21 421.9 502.03 420.19 504.13 419.57 507.44 420.15 515.53 417.94 519.93 416.64 520.23 415.55 525.1 416.12 526.97 419.05 529.68 420.04 532.07 419.84 536.7 417.07 541.94 417.6 546.76 416.32 551.18 414.26 567.41 411.89 570.07 411.18 572.78 411.84 577.58 417.56 580.27 415 583.48 412.62 588.39 416.42 594.89 414.85 598.24 413.28 605.38 409.79 612.16 406.32 613.89 405.37 618.85 406.69 622.75 377.29 621.75 344.89 625.82 342.55 626.34 324.37 620.34 308.39 614.6 308.38 599.5 295.97 599.04 296.98 582.28 299.59 582.09 300.22 572.69 307.95 572.91 307.97 571.21 324.07 580.77 323.11 574.46 329.24 558.6 333.31 543.62 332.89 540.8 320.94 537.06 321.52 532.64 316.24 531.56 318.34 514.37 321.03 497.96 324.46 499.25 331.47 484.15 339.28 465.46 308.92 454.18 313.01 445.74 309.14 443.86 318.41 423.8 316.08 419.45 316.3 417.32 314.89 415.03 306.39 411.53 304.43 414.96 295.48 411.31 295.36 404.89 273.79 415.92 270.55 401.73 268.7 402.69 268.76 396.09 275.54 398.94 294.91 389.32 295.45 402.8 297.69 403.65 310.13 377.18 311.73 377.78 316.53 368.69 Z", Essex:"M 538.38 3.99 570.99 2.58 589.67 2.41 609.96 1.75 622.15 1.67 645.89 1 642.48 3.19 641.98 4.99 639.73 5.43 636.09 3.01 631.04 5.26 628.25 7.85 627.67 10.41 630.72 15.95 633.31 18.42 633.07 23.74 633.67 31.36 636.42 34.06 638.56 37.58 634.15 43.12 633.03 46.04 629.23 51.43 626.47 52.62 626.01 55.9 624.08 59.31 625.31 62.26 623.77 63.78 622.47 67.6 619.72 68.55 619.11 71.42 620.96 73.13 619.89 76.45 620.36 78.05 618.31 81.08 615.15 81.83 614.53 84.36 610.43 88.26 609.24 91.08 605.48 92.45 607.19 95.82 606.97 100.6 613.89 109.5 615.07 111.69 614.14 113.5 615.1 116.26 614.66 118.42 617.14 119.54 617.31 125.27 619.06 127.66 623.04 127.13 624.32 131 622.99 132.6 625.79 134.86 624.74 138.53 625.51 142.45 623.85 145.44 625.63 147.72 629 148.79 629.69 150.43 627.39 153.05 626.72 155.9 624.33 157.74 621.71 158.35 617.19 157.35 615.1 159.08 614.88 161.54 620.59 166.08 620.6 169.17 618.53 172.12 615.72 172.73 618.62 177.4 620.14 178.81 615.59 182.58 614.59 185.08 609.97 185.28 608.34 189.01 606.11 187.98 603.26 189.06 603.66 194.14 601.4 194.19 599.68 200.85 598.76 202.14 594.82 203.38 595.66 205.33 589.17 210.58 586.08 212.09 580.58 212.19 579.18 215 575.72 213.29 573.5 213.25 570.11 215.64 567.09 215.51 564.2 217.93 564.84 220.51 561.22 221.94 560.79 227 561.79 230.51 560.2 232.05 555.48 233.9 531.37 201.55 538.82 196.76 550.34 182.2 537.17 164.31 553.59 142.26 536.6 129.86 554.61 105.5 529.07 87.21 520.2 81.07 531.4 66.23 533.71 63.68 544.04 49.02 533.5 41.17 538.38 3.99 Z", Washington:"M 276.34 299.15 290.89 258.58 288.15 257.71 299.48 227.69 306.61 230.56 308.29 230.47 314.23 220.2 304.89 214.99 313.69 198.15 323.49 201.35 334.87 207.55 351.24 216.92 364.78 190.58 365.53 188.7 391.42 208.01 393.63 202.73 397.99 195.04 406.25 179.43 458.82 207.58 460.51 212.3 447.33 237.05 435.67 251.57 435.74 260.81 422.7 284.64 410.07 278.77 404.03 310.81 400.98 309.23 374.83 298.93 373.76 301.76 368.09 299.85 357.38 325.06 356.03 324.54 343.81 351.16 328.89 345.26 302.17 334.42 290.07 329.78 285.07 330.37 283.86 322.41 281.36 301.23 280.89 298.68 276.34 299.15 Z", Windham:"M 308.39 614.6 324.37 620.34 342.55 626.34 344.89 625.82 377.29 621.75 406.69 622.75 404.98 627.62 405.7 633.29 402.49 636.87 404.16 640.44 401.92 643.96 402.18 649.87 400.82 652.86 402.07 655.52 404.9 656.61 404.38 658.56 406.93 662.23 406.45 665.62 404.36 668.78 406.37 673.73 403.82 679.05 399.06 683.91 398.16 685.56 399.98 689.73 399.28 693.96 400.8 697.88 403.98 700.21 402.93 703.49 400.06 703.87 398.68 707.53 399.63 709.85 396.51 713.63 394.5 712.96 391.71 715.16 385.1 716.72 381.58 719.58 380.97 721.34 383 724.82 382.88 728.76 383.61 732.27 382.07 734.68 381.75 739.43 379.38 742.41 376.27 743.95 375.4 750.22 375.91 752.63 375.14 755.07 377.36 758.9 378.33 766.41 379.65 771.85 385.1 776.79 387.54 780.53 387.67 782.38 385.52 784.44 386.45 786.13 392.09 783.12 395.99 788.26 396.73 792.37 399.83 796.79 400.47 799 359.92 797.46 310.4 795.47 279.32 794.44 280.37 765.12 280.18 762.87 281.37 733.17 281.27 728.89 259.68 727.68 261.16 695.27 261.8 695.31 261.61 677.36 263.18 662.19 275.32 662.68 288.12 663.74 295.79 664.02 297.48 632.24 300.16 632.39 301.14 612.19 308.39 614.6 Z", Bennington:"M 197.78 593.52 219.65 594.79 238.98 596.49 250.63 596.52 265.7 597.33 264.46 602.3 268.65 602.38 268.83 597.64 295.97 599.04 308.38 599.5 308.39 614.6 301.14 612.19 300.16 632.39 297.48 632.24 295.79 664.02 288.12 663.74 275.32 662.68 263.18 662.19 261.61 677.36 261.8 695.31 261.16 695.27 259.68 727.68 281.27 728.89 281.37 733.17 280.18 762.87 280.37 765.12 279.32 794.44 190.38 791.41 186.83 771.92 188.71 767.77 187.88 765.58 188.36 760.73 190.08 760.98 191.02 738.76 191.5 723.75 193.01 690.49 194.27 669.5 196.45 622.97 197.11 612.75 197.78 593.52 Z", Grand:"M 178.77 13.02 178.36 10.68 181.29 2.52 204.5 2.29 214.22 2.06 211.98 11.05 210.72 12.68 207.94 18.68 202.46 20.51 200.43 22.29 201.81 28.46 199.04 33.09 198.13 36.31 199.16 37.51 198.64 41.21 195.24 52.83 193.21 54.36 188.94 52.05 188.96 50.34 190.94 46.08 190.42 40.49 188.38 39.42 188.37 35.7 189.47 32.68 188.5 27.35 190.22 22.41 190.69 18.06 188.72 12.36 181.89 11.77 178.77 13.02 Z M 198.6 54.17 197.81 47.54 199.5 43.29 201.33 42.7 205.54 34.38 206.67 34.14 208.26 37.77 208.58 46.88 205.4 47.94 203.55 50.37 203.93 53.52 202.32 55.23 201.88 57.92 198.26 66.1 196.61 68.99 194.59 69.77 193.88 78.22 194.27 82.73 192.42 86.67 190.62 84.84 189.22 87.51 185.91 87.85 185.01 86.16 185.47 82.89 187.48 79.95 188.18 76.59 187.63 70.22 188.7 67.76 191.09 69.4 192.66 65.21 195.6 65.54 197.08 64.1 197.68 61.09 195.44 59.47 196.23 54.85 198.6 54.17 Z M 206.55 67.63 207.37 64.73 211.19 59.99 212.6 60.87 213.18 63.63 210.47 63.65 207.62 69.07 206.55 67.63 Z M 199.78 92.38 202.61 96.53 201.84 100.75 195.21 103.3 194.88 108.25 193.25 113.32 193.55 114.87 190.93 119.79 186.47 122.05 186.41 126.44 187.97 128.28 191.98 128.06 193.21 127.16 194.56 121.69 196.22 123.66 197.19 128.38 199.41 131.65 199.01 134.78 197.08 136.18 196.31 141.55 192.13 141.76 190.69 146.05 188 145.98 187.36 143.41 185.42 141.04 185 138.4 178.28 137.19 178.85 132.38 178.47 118.27 177.9 111.32 183.55 95.74 185.04 96.02 187.86 92.65 190.73 94.51 193.44 93.88 194.46 87.83 198 87.69 199.78 92.38 Z M 181.33 65.27 179.87 66.01 176.74 64.26 177.04 61.62 175.17 59.6 176.15 57.76 177.4 48.25 180.57 38.94 187.05 40.63 187.6 43.42 184.64 51.52 185.84 54.44 183.47 57.2 184.43 58.39 182.16 61.66 181.33 65.27 Z", Orleans:"M 376.49 4.5 381.78 4.64 394.51 4.29 402.46 4.41 414.23 5.07 427.27 5.39 436.79 6 446.49 5.85 473.78 5.05 487.99 5.19 507.72 4.67 526.54 4.01 538.38 3.99 533.5 41.17 544.04 49.02 533.71 63.68 531.4 66.23 520.2 81.07 529.07 87.21 514.23 107.65 511.3 111.92 485.62 94.3 491.96 116.82 477.84 110.12 476.86 112.44 463.89 138.18 462.74 140.75 448.94 166.65 439.06 161.46 423.07 153.37 421.24 152.2 421.93 149.01 394.1 134.83 410.33 103.87 389.6 93.55 370.18 83.69 381.56 65.17 379.57 33.16 380.78 33.12 376.49 4.5 Z", Lamoille:"M 370.18 83.69 389.6 93.55 410.33 103.87 394.1 134.83 421.93 149.01 421.24 152.2 407.66 177.15 406.25 179.43 397.99 195.04 393.63 202.73 391.42 208.01 365.53 188.7 364.78 190.58 351.24 216.92 334.87 207.55 323.49 201.35 313.69 198.15 305.35 195.54 314.06 179.21 307.31 175.65 312.54 165.12 308.29 163.72 300.51 153.57 287.76 135.58 284.32 134.86 283.47 130.5 289.52 130.31 292.3 127.09 302.61 107.81 316.89 115 320.4 96.49 321.64 96.73 323.1 89.13 325.6 89.61 326.48 84.95 328.78 85.35 328.53 80.41 332.95 75.56 361.62 76.88 360.84 78.47 365.51 81.54 366.38 80.41 370.18 83.69 Z", Addison:"M 276.34 299.15 280.89 298.68 281.36 301.23 283.86 322.41 285.07 330.37 290.07 329.78 302.17 334.42 328.89 345.26 325.89 351.39 316.53 368.69 311.73 377.78 310.13 377.18 297.69 403.65 295.45 402.8 294.91 389.32 275.54 398.94 268.76 396.09 268.7 402.69 270.55 401.73 273.79 415.92 259.27 423.22 256.9 410.22 256.12 408.62 224.27 409.93 224.41 410.85 208.41 411.55 211.39 436.13 173.51 440.3 176.48 437.18 176.73 432.79 174.92 430.45 174.11 426.47 171.04 425.3 168.45 420.29 165.17 416.3 167.93 411.82 169.9 412.13 170.87 408.38 169.73 403.91 171.2 400.8 171.13 396.86 169.52 394.56 169.39 388.64 164.64 386.51 164.86 380.04 162.72 379.26 162.39 377.07 163.83 374.21 162.48 372.11 162.06 364.94 161.43 363.03 163.74 360.39 162.68 356.16 164.33 352.56 165.15 348.61 162.72 345 158.32 342.36 157.53 337.79 160.51 332.17 159.72 329.01 164.51 322.77 167.01 321.3 166.53 317.79 167.43 314.48 171.55 308.98 174.04 297.6 176.23 293.2 171.2 290.87 171.67 287.33 174.87 284.88 176.28 281.41 179.33 279.01 184.41 278.8 185.98 275.37 185.21 271.85 187.59 270.43 194.12 270.63 194.94 275.06 196.8 275.09 195.39 271.14 198.68 271.15 197.92 268.79 194.72 266.89 196.73 264.17 215.27 262.07 226.46 260.14 246.92 256.33 247.06 257.69 260.47 255.88 259.54 249.48 270.66 252.58 273.15 274.76 276.34 299.15 Z", Franklin:"M 376.49 4.5 380.78 33.12 379.57 33.16 381.56 65.17 370.18 83.69 366.38 80.41 365.51 81.54 360.84 78.47 361.62 76.88 332.95 75.56 328.53 80.41 328.78 85.35 326.48 84.95 325.6 89.61 323.1 89.13 321.64 96.73 320.4 96.49 316.89 115 302.61 107.81 292.3 127.09 289.52 130.31 283.47 130.5 284.32 134.86 255.92 128.45 239.48 119.43 214.06 106 217.01 97.24 220.27 93.3 220.84 91.26 224.96 89.3 225.41 87.12 230.39 80.59 231.83 74.77 227.96 72.83 225.79 77.57 222.85 78.62 222.11 82.77 219.5 82.22 219 80.32 220.75 75.88 222.72 75.65 223.67 73.2 220.55 70.57 218.74 70.34 219.66 64.52 221.07 51.42 222.62 48.72 224.55 42.88 224.63 39.48 225.94 34.76 225.05 32.12 221.25 29.75 218.13 29 215.85 29.56 214.3 32.91 210.87 30.99 209.6 28.2 211.16 21.95 213.92 16.39 217.14 15.5 219.35 13.17 220.87 9.69 225.37 10.34 226.09 6.91 225.73 4.19 229.69 3.21 233.11 4.88 230.29 7.79 230.4 13.87 232.84 15.22 234.88 14.33 238.3 15.53 244.12 10.15 243.4 2.52 245.15 1.72 262.51 1.76 274.07 2.14 304.34 1.4 321.24 1.74 346.59 1.95 367.59 2.76 376.49 4.5 Z M 213.06 85.92 214.97 84.07 217.38 84.95 213.74 87.54 213.06 85.92 Z", Caledonia:"M 406.25 179.43 407.66 177.15 421.24 152.2 423.07 153.37 439.06 161.46 448.94 166.65 462.74 140.75 463.89 138.18 476.86 112.44 477.84 110.12 491.96 116.82 485.62 94.3 511.3 111.92 514.23 107.65 529.07 87.21 554.61 105.5 536.6 129.86 553.59 142.26 537.17 164.31 550.34 182.2 538.82 196.76 531.37 201.55 555.48 233.9 551.78 236.32 546.82 237.83 539.33 234.1 535.55 234.47 532.65 237.61 524.14 238.02 519.64 237.72 518.31 239.92 513.97 242.43 510.22 243.8 507.67 243.05 506.8 250 505.11 252.28 500.28 255.69 497.91 260.9 500.39 261.66 500.11 265.91 503.12 272.3 501.72 276.65 502 279.14 500.26 282.13 500.14 285.57 498.63 289.29 500.83 292.88 501.97 296.89 504.36 300.65 472.41 288.65 471.49 288.41 438.68 291.85 422.7 284.64 435.74 260.81 435.67 251.57 447.33 237.05 460.51 212.3 458.82 207.58 406.25 179.43 Z", Rutland:"M 173.51 440.3 211.39 436.13 208.41 411.55 224.41 410.85 224.27 409.93 256.12 408.62 256.9 410.22 259.27 423.22 273.79 415.92 295.36 404.89 295.48 411.31 304.43 414.96 306.39 411.53 314.89 415.03 316.3 417.32 316.08 419.45 318.41 423.8 309.14 443.86 313.01 445.74 308.92 454.18 339.28 465.46 331.47 484.15 324.46 499.25 321.03 497.96 318.34 514.37 316.24 531.56 321.52 532.64 320.94 537.06 332.89 540.8 333.31 543.62 329.24 558.6 323.11 574.46 324.07 580.77 307.97 571.21 307.95 572.91 300.22 572.69 299.59 582.09 296.98 582.28 295.97 599.04 268.83 597.64 268.65 602.38 264.46 602.3 265.7 597.33 250.63 596.52 238.98 596.49 219.65 594.79 197.78 593.52 198.45 573.85 199.83 539.23 200.4 519.97 201.64 516.79 199.62 513.81 200.03 510.18 197.53 506.3 194.83 503.83 192.21 503.01 190.92 501.25 188.73 501.49 189.14 493.13 187.13 490.23 186.72 485.5 182.81 484.43 176.57 484.81 175.18 486.04 172.41 485.12 169.52 487.17 167.95 489.41 168.85 491.72 165.27 496.82 165.75 502.31 162.19 504.86 154.52 499.23 154.11 496.95 156.37 492.62 155.87 489.37 157.28 485.56 154.9 481.67 155.29 478.83 157.26 477.01 160.05 469.53 161.66 461.31 163.79 459.21 165.82 455 170.13 451.89 171.01 443.89 173.51 440.3 Z", Orange:"M 316.53 368.69 325.89 351.39 328.89 345.26 343.81 351.16 356.03 324.54 357.38 325.06 368.09 299.85 373.76 301.76 374.83 298.93 400.98 309.23 404.03 310.81 410.07 278.77 422.7 284.64 438.68 291.85 471.49 288.41 472.41 288.65 504.36 300.65 504.82 307.42 506.96 309.68 506.09 311.72 502.23 313.61 501.55 316.92 502.26 320.16 504.59 321.49 505.35 319.36 507.66 320.61 507.31 323.46 504.3 325.41 507.1 326.95 502.28 328.65 503.19 331.33 501.1 335.06 498.51 335.18 499.03 338.27 495.84 340.29 496.74 343.91 494.08 348.01 492.12 347.06 491.05 350.12 489.01 351.57 489.56 353.96 486.2 357.37 487.42 360.02 486.81 366.47 489.22 365.92 490.77 370.27 489.43 372.54 486.3 373.73 486.02 382.05 484.58 384.35 477.7 389.72 475.12 394.93 472.87 395.14 472.12 397.41 473.56 401.09 469.8 402.35 468.53 405.63 469.82 409.46 470 413.32 468.42 417.06 469.53 420.81 469.38 423.53 466.81 427.85 464.18 430.56 464.3 435.2 430.37 421.64 413.77 416.44 399.73 412.53 400.03 412.05 363.55 396.67 337.07 386.51 336.32 387.65 320.91 381.84 322.07 379.38 321.53 376.78 316.79 374.59 316.53 368.69 Z", Chittenden:"M 284.32 134.86 287.76 135.58 300.51 153.57 308.29 163.72 312.54 165.12 307.31 175.65 314.06 179.21 305.35 195.54 313.69 198.15 304.89 214.99 314.23 220.2 308.29 230.47 306.61 230.56 299.48 227.69 288.15 257.71 290.89 258.58 276.34 299.15 273.15 274.76 270.66 252.58 259.54 249.48 260.47 255.88 247.06 257.69 246.92 256.33 226.46 260.14 215.27 262.07 196.73 264.17 197.44 261.52 193.95 258.87 190.33 262.19 188.62 260.79 194.23 254.8 192.1 251.75 188.54 252.95 189.5 247.28 192.77 240 194.44 237.92 193.43 234.1 196.21 232.44 198.14 228.41 197.05 226.64 197.6 223.6 196.3 222.18 195.05 217.32 198.46 213.99 200.85 210.71 203.58 211.06 205.54 215.14 208.74 213.97 210.38 207.21 209.79 201.18 206.99 200.5 207.25 196.73 209.89 194.38 209.4 188.41 208.24 185.53 204.27 183.45 203.05 180.66 196.09 178.31 198.04 175.13 197.03 169.98 195.44 167.07 188.88 162.8 191.07 160.84 192.34 162.61 195.57 161.09 196.87 162.81 200.26 162.65 203.8 161.55 205.65 159.93 205.06 156.74 207.84 156.96 207.59 161.87 211.59 164.26 213.75 163.77 217.34 160.96 219.54 152.93 217.13 152.19 211.79 154.31 209.1 153.37 208.18 144.63 203.39 140.17 206.29 138.72 206.99 135.83 212.56 133.55 213.42 131.89 212.28 127.89 213.18 119.62 212.6 116.69 214.06 106 239.48 119.43 255.92 128.45 284.32 134.86 Z"};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i;m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)
campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 1042,
        "fields": {
            "priority": 1,
            "description": "Jill Krowinski In the run-up to the 2016 election, you have the luxury of being your party's presumptive nominee, along with a significant amount of time to prepare for the campaign. How will you take advantage of this time?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1044,
        "fields": {
            "priority": 2,
            "description": "Bernie Sanders at a gay nightclub in Orlando overnight, perpetrated by a Muslim, resulting in 50 people killed. What is your reaction?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1043,
        "fields": {
            "priority": 2,
            "description": "The FBI director, Jason Gibbs, has handed down a severe criticism of your email practices while Secretary of State, though he declined to recommend any indictments. Do you have any comment?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1045,
        "fields": {
            "priority": 3,
            "description": "What message will you emphasize as you accept your party's nomination for President of the United States?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1046,
        "fields": {
            "priority": 4,
            "description": "What was your rationale behind selecting Tim Kaine as your running mate?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1051,
        "fields": {
            "priority": 5,
            "description": "Will you give Bernie Sanders a prime speaking slot at the Democratic Convention?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1055,
        "fields": {
            "priority": 6,
            "description": "Would you consider making a pledge to, if elected, serve a single term as President?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1052,
        "fields": {
            "priority": 6,
            "description": "There has been a violent terrorist attack in Nice today, resulting in the deaths of almost 100 people. How will you address this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1077,
        "fields": {
            "priority": 6,
            "description": "Having already lost a close nomination battle, many progressives feel let down by your choice of Tim Kaine as running mate. What is your response to this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1065,
        "fields": {
            "priority": 7,
            "description": "Do you have plans to emphasize a path to universal health care in your campaign?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1059,
        "fields": {
            "priority": 7,
            "description": "To what extent will you campaign with Barack Obama, or support his presence on the campaign trail this year?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1057,
        "fields": {
            "priority": 7,
            "description": "To what extent will you make an increase in the minimum wage a key part of your campaign? Do you stand by your commitment to $12/hour?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1053,
        "fields": {
            "priority": 7,
            "description": "To what extent will you attack Donald Trump for the rhetoric he has used about Mexicans, Muslims, women, and other groups?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1060,
        "fields": {
            "priority": 7,
            "description": "To what extent will you support the presence of Bernie Sanders on the campaign trail?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1068,
        "fields": {
            "priority": 7,
            "description": "Do you support the recent nuclear deal between the United States and Iran?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1069,
        "fields": {
            "priority": 7,
            "description": "Do you have plans to take in more than the current level of 10,000 refugees per annum from the conflict in Syria?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1063,
        "fields": {
            "priority": 7,
            "description": "Donald Trump is attacking you almost daily on your 2002 vote in favor of the Iraq War. How do you plan to respond?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1066,
        "fields": {
            "priority": -7,
            "description": "During a fundraiser, you made a comment that around half of Trump's supporters form a \"basket of deplorables\", with a renewed emphasis on racism, bigotry, and Islamophobia. Do you care to clarify?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1067,
        "fields": {
            "priority": -6,
            "description": "While attending a 9/11 memorial event today, you were caught on video going limp and being carried into a van, apparently for medical attention. Do you have any comment?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1071,
        "fields": {
            "priority": -5,
            "description": "Do you plan to participate in the customary series of three televised debates with Donald Trump in this election cycle?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1072,
        "fields": {
            "priority": -4,
            "description": "A video surfaced of Trump describing how he tried to seduce a married woman, and how he can generally kiss women or \"grab them by the pussy\". 14 women have also stepped forward to accuse him of assault. What is your response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1074,
        "fields": {
            "priority": -3,
            "description": "A leaked transcript from Wikileaks shows your campaign working with members of the DNC to collaborate against the campaign of Bernie Sanders in subtle but definite ways, such as the sharing of some debate questions before a primary debate. How do you respond?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1073,
        "fields": {
            "priority": -3,
            "description": "A leaked transcript from Wikileaks shows you saying in a closed-door speech at Goldman Sachs that you are \"center-left, center-right\" and that you support \"open trade and open borders\". How do you respond?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1075,
        "fields": {
            "priority": -2,
            "description": "James Comey, FBI Director, has made a late announcement that additional emails have surfaced in your case, thanks to an investigation into Anthony Weiner. What are your thoughts?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1076,
        "fields": {
            "priority": -1,
            "description": "Where will you spend the final day of your campaign?",
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
            "description": "We're going to hit our rolodex and solidify our campaign organization and fundraising. I'm going to hit the trail for Democrats in the 2014 midterms. We will be well-prepared to outspend Jeb Bush and we will unite the party before the primaries."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5140,
        "fields": {
            "question": 1042,
            "description": "I will travel and make a number of paid speeches to support the Clinton Foundation's global outreach. I will write a book about some of the difficult choices I made as Secretary of State. This will flex my loyalty to Obama and my foreign policy credentials."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5141,
        "fields": {
            "question": 1042,
            "description": "I will write a book about the challenges facing America, and on my fight for healthcare access, fair pay, the environment, and the economy. From the time that I was First Lady of Arkansas until now, I have always fought to give every American a fair shake."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5142,
        "fields": {
            "question": 1042,
            "description": "It's hard to visit certain places in the heat of a campaign. I will do a tour of the U.S. where I visit all 50 states and highlight the people we're fighting for with Obama's policies, and whom we'll keep fighting for when I'm President."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5143,
        "fields": {
            "question": 1043,
            "description": "The Republicans can't beat us on the issues, like raising the minimum wage or making college more affordable. So instead their allies in the right-wing media use these non-stories and innuendo to defend the privilege of the 1%. There is nothing to see here."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5144,
        "fields": {
            "question": 1043,
            "description": "Let's take a step back. George Bush and Dick Cheney lost over 20 million emails from their time in office. I have already turned over every relevant email from my time as Secretary of State. Anything else is a right-wing hit job."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5145,
        "fields": {
            "question": 1043,
            "description": "I used the same email practices as Colin Powell and many other people in government. I was far too busy dealing with Russia, the Arab Spring, and the E.U. crisis to keep track of how IT was setting up my email system."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5146,
        "fields": {
            "question": 1043,
            "description": "This email system was a lapse in judgment, and I apologize. It was simply a matter of convenience to prevent me from carrying two phones everywhere, but if I was doing it again, I might do something different."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5147,
        "fields": {
            "question": 1044,
            "description": "Donald Trump is already using this shooting as an excuse for his vile and unfounded attacks on an entire religion. We are better than that as a nation, and we deserve better than that from our President."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5148,
        "fields": {
            "question": 1044,
            "description": "Thoughts and prayers are not enough. Every American should be outraged that the assault rifles used in these attacks are freely available and affordable."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5149,
        "fields": {
            "question": 1044,
            "description": "My heart goes out the victims of this shooting. I will be going to Orlando in the next couple of days to pay my respects to the victims."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5150,
        "fields": {
            "question": 1044,
            "description": "We don't know yet the exact motives behind this attack, but I condemn religious terrorism in the strongest terms if that is the motive. And my heart especially goes out to the Hispanic and LGBT communities that were affected by this terrible act of violence."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5151,
        "fields": {
            "question": 1045,
            "description": "We need to do more for America. I have a plan to make college and health care affordable for every American, paid for by the 1%. The Republicans want to cut taxes for America's wealthiest citizens, so they can keep buying elections and asking Washington for bailouts and subsidies."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5152,
        "fields": {
            "question": 1045,
            "description": "We have a wonderful, diverse, and strong party in the Democratic Party. When I'm President, we're going to raise the minimum wage. We're going to further improve Obamacare. We're going to create millions of high paying, green jobs. And we're going to make college more affordable for the next generation!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5153,
        "fields": {
            "question": 1045,
            "description": "There is only one choice in this election. Donald Trump is so unqualified, and vastly offensive to our ideals, that his election could be an existential disaster for the nation. I am the safe, responsible alternative who will take our country forward."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5154,
        "fields": {
            "question": 1045,
            "description": "I have the experience to grow our economy, strengthen our military, create millions of new, high-paying jobs, and much more. I will be a President for all Americans when I am in office."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5155,
        "fields": {
            "question": 1046,
            "description": "Tim Kaine has fought for American workers and families for his entire career. He is amply qualified and ready to step in for our agenda at a moment's notice."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5156,
        "fields": {
            "question": 1046,
            "description": "Tim Kaine has served his home state of Virginia with great energy and effectiveness as a Governor and Senator. He is a hard working and honest person who can appeal to Americans across the ideological spectrum."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5157,
        "fields": {
            "question": 1046,
            "description": "When I'm thinking about a running-mate, I'm thinking about the person who will make the best President if, God forbid, they must step into that role. Tim Kaine has outstanding experience and judgment and I'm proud to make him my running mate."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5170,
        "fields": {
            "question": 1051,
            "description": "Absolutely. The differences between us are much smaller than the things that unite us. We both wake up every day and fight for average Americans -- for their health care, their housing and education costs, and their personal rights."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5171,
        "fields": {
            "question": 1051,
            "description": "We don't really have a choice. He has far too much support in our party for us to pretend like he doesn't exist. Let's make sure to do a couple of appearances together before this is all over."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5172,
        "fields": {
            "question": 1051,
            "description": "Donald Trump would be a disaster for the future of this country. We need to do everything we can to appeal to moderate voters who can be swayed by a qualified candidate. Bernie unfortunately complicates things on that front."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5173,
        "fields": {
            "question": 1052,
            "description": "My heart goes out to the victims of this terrible attack. I will give a speech in a few days about the importance of tolerance and diversity in our society."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5174,
        "fields": {
            "question": 1052,
            "description": "My heart goes out to those affected by this terrible attack. My thoughts and prayers are with the great nation of France, and I will travel to France to pay my respects to the victims."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5175,
        "fields": {
            "question": 1052,
            "description": "My heart goes out to the victims of this terrible attack. I will give a speech in a few days about the importance of defeating ISIS and religious extremism in all of its forms."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5176,
        "fields": {
            "question": 1053,
            "description": "Donald Trump is dangerously divisive and completely unqualified to serve as President. His constantly inflammatory rhetoric towards women, Muslims, Hispanics, and others is Exhibit A, and I plan to call this out repeatedly as I campaign."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5177,
        "fields": {
            "question": 1053,
            "description": "Donald Trump's actions and comments about women are reprehensible. It would be asburd of us not to bring that up as we campaign, along with other important issues."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5178,
        "fields": {
            "question": 1053,
            "description": "This campaign is about our fight for hard working American families, regardless of their background. I'm not going to fall into the trap of making this election about Trump's behavior, instead of his disastrous policies."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5179,
        "fields": {
            "question": 1053,
            "description": "This campaign is about my experience and ability to serve as President. We're going to focus primarily on those qualifications as I campaign. The fact that I'm a woman speaks for itself."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5184,
        "fields": {
            "question": 1055,
            "description": "I am opposed to this idea. Why should I turn myself into a lame duck and project weakness before the voting for my first term even starts?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5185,
        "fields": {
            "question": 1055,
            "description": "We must acknowledge the unique nature of this election, and of our opponent. This pledge might help reluctant moderates and far-left progressives support me for now, if they see an open primary coming in three years."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5189,
        "fields": {
            "question": 1057,
            "description": "We need a minimum wage of at least $12 an hour, and hopefully more. I'm proud to stand with my running mate and advocate for the American worker in their fight against the 1%."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5190,
        "fields": {
            "question": 1057,
            "description": "The choice in this election is clear. I think every worker deserves to be paid a living wage, and Donald Trump doesn't. This issue is at the core of what the Democratic Party is fighting for."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5191,
        "fields": {
            "question": 1057,
            "description": "The larger focus in this campaign is going to be my experience and my foreign policy credentials. And also on my dangerously unqualified opponent."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5196,
        "fields": {
            "question": 1059,
            "description": "Barack Obama has an approval rate right now of more than 50 percent. It seems obvious that we would want to utilize him early and often."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5197,
        "fields": {
            "question": 1059,
            "description": "I want Barack Obama to be actively involved in our campaign. And more specifically, I want him to really campaign hard in places like Detroit, Milwaukee, Philadelphia, and others where we need high levels of African-American support."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5198,
        "fields": {
            "question": 1059,
            "description": "We're going to appear with Barack and Michelle, but we need to be careful about running for the third term of Obama's Presidency. There are significant differences between us as well."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5199,
        "fields": {
            "question": 1059,
            "description": "Part of my campaign is about moving beyond the legacy of Obama and fighting more assertively for systemic ecnomic change. My focus will be more on appearing with Elizabeth Warren, Bernie Sanders, and others."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5200,
        "fields": {
            "question": 1060,
            "description": "I think it's obvious that we plan to spend a lot of time campaigning with Bernie Sanders, and that we're making a real effort to incorporate his message into our campaign."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5201,
        "fields": {
            "question": 1060,
            "description": "I want us to do a high-profile appearance with Bernie in Michigan, once the campaign gets going. We don't agree on every issue, but I want to embrace his economic message and show people that our party is unified."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5202,
        "fields": {
            "question": 1060,
            "description": "Bernie Sanders has offered to campaign extensively on our behalf, and of course we want to have him on the trail. I'm willing to make a few small promises to make that happen."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5203,
        "fields": {
            "question": 1060,
            "description": "I'd love to have Bernie Sanders out there campaigning for us, but the things he is asking for are simply unrealistic. I'm not going to sit here and bargain away my platform when I'm the one who won the nomination."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5212,
        "fields": {
            "question": 1063,
            "description": "Donald Trump is lying when says he opposed the war. I challenge him to produce a single public statement that he made <em>before</em> the Iraq War started -- as opposed to years after the fact."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5213,
        "fields": {
            "question": 1063,
            "description": "Donald Trump has shown an alarming lack of knowledge about even the basics of U.S. foreign policy. He would set us back many, many years on our objectives in Europe, Asia, the Middle East, and elsewhere."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5214,
        "fields": {
            "question": 1063,
            "description": "If I knew what I know now, I wouldn't have voted \"yes\". But real culprit of this war was George Bush and the Republicans, using faulty intelligence."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5215,
        "fields": {
            "question": 1063,
            "description": "My vote in favor of this authorization was one of the toughest of my career. And I will admit, the war didn't go as well as Bush promised it would. But ultimately, we removed a murderous dictator and replaced him a parliamentary democracy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5220,
        "fields": {
            "question": 1065,
            "description": "Obamacare did not go far enough. We will fight very hard for universal health care when I am President, in whatever form that may take. This has been my fight for over 20 years now."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5221,
        "fields": {
            "question": 1065,
            "description": "I was very sad when the public option was taken out of the Affordable Care Act. This is something we must fight for over the coming years, along with adequate funding and controls on prices."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5222,
        "fields": {
            "question": 1065,
            "description": "Donald Trump is a uniquely unqualified and dangerous individual to occupy the White House. He has said over and over again that he will immediately repeal Obamacare if he is President, throwing millions off their health insurance."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5223,
        "fields": {
            "question": 1065,
            "description": "I will fight hard to preserve the landmark Affordable Care Act when I am President. This program is one of Barack Obama's great legacies."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5224,
        "fields": {
            "question": 1066,
            "description": "This was an ill-considered and insensitive comment on my part, and I apologize. While this is a real issue, saying it describes \"half\" of Trump's supporters is a definite exaggeration."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5225,
        "fields": {
            "question": 1066,
            "description": "We should all be very concerned with the right-wing radicalism that Trump has enabled. It has no place in America, even if this particular remark could have been stated with more finesse."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5226,
        "fields": {
            "question": 1066,
            "description": "I will apologize for this remark when Trump apologizes for his \"rapist\" comments about Hispanics, his constant attacks on women, and his failure to condemn white supremicist supporters."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5227,
        "fields": {
            "question": 1067,
            "description": "After months of hard campaigning, what seemed to be a minor cough has turned into something more. Unfortunately it looks like I will need to take some days off from the campaign to rest and recuperate."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5228,
        "fields": {
            "question": 1067,
            "description": "No comment really. It's unfortunate that the right-wing media is circulating numerous unfounded rumors about by health. The people will see these are lies as I campaign vigorously over the coming weeks."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5229,
        "fields": {
            "question": 1067,
            "description": "No comment really. It's unfortunate that the right-wing media is circulating numerous unfounded rumors about by health. The people will see these are lies as I campaign vigorously over the coming weeks."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5230,
        "fields": {
            "question": 1067,
            "description": "No comment really. It's unfortunate that the right-wing media is circulating numerous unfounded rumors about by health. The people will see these are lies as I campaign vigorously over the coming weeks."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5231,
        "fields": {
            "question": 1068,
            "description": "This deal was one of Barack Obama's real achievements during his time in office that we will uphold and enforce. I fully support it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5232,
        "fields": {
            "question": 1068,
            "description": "Like many people, I had some concerns with specific provisions in this deal. But overall, it is a worthwhile step in the right direction."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5233,
        "fields": {
            "question": 1068,
            "description": "This is definitely something that my team will approach with fresh eyes when I am President, but I can't say more than that right now."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5234,
        "fields": {
            "question": 1068,
            "description": "Donald Trump says he will tear this deal up, should he somehow win this election. That is dangerous and ill-conceived, and really shows how unfit he is to guide America's foreign policy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5235,
        "fields": {
            "question": 1069,
            "description": "We need to be vigilant in every case, but a cap of 10 thousand people is appalingly low from any humanitarian perspective. This conflict has displaced millions, including small children and infants."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5236,
        "fields": {
            "question": 1069,
            "description": "We must balance the humanitarian impulse with what is practical and politically feasible. I would prefer to see us offer generous aid to Turkey, Jordan, and other affected countries as we protect people from the brutal Assad regime and defeat ISIS."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5237,
        "fields": {
            "question": 1069,
            "description": "What's happening in Syria right now is obviously tragic. The last thing we need right now is the divisive and unstable leadership of Donald Trump to make things worse."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5242,
        "fields": {
            "question": 1071,
            "description": "Donald Trump has already hinted that he won't accept the results of this election, and that any debate cannot be considered fair because of so-called moderator bias. I would prefer to take my case directly to the American people with 30-minute television spots."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5243,
        "fields": {
            "question": 1071,
            "description": "These debates will expose Donald Trump as woefully unprepared and unqualified to assume the position of President. I am eagerly looking forward to participating."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5244,
        "fields": {
            "question": 1071,
            "description": "These debates will expose Donald Trump as woefully unprepared and unqualified to assume the position of President. I am eagerly looking forward to participating."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5245,
        "fields": {
            "question": 1071,
            "description": "These debates will expose Donald Trump as woefully unprepared and unqualified to assume the position of President. I am eagerly looking forward to participating."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5246,
        "fields": {
            "question": 1072,
            "description": "Like many women, I was sickened and appalled to see Donald Trump bragging about assault in casual conversation. Are these the values that we stand for in America, and that we want to teach our children?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5247,
        "fields": {
            "question": 1072,
            "description": "This video clip is just one more piece of evidence that Donald Trump is a fake conservative who doesn't share Christian values. And of course, it also shows yet again how grossly unqualified Trump is to serve as President."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5248,
        "fields": {
            "question": 1072,
            "description": "This clip will show up all over the news and the internet for days. Let's continue to make our own case to the American people."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5249,
        "fields": {
            "question": 1072,
            "description": "As bad as it is, this clip is just part of an even larger pattern. His insinuations about Miss Universe contestants. His strange statements about his own daughter. There's a bizarre video where he fondles Rudy Giuliani, in drag."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5250,
        "fields": {
            "question": 1073,
            "description": "This is a gross misrepresentation of my statements. I was speaking hypothetically about the future 40 or 50 years from now. And I would remind you that these statements were most likely leaked by Russian intelligence."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5251,
        "fields": {
            "question": 1073,
            "description": "If we look back to the days of Abraham Lincoln, one of our greatest leaders, he said that sometimes you need to have a public position and a private position on some issues to drive true progress."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5252,
        "fields": {
            "question": 1073,
            "description": "This is nothing compared to the lies and equivocation of Donald Trump. And furthermore, it's appalling that Republicans are so willing to throw aside all ideals and cooperate with the Russians, the moment it's convenient for them."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5253,
        "fields": {
            "question": 1074,
            "description": "We have already implemented reforms to the DNC to prevent this in the future. And also, the idea that the nomination was \"stolen\" is absurd and unfactual."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5254,
        "fields": {
            "question": 1074,
            "description": "Any \"concern\" that Republicans have for Bernie Sanders and his supporters is utterly fraudulent. Furthermore, the incidents these leaks mention are minor and had no effect on the nomination."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5255,
        "fields": {
            "question": 1074,
            "description": "This is nothing compared to the lies and equivocation of Donald Trump. And furthermore, it's appalling that Republicans are so willing to throw aside all ideals and cooperate with the Russians, the moment it's convenient for them."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5256,
        "fields": {
            "question": 1075,
            "description": "Where is the investigation into the Russian leaks? Where is the investigation into Trump's blatantly illegal business practices over many years? This is an unprecededented and outrageous act of political interference by the FBI."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5257,
        "fields": {
            "question": 1075,
            "description": "I am deeply concerned by Comey's decision to reopen a settled case, and I'm confident that there are no new revelations here. We're going to focus on our message during the closing stretch of this campaign?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5258,
        "fields": {
            "question": 1076,
            "description": "We're going to spend our final day in Florida, rallying the Hispanic, Jewish, and black communities against the outrages of Donald Trump and his campaign."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5259,
        "fields": {
            "question": 1076,
            "description": "We're going to visit Michigan, Wisconsin, and Minnesota. I want us to appear with Bernie Sanders and Barack Obama to push our message on trade, the African-American turnout, and party unity."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5260,
        "fields": {
            "question": 1076,
            "description": "We're going to visit Colorado and Nevada, and maybe a short stop in Arizona, to rally Hispanic turnout and highlight Trump's outrages for a final time."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5261,
        "fields": {
            "question": 1076,
            "description": "Let's not complicate this too much. The election pivots around Pennsylvania -- we're going to spend our final day in Pennsylvania, with an enormous rally of celebrities and party heavyweights."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5262,
        "fields": {
            "question": 1077,
            "description": "I am the most progressive candidate ever for President of the United States. We are pushing for a higher minimum wage, better health care, immigration reform, and police reform. Tim Kaine stands fully behind that agenda."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5263,
        "fields": {
            "question": 1077,
            "description": "I made my selection based on who is most qualified to serve as President, should the situation ever arise. Tim Kaine has served as a Governor and a Senator over the couse of many years, and he is a reliably progressive Democrat."
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
            "popular_votes": 21000,
            "poll_closing_time": 21867,
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
var soundtracks = {
    0: {
      name: "Vermont",
      tracklist: [
        {
          "name": "The Divided Sky",
          "url": "https://audio.jukehost.co.uk/rfe4G8dLKLMIkEOA7YtxmjnjcEEzwXgp"
        },
     ]
     },
     1: {
      name: "Test",
      tracklist: [
        {
          "name": "Green Mountain",
          "url": "https://audio.jukehost.co.uk/yQ5IgLOiOQZoHHOEV6howjH5PKX6qfUU"
        },
     ]
     },
           
  }


campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20682,
        "fields": {
            "candidate": 200,
            "state": 20681,
            "state_multiplier": 0.178
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
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20692,
        "fields": {
            "candidate": 200,
            "state": 20691,
            "state_multiplier": 1.06
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
            "state_multiplier": 0.32
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
            "state_multiplier": 0.2
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
            "state_multiplier": 0.54
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
            "state_multiplier": 0.2
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
            "state_multiplier": 0.32
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
            "state_multiplier": 0.2
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
            "state_multiplier": 0.1
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
            "state_multiplier": 0.78
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
            "state_multiplier": 0.3
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
        "pk": 3086,
        "fields": {
            "answer": 5153,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3087,
        "fields": {
            "answer": 5176,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3088,
        "fields": {
            "answer": 5177,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3089,
        "fields": {
            "answer": 5178,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3090,
        "fields": {
            "answer": 5179,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3094,
        "fields": {
            "answer": 5191,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3096,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3097,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3098,
        "fields": {
            "answer": 5242,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.004
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
        "pk": 3100,
        "fields": {
            "answer": 5246,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3101,
        "fields": {
            "answer": 5247,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3102,
        "fields": {
            "answer": 5248,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3103,
        "fields": {
            "answer": 5249,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3104,
        "fields": {
            "answer": 5250,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3105,
        "fields": {
            "answer": 5251,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.0275
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3106,
        "fields": {
            "answer": 5252,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3107,
        "fields": {
            "answer": 5253,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.0175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3108,
        "fields": {
            "answer": 5254,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3109,
        "fields": {
            "answer": 5255,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3130,
        "fields": {
            "answer": 5141,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3131,
        "fields": {
            "answer": 5143,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3132,
        "fields": {
            "answer": 5144,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3133,
        "fields": {
            "answer": 5150,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3134,
        "fields": {
            "answer": 5151,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3135,
        "fields": {
            "answer": 5153,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3136,
        "fields": {
            "answer": 5154,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3137,
        "fields": {
            "answer": 5171,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3138,
        "fields": {
            "answer": 5172,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3139,
        "fields": {
            "answer": 5174,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3140,
        "fields": {
            "answer": 5176,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3144,
        "fields": {
            "answer": 5185,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3146,
        "fields": {
            "answer": 5189,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3147,
        "fields": {
            "answer": 5191,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3150,
        "fields": {
            "answer": 5198,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3151,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3152,
        "fields": {
            "answer": 5200,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.006
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
        "pk": 3154,
        "fields": {
            "answer": 5203,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3157,
        "fields": {
            "answer": 5228,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3158,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3159,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3160,
        "fields": {
            "answer": 5242,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.025
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
        "pk": 3162,
        "fields": {
            "answer": 5244,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3163,
        "fields": {
            "answer": 5245,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3164,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3165,
        "fields": {
            "answer": 5257,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3166,
        "fields": {
            "answer": 5263,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3181,
        "fields": {
            "answer": 5147,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3182,
        "fields": {
            "answer": 5189,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3183,
        "fields": {
            "answer": 5191,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3186,
        "fields": {
            "answer": 5200,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3188,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3189,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3190,
        "fields": {
            "answer": 5242,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.01
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
        "pk": 3192,
        "fields": {
            "answer": 5244,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3193,
        "fields": {
            "answer": 5245,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3202,
        "fields": {
            "answer": 5147,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3203,
        "fields": {
            "answer": 5171,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3204,
        "fields": {
            "answer": 5172,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3209,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3210,
        "fields": {
            "answer": 5200,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.02
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
        "pk": 3212,
        "fields": {
            "answer": 5203,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.1032
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3215,
        "fields": {
            "answer": 5253,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3216,
        "fields": {
            "answer": 5254,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3217,
        "fields": {
            "answer": 5255,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3284,
        "fields": {
            "answer": 5141,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3285,
        "fields": {
            "answer": 5141,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.25
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3286,
        "fields": {
            "answer": 5142,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3287,
        "fields": {
            "answer": 5148,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3288,
        "fields": {
            "answer": 5148,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3289,
        "fields": {
            "answer": 5149,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3290,
        "fields": {
            "answer": 5149,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3291,
        "fields": {
            "answer": 5151,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3292,
        "fields": {
            "answer": 5151,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.033
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3293,
        "fields": {
            "answer": 5185,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3294,
        "fields": {
            "answer": 5185,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.11
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3296,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3305,
        "fields": {
            "answer": 5212,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3306,
        "fields": {
            "answer": 5212,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.00375
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3307,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3308,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3309,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3314,
        "fields": {
            "answer": 5220,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3315,
        "fields": {
            "answer": 5220,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3316,
        "fields": {
            "answer": 5220,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3317,
        "fields": {
            "answer": 5222,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3318,
        "fields": {
            "answer": 5223,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3319,
        "fields": {
            "answer": 5224,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3320,
        "fields": {
            "answer": 5225,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.0065
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3321,
        "fields": {
            "answer": 5226,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3322,
        "fields": {
            "answer": 5226,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3323,
        "fields": {
            "answer": 5227,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3324,
        "fields": {
            "answer": 5233,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3325,
        "fields": {
            "answer": 5235,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3326,
        "fields": {
            "answer": 5236,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3327,
        "fields": {
            "answer": 5236,
            "candidate": 201,
            "affected_candidate": 203,
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
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3329,
        "fields": {
            "answer": 5237,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3330,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3331,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3332,
        "fields": {
            "answer": 5257,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3333,
        "fields": {
            "answer": 5257,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3334,
        "fields": {
            "answer": 5259,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.001
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2639,
        "fields": {
            "answer": 5139,
            "issue": 100,
            "issue_score": 0.3,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2640,
        "fields": {
            "answer": 5141,
            "issue": 100,
            "issue_score": 0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2641,
        "fields": {
            "answer": 5147,
            "issue": 103,
            "issue_score": 0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2642,
        "fields": {
            "answer": 5148,
            "issue": 103,
            "issue_score": 0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2643,
        "fields": {
            "answer": 5150,
            "issue": 102,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2644,
        "fields": {
            "answer": 5150,
            "issue": 103,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2645,
        "fields": {
            "answer": 5151,
            "issue": 100,
            "issue_score": 0.55,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2646,
        "fields": {
            "answer": 5151,
            "issue": 101,
            "issue_score": 0.55,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2647,
        "fields": {
            "answer": 5151,
            "issue": 102,
            "issue_score": 0.55,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2648,
        "fields": {
            "answer": 5151,
            "issue": 103,
            "issue_score": 0.55,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2649,
        "fields": {
            "answer": 5151,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2650,
        "fields": {
            "answer": 5153,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2651,
        "fields": {
            "answer": 5154,
            "issue": 100,
            "issue_score": 0.25,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2652,
        "fields": {
            "answer": 5154,
            "issue": 101,
            "issue_score": -0.25,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2653,
        "fields": {
            "answer": 5154,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2654,
        "fields": {
            "answer": 5154,
            "issue": 103,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2655,
        "fields": {
            "answer": 5154,
            "issue": 104,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2656,
        "fields": {
            "answer": 5170,
            "issue": 100,
            "issue_score": 0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2657,
        "fields": {
            "answer": 5170,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2658,
        "fields": {
            "answer": 5171,
            "issue": 100,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2659,
        "fields": {
            "answer": 5172,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2660,
        "fields": {
            "answer": 5173,
            "issue": 103,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2661,
        "fields": {
            "answer": 5174,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2662,
        "fields": {
            "answer": 5175,
            "issue": 102,
            "issue_score": -0.25,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2663,
        "fields": {
            "answer": 5175,
            "issue": 103,
            "issue_score": 0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2664,
        "fields": {
            "answer": 5178,
            "issue": 100,
            "issue_score": 0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2665,
        "fields": {
            "answer": 5178,
            "issue": 101,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2666,
        "fields": {
            "answer": 5179,
            "issue": 100,
            "issue_score": 0.333,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2667,
        "fields": {
            "answer": 5179,
            "issue": 102,
            "issue_score": 0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2671,
        "fields": {
            "answer": 5189,
            "issue": 100,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2672,
        "fields": {
            "answer": 5190,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2677,
        "fields": {
            "answer": 5198,
            "issue": 100,
            "issue_score": -0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2678,
        "fields": {
            "answer": 5199,
            "issue": 100,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2679,
        "fields": {
            "answer": 5200,
            "issue": 100,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2680,
        "fields": {
            "answer": 5200,
            "issue": 101,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2681,
        "fields": {
            "answer": 5200,
            "issue": 102,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2682,
        "fields": {
            "answer": 5200,
            "issue": 103,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2683,
        "fields": {
            "answer": 5200,
            "issue": 104,
            "issue_score": 0.65,
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
        "pk": 2686,
        "fields": {
            "answer": 5203,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2687,
        "fields": {
            "answer": 5203,
            "issue": 101,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2688,
        "fields": {
            "answer": 5203,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2692,
        "fields": {
            "answer": 5263,
            "issue": 100,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2693,
        "fields": {
            "answer": 5263,
            "issue": 103,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2694,
        "fields": {
            "answer": 5263,
            "issue": 104,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2816,
        "fields": {
            "answer": 5139,
            "issue": 101,
            "issue_score": -0.35,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2817,
        "fields": {
            "answer": 5139,
            "issue": 102,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2818,
        "fields": {
            "answer": 5139,
            "issue": 104,
            "issue_score": 0.575,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2819,
        "fields": {
            "answer": 5140,
            "issue": 100,
            "issue_score": 0.25,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2820,
        "fields": {
            "answer": 5140,
            "issue": 101,
            "issue_score": -0.375,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2821,
        "fields": {
            "answer": 5140,
            "issue": 102,
            "issue_score": -0.125,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2822,
        "fields": {
            "answer": 5140,
            "issue": 104,
            "issue_score": 0.575,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2823,
        "fields": {
            "answer": 5141,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2824,
        "fields": {
            "answer": 5141,
            "issue": 101,
            "issue_score": -0.15,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2825,
        "fields": {
            "answer": 5141,
            "issue": 102,
            "issue_score": 0.15,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2826,
        "fields": {
            "answer": 5141,
            "issue": 103,
            "issue_score": 0.475,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2827,
        "fields": {
            "answer": 5141,
            "issue": 104,
            "issue_score": 0.425,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2828,
        "fields": {
            "answer": 5142,
            "issue": 100,
            "issue_score": 0.35,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2829,
        "fields": {
            "answer": 5142,
            "issue": 101,
            "issue_score": -0.333,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2830,
        "fields": {
            "answer": 5142,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2831,
        "fields": {
            "answer": 5142,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2832,
        "fields": {
            "answer": 5143,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2833,
        "fields": {
            "answer": 5143,
            "issue": 103,
            "issue_score": 0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2834,
        "fields": {
            "answer": 5144,
            "issue": 100,
            "issue_score": 0.425,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2835,
        "fields": {
            "answer": 5155,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2836,
        "fields": {
            "answer": 5155,
            "issue": 101,
            "issue_score": -0.3,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2837,
        "fields": {
            "answer": 5155,
            "issue": 102,
            "issue_score": 0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2838,
        "fields": {
            "answer": 5155,
            "issue": 103,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2839,
        "fields": {
            "answer": 5155,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2840,
        "fields": {
            "answer": 5156,
            "issue": 100,
            "issue_score": 0.35,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2841,
        "fields": {
            "answer": 5156,
            "issue": 101,
            "issue_score": -0.3,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2842,
        "fields": {
            "answer": 5156,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2843,
        "fields": {
            "answer": 5156,
            "issue": 103,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2844,
        "fields": {
            "answer": 5156,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2845,
        "fields": {
            "answer": 5157,
            "issue": 100,
            "issue_score": 0.35,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2846,
        "fields": {
            "answer": 5157,
            "issue": 101,
            "issue_score": -0.3,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2847,
        "fields": {
            "answer": 5157,
            "issue": 102,
            "issue_score": -0.125,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2848,
        "fields": {
            "answer": 5157,
            "issue": 103,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2849,
        "fields": {
            "answer": 5157,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2856,
        "fields": {
            "answer": 5191,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2857,
        "fields": {
            "answer": 5191,
            "issue": 102,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2858,
        "fields": {
            "answer": 5196,
            "issue": 100,
            "issue_score": 0.45,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2859,
        "fields": {
            "answer": 5196,
            "issue": 102,
            "issue_score": 0.25,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2860,
        "fields": {
            "answer": 5196,
            "issue": 103,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2861,
        "fields": {
            "answer": 5197,
            "issue": 100,
            "issue_score": 0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2862,
        "fields": {
            "answer": 5197,
            "issue": 102,
            "issue_score": 0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2863,
        "fields": {
            "answer": 5197,
            "issue": 103,
            "issue_score": 0.65,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2864,
        "fields": {
            "answer": 5198,
            "issue": 100,
            "issue_score": 0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2865,
        "fields": {
            "answer": 5198,
            "issue": 102,
            "issue_score": -0.15,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2866,
        "fields": {
            "answer": 5199,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2867,
        "fields": {
            "answer": 5199,
            "issue": 102,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2874,
        "fields": {
            "answer": 5213,
            "issue": 102,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2875,
        "fields": {
            "answer": 5214,
            "issue": 102,
            "issue_score": 0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2876,
        "fields": {
            "answer": 5215,
            "issue": 100,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2877,
        "fields": {
            "answer": 5215,
            "issue": 102,
            "issue_score": -0.5,
            "issue_importance": 3
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
        "pk": 2883,
        "fields": {
            "answer": 5221,
            "issue": 100,
            "issue_score": 0.35,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2884,
        "fields": {
            "answer": 5222,
            "issue": 100,
            "issue_score": 0.35,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2885,
        "fields": {
            "answer": 5223,
            "issue": 100,
            "issue_score": 0.2,
            "issue_importance": 1
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
        "pk": 2887,
        "fields": {
            "answer": 5231,
            "issue": 102,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2888,
        "fields": {
            "answer": 5232,
            "issue": 102,
            "issue_score": 0.2,
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
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2890,
        "fields": {
            "answer": 5235,
            "issue": 103,
            "issue_score": 0.75,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2891,
        "fields": {
            "answer": 5235,
            "issue": 104,
            "issue_score": 0.75,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2892,
        "fields": {
            "answer": 5236,
            "issue": 102,
            "issue_score": -0.05,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2893,
        "fields": {
            "answer": 5236,
            "issue": 104,
            "issue_score": 0.4,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2894,
        "fields": {
            "answer": 5237,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2895,
        "fields": {
            "answer": 5237,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 1
        }
    }
]

campaignTrail_temp.answer_score_state_json = []

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2620,
        "fields": {
            "answer": 5139,
            "candidate": 201,
            "answer_feedback": "It turns out that you will be running against Trump, likely with a significant fundraising advantage."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2621,
        "fields": {
            "answer": 5140,
            "candidate": 201,
            "answer_feedback": "You are setting yourself up be a mainstream, establishment Democratic candidate. It seemed to work for Obama the last two times."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2622,
        "fields": {
            "answer": 5141,
            "candidate": 201,
            "answer_feedback": "Analysts and voters detect more of a populist note in your latest political persona."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2623,
        "fields": {
            "answer": 5142,
            "candidate": 201,
            "answer_feedback": "Some wonder if it's just a cynical political ploy, but you get your face on the local news in a lot of places across the country."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2624,
        "fields": {
            "answer": 5143,
            "candidate": 201,
            "answer_feedback": "It's good to hit back hard, even if a few bloviators question how this affects your \"likeability\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2625,
        "fields": {
            "answer": 5144,
            "candidate": 201,
            "answer_feedback": "Maybe your best bet here is to turn this into a \"both sides\" partisan story. And it's not as if you're wrong about Bush."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2626,
        "fields": {
            "answer": 5145,
            "candidate": 201,
            "answer_feedback": "This story is having a definite effect on your campaign, unfortunately."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2627,
        "fields": {
            "answer": 5146,
            "candidate": 201,
            "answer_feedback": "This story is having a definite effect on your campaign, unfortunately."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2628,
        "fields": {
            "answer": 5147,
            "candidate": 201,
            "answer_feedback": "Trump's response to this shooting has been widely criticized by political commentators."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2629,
        "fields": {
            "answer": 5148,
            "candidate": 201,
            "answer_feedback": "This answer appeals to your core voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2630,
        "fields": {
            "answer": 5149,
            "candidate": 201,
            "answer_feedback": "This is a standard, non-political response to any tragic event."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2631,
        "fields": {
            "answer": 5150,
            "candidate": 201,
            "answer_feedback": "It's not yet clear whether this attack was actually terrorism. Both you and Trump are coming under some criticism for jumping to that conclusion."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2632,
        "fields": {
            "answer": 5151,
            "candidate": 201,
            "answer_feedback": "Pundits talk a lot about the surprisingly pugnacious and populist tone of your acceptance speech."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2633,
        "fields": {
            "answer": 5152,
            "candidate": 201,
            "answer_feedback": "Pundits detect the standard, Democratic talking points in your speech that will appeal to a wide variety of potential supporters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2634,
        "fields": {
            "answer": 5153,
            "candidate": 201,
            "answer_feedback": "Pundits talk a lot about you eschewed ideology to take the attack to Trump."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2635,
        "fields": {
            "answer": 5154,
            "candidate": 201,
            "answer_feedback": "Pundits conclude that your speech was somewhat moderate, unifying, and surprisingly non-controversial. Some just thought it was boring."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2636,
        "fields": {
            "answer": 5155,
            "candidate": 201,
            "answer_feedback": "Tim Kaine is very popular within the party establishment, but less well known in the general public."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2637,
        "fields": {
            "answer": 5156,
            "candidate": 201,
            "answer_feedback": "Tim Kaine is very popular within the party establishment, but less well known in the general public."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2638,
        "fields": {
            "answer": 5157,
            "candidate": 201,
            "answer_feedback": "Tim Kaine is very popular within the party establishment, but less well known in the general public."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2651,
        "fields": {
            "answer": 5170,
            "candidate": 201,
            "answer_feedback": "Whatever your personal feelings, you must do something to reach out to Bernie Sanders and his legion of supporters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2652,
        "fields": {
            "answer": 5171,
            "candidate": 201,
            "answer_feedback": "People on all sides mostly see you trying to strike a middle path on the \"Bernie question\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2653,
        "fields": {
            "answer": 5172,
            "candidate": 201,
            "answer_feedback": "Even close advisors feel it was probably a mistake to freeze Bernie out so aggressively from the convention, given the backlash that has ensued."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2654,
        "fields": {
            "answer": 5173,
            "candidate": 201,
            "answer_feedback": "This answer has the expected supporters and detractors."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2655,
        "fields": {
            "answer": 5174,
            "candidate": 201,
            "answer_feedback": "This is a safe, standard response and your visit makes you look statesmanlike in contrast to Trump."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2656,
        "fields": {
            "answer": 5175,
            "candidate": 201,
            "answer_feedback": "Pundits note the surprisingly strong tone of your speech about ISIS."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2657,
        "fields": {
            "answer": 5176,
            "candidate": 201,
            "answer_feedback": "It's fine to bring the attack to Trump. Just make sure to mention what you have to offer as well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2658,
        "fields": {
            "answer": 5177,
            "candidate": 201,
            "answer_feedback": "Your best bet is to focus both on Trump's behavior, along with other economic and social issues that Americans and Democrats find important."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2659,
        "fields": {
            "answer": 5178,
            "candidate": 201,
            "answer_feedback": "You should definitely be discussing pocketbook issues on the trail, but don't forget how unpopular Trump is as well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2660,
        "fields": {
            "answer": 5179,
            "candidate": 201,
            "answer_feedback": "You should definitely be discussing your qualifications on the trail, but don't forget how unpopular Trump is as well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2665,
        "fields": {
            "answer": 5184,
            "candidate": 201,
            "answer_feedback": "It's not like anyone is asking you to comment on this, but it could have been an interesting gambit, given the stakes of this election."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2666,
        "fields": {
            "answer": 5185,
            "candidate": 201,
            "answer_feedback": "It's unclear what effect this will have, but it is an interesting move."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2669,
        "fields": {
            "answer": 5189,
            "candidate": 201,
            "answer_feedback": "Can you turn out enough of the base to make up for disaffecting some moderate voters?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2670,
        "fields": {
            "answer": 5191,
            "candidate": 201,
            "answer_feedback": "Can you win enough swing voters to compensate for tepid enthusiasm within your base?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2674,
        "fields": {
            "answer": 5196,
            "candidate": 201,
            "answer_feedback": "There's nothing wrong with embracing Barack Obama this fall."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2675,
        "fields": {
            "answer": 5197,
            "candidate": 201,
            "answer_feedback": "Obama emphasizes turnout repeatedly in his speeches across these areas."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2676,
        "fields": {
            "answer": 5198,
            "candidate": 201,
            "answer_feedback": "There are a few unwanted rumors out there that you and Obama don't totally get along. Unless you wanted those to leak out?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2677,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "answer_feedback": "You can run a more assertively populist campaign without completely throwing Obama overboard."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2678,
        "fields": {
            "answer": 5200,
            "candidate": 201,
            "answer_feedback": "There are pros and cons to embracing Bernie so closely."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2679,
        "fields": {
            "answer": 5201,
            "candidate": 201,
            "answer_feedback": "Who knows if it means anything nationally, but a raucous crowd turned out to support the two of you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2680,
        "fields": {
            "answer": 5203,
            "candidate": 201,
            "answer_feedback": "The reluctance of Bernie to endorse you after a couple of personal meetings fuels rampant speculation about the causes."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2684,
        "fields": {
            "answer": 5227,
            "candidate": 201,
            "answer_feedback": "Unfortunately, an ill-timed health issue has cost you several days of appearances during a critical part of the campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2685,
        "fields": {
            "answer": 5228,
            "candidate": 201,
            "answer_feedback": "After a couple of days, the health issue recedes to the background."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2686,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "answer_feedback": "You are campaigning hard, but several times you break out into uncontrolled coughing fits that don't escape public notice."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2687,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "answer_feedback": "Unfortunately, your decision to keep campaigning has really backfired. Your health issue has gotten worse, forcing you to take a significant break from the campaign in October."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2688,
        "fields": {
            "answer": 5242,
            "candidate": 201,
            "answer_feedback": "Your 30-minute TV spots have terrible ratings, and Trump doesn't hesitate to mock you for it on Twitter."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2689,
        "fields": {
            "answer": 5243,
            "candidate": 201,
            "answer_feedback": "Pundits seem to think that you did surprisingly poorly against Trump, even if he was his usual wild self."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2690,
        "fields": {
            "answer": 5244,
            "candidate": 201,
            "answer_feedback": "Your debate performances are widely praised, especially compared to Trump. Will it matter with the voters?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2691,
        "fields": {
            "answer": 5245,
            "candidate": 201,
            "answer_feedback": "Your debate performances are widely praised, especially compared to Trump. Will it matter with the voters?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2692,
        "fields": {
            "answer": 5246,
            "candidate": 201,
            "answer_feedback": "Trump's comments dominate the airwaves for several days, and even bring some condemnation from notable conservatives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2693,
        "fields": {
            "answer": 5247,
            "candidate": 201,
            "answer_feedback": "Trump's comments dominate the airwaves for several days, and even bring some condemnation from notable conservatives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2694,
        "fields": {
            "answer": 5248,
            "candidate": 201,
            "answer_feedback": "Trump's comments dominate the airwaves for several days, and even bring some condemnation from notable conservatives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2695,
        "fields": {
            "answer": 5249,
            "candidate": 201,
            "answer_feedback": "Trump's comments dominate the airwaves for several days, and even bring some condemnation from notable conservatives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2696,
        "fields": {
            "answer": 5250,
            "candidate": 201,
            "answer_feedback": "After days of Trump's \"grab them by the pussy\" comments dominating the news, the story begins to move on to other things, not the least of which is these leaks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2697,
        "fields": {
            "answer": 5251,
            "candidate": 201,
            "answer_feedback": "After days of Trump's \"grab them by the pussy\" comments dominating the news, the story begins to move on to other things, not the least of which is these leaks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2698,
        "fields": {
            "answer": 5252,
            "candidate": 201,
            "answer_feedback": "After days of Trump's \"grab them by the pussy\" comments dominating the news, the story begins to move on to other things, not the least of which is these leaks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2699,
        "fields": {
            "answer": 5253,
            "candidate": 201,
            "answer_feedback": "After days of Trump's \"grab them by the pussy\" comments dominating the news, the story begins to move on to other things, not the least of which is these leaks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2700,
        "fields": {
            "answer": 5254,
            "candidate": 201,
            "answer_feedback": "After days of Trump's \"grab them by the pussy\" comments dominating the news, the story begins to move on to other things, not the least of which is these leaks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2701,
        "fields": {
            "answer": 5255,
            "candidate": 201,
            "answer_feedback": "After days of Trump's \"grab them by the pussy\" comments dominating the news, the story begins to move on to other things, not the least of which is these leaks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2702,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "answer_feedback": "After a few days, Comey does announce that no new evidence was found. Unfortunately for you, there was a definite effect on the polls as early voting began."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2703,
        "fields": {
            "answer": 5257,
            "candidate": 201,
            "answer_feedback": "After a few days, Comey does announce that no new evidence was found. Unfortunately for you, there was a definite effect on the polls as early voting began."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2707,
        "fields": {
            "answer": 5212,
            "candidate": 201,
            "answer_feedback": "Television commentator Sean Hannity recounts a single, private conversation between himself and Trump in 2003 where Trump said he opposed the war."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2708,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "answer_feedback": "“Clinton defends Iraq War” is the headline today. Your statement might be factually accurate, but it's out of step with the views of most in your party."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2711,
        "fields": {
            "answer": 5220,
            "candidate": 201,
            "answer_feedback": "It's not hard to notice your progressive emphasis with this answer."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2712,
        "fields": {
            "answer": 5221,
            "candidate": 201,
            "answer_feedback": "Fighting for the rebirth of a public option is a mainstream position for the Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2713,
        "fields": {
            "answer": 5223,
            "candidate": 201,
            "answer_feedback": "Supports and opponents both note that you are not really rocking the boat on this issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2714,
        "fields": {
            "answer": 5224,
            "candidate": 201,
            "answer_feedback": "It may have been an off-the-cuff statement, but it has erupted onto the headlines, likely to your detriment."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2715,
        "fields": {
            "answer": 5225,
            "candidate": 201,
            "answer_feedback": "It may have been an off-the-cuff statement, but it has erupted onto the headlines, likely to your detriment."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2716,
        "fields": {
            "answer": 5226,
            "candidate": 201,
            "answer_feedback": "Whatever else people can say about this campaign, it certainly hasn't lacked in verbal combat between you and Mr. Trump."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2717,
        "fields": {
            "answer": 5233,
            "candidate": 201,
            "answer_feedback": "Behind the scenes, Obama is not too pleased with your lukewarm stance. One way or another, rumors of a rift leak into the political press."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2718,
        "fields": {
            "answer": 5235,
            "candidate": 201,
            "answer_feedback": "Your talk about an “appallingly low” level and “millions” of refugees immediately starts the right-wing rumor mill churning about your refugee plans. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2719,
        "fields": {
            "answer": 5236,
            "candidate": 201,
            "answer_feedback": "Some of your supporters are upset that you aren't taking a stronger stand on admitting Syrian refugees."
        }
    }
]
campaignTrail_temp.cyoa = true
cyoAdventure = function (a){
if(e.question_number == 0) {
ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
setSoundtrack("Test");
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





 