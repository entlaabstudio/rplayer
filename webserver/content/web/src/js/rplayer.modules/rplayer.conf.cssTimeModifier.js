/**
 * @file CSS time modifier configuration for conf file of RPlayer web application (configVersion: 3)
 * @copyright Robert Rajs 2022
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2022 Robert Rajs
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * @description
 * Don´t use apostrophe in HTML. You just put \".
 * {base_url} prints the base URL almost anywhere.
 * Insert images into HTML as base64.
 */

export default class RPlayerConfCssTimeModifier {
    constructor() {

        console.log("[RPlayer]","Config part cssTimeModifier loaded.");
        
        this.conf = {
            "cssTimeModifier": {
                "selectors": {
                    "nolan": "img[src^=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUG\"]",
                    "jurta": "img[src^=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAY\"]",
                    "marcel": "img[src^=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAY\"]",
                    "midiSnare": ".midiSnare, .snareBlendedHeader, .drumsHeader",
                    "midiSnareGhost": ".midiSnareGhost, .snareBlendedHeader, .drumsHeader",
                    "midiKick": ".midiKick, .kickBlendedHeader, .drumsHeader",
                    "midiCrashL1": ".midiCrashL1, .drumsHeader",
                    "midiCrashL2": ".midiCrashL2, .drumsHeader",
                    "midiCrashR": ".midiCrashR, .drumsHeader",
                    "midiSplashL": ".midiSplashL, .drumsHeader",
                    "midiSplashR": ".midiSplashR, .drumsHeader",
                    "midiHihatOpen": ".midiHihatOpen, .drumsHeader",
                    "midiHihatOpen2": ".midiHihatOpen2, .drumsHeader",
                    "midiHihatPedal": ".midiHihatPedal, .drumsHeader",
                    "midiHihatTipTight": ".midiHihatTipTight, .drumsHeader",
                    "midiMiniHat": ".midiMiniHat, .drumsHeader",
                    "midiTom1": ".midiTom1, .drumsHeader",
                    "midiTom2": ".midiTom2, .drumsHeader",
                    "midiTom3": ".midiTom3, .drumsHeader",
                    "midiTom4": ".midiTom4, .drumsHeader",
                    "midiChina": ".midiChina, .drumsHeader",
                    "midiRide": ".midiRide, .drumsHeader",
                    "midiStack": ".midiStack, .drumsHeader",
                    "midiBass": ".bassHeader",
                    "guitarsHeader": ".guitarsHeader",
                    "synthsHeader": ".synthsHeader"
                },
                "css": {
                    "border": {
                        "entrance": {
                            "borderColor": "var(--currentTime)",
                            "transition": "all 0.3s ease-out"
                        },
                        "outgoing": {
                            "borderColor": "transparent",
                            "transition": "all 0.3s ease-out"
                        }
                    },
                    "midiColor": {
                        "entrance": {
                            "color": "var(--currentTime)",
                            "scale": 1.1,
                            "transition": "none"
                        },
                        "outgoing": {
                            "color": "rgba(255,255,255,1)",
                            "scale": 1,
                            "transition": "all 0.3s ease-out"
                        }
                    }
                },
                "default": {
                    "cssKey": "border",
                    "length": 3000,
                    "animationTime": {
                        "entrance": 500,
                        "outgoing": 500
                    }
                },
                "commandsInTime": {
                    "18055": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "18189": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "18327": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "18462": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "18605": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "18735": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "18872": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19009": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19145": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19280": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19419": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19552": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19689": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19828": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "19970": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20095": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20237": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20376": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20509": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20513": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20646": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20784": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "20925": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21053": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21195": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21326": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21469": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21597": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21736": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "21877": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22007": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22154": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22281": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22417": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22553": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22690": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22826": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "22971": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23098": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23236": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23372": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23510": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23645": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23781": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "23915": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24055": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24190": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24331": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24459": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24600": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24740": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24871": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "24878": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25009": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25151": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25287": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25420": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25557": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25689": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25832": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "25961": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26097": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26242": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26371": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26518": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26645": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26781": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "26917": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27053": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27192": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27332": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27462": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27600": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27735": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "27870": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28009": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28146": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28280": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28419": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28554": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28695": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28823": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "28962": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29105": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29235": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29239": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29372": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29513": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29650": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29780": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "29921": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30055": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30196": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30325": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30462": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30604": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30734": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "30884": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31010": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31145": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31281": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31418": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31555": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31698": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31828": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "31964": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32100": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32235": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32373": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32507": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32643": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32781": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "32918": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33061": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33187": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33328": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33468": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33598": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33604": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33734": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "33878": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34014": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34139": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34284": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34414": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34553": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34687": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34823": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "34967": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35098": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35244": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35372": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35504": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35642": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35648": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35778": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "35914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36051": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36059": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36189": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36460": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36600": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36732": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "36868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37007": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37143": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37421": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37430": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37548": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37830": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37836": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "37968": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38095": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38238": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38246": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38375": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38650": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38781": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "38920": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39193": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39329": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39609": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39619": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39737": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "39867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40005": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40012": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40140": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40413": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40422": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40550": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40823": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "40963": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41095": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41235": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41368": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41504": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41640": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41782": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41794": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "41910": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42048": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42057": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42061": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42192": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42459": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42464": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42473": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42603": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42732": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "42875": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43142": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43146": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43230": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43415": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43507": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43595": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43689": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43776": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43960": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "43968": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44242": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44371": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44376": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44509": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44640": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44778": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44786": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "44917": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45050": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45189": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45323": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45329": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45461": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45732": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "45872": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46148": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46159": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46276": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46414": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46557": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46563": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46693": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46967": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "46972": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47102": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47235": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47375": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47511": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47650": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "47922": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48057": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48325": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48335": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48344": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48465": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48595": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48734": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48737": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "48868": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49006": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49140": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49147": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49278": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49550": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49687": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49822": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "49961": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50095": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50234": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50511": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50519": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50638": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50782": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50790": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "50920": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51050": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51192": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51201": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51330": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51602": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51875": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "51961": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52047": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52144": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52232": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52321": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52415": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52506": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52597": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52687": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52822": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52967": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "52968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "53367": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "53368": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "53507": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "53639": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "53779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "53781": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54051": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54053": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54326": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54327": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54601": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54730": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "54870": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55003": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55144": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55416": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55685": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55690": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "55961": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56094": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56233": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56237": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56506": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56508": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56776": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56781": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "56912": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57053": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57059": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57186": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57329": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57458": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57730": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "57873": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58145": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58414": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58418": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58689": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58690": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58958": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "58964": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59095": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59235": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59367": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59508": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59779": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "59914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60048": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60052": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60330": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60597": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60734": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "60871": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61143": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61277": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61419": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61550": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61690": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "61695": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62094": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62235": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62367": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62508": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62509": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62776": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "62783": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63054": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63327": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63458": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63597": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63730": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "63871": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64144": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64145": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64277": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64412": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64418": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64689": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64690": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64821": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "64960": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65234": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65235": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65506": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65639": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65779": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "65914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66058": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66185": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66458": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66459": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66602": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66869": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "66872": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67003": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67140": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67142": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67416": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67685": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67689": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "67964": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68094": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68237": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68504": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68512": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68776": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68784": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "68913": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69050": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69053": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69185": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69325": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69417": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69506": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69869": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "69903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70146": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70280": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70412": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70414": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70417": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70419": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70554": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70688": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70826": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "70971": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71098": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71235": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71372": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71506": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71644": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71785": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "71917": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72050": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72188": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72333": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72460": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72595": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72740": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72877": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "72878": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73009": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73146": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73286": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73418": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73558": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73689": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73831": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "73967": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74101": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74239": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74373": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74521": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74647": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74777": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "74917": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75058": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75192": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75334": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75464": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75601": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75737": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "75872": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76009": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76144": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76279": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76417": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76555": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76696": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76822": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "76961": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77103": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77238": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77240": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77371": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77512": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77650": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77779": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "77921": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "78052": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "78196": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "78330": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "78464": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "78601": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79146": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79147": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79419": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79686": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79687": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79693": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79830": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "79969": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80234": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80238": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80512": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80640": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80778": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "80781": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81326": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81327": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81459": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81598": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81869": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "81873": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82146": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82414": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82415": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82420": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82695": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82960": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "82964": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83229": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83368": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83504": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83512": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "83778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84055": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84195": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84325": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84594": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84595": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84601": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "84870": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85004": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85140": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85147": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85148": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85414": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85421": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85687": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85690": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "85963": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86230": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86231": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86238": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86508": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86640": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86776": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86777": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "86783": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87059": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87326": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87355": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87603": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87605": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87872": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "87873": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88144": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88413": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88415": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88418": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88559": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88690": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88963": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "88964": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89503": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89505": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89509": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "89784": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90051": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90054": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90323": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90602": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "90876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91139": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91145": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91147": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91550": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91686": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91690": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91956": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "91968": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92095": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92236": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92237": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92508": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92778": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92780": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "92914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93059": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93327": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93603": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93871": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "93873": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94140": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94147": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94419": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94694": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "94963": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95240": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95368": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95509": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95779": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "95912": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96051": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96185": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96325": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96330": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96462": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96595": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96601": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96602": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96739": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "96877": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97140": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97144": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97145": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97279": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97285": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97690": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "97963": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98097": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98101": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98506": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98508": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98510": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98778": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "98919": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99058": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99328": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99329": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99872": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "99875": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100412": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100413": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100419": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100687": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100823": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100960": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "100964": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101504": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101510": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "101781": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102054": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102055": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102596": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102601": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102602": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "102876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103144": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103421": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103686": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103690": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103693": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103822": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103964": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "103965": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104095": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104233": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104235": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104369": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104510": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104511": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104601": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104689": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "104811": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105053": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105054": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105322": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105327": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105328": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "105872": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106150": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106412": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106419": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106420": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106693": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106958": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "106965": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "107231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "107235": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "107508": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "107509": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "107642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "107781": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108048": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108051": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108054": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108326": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108595": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108598": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108600": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "108877": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109139": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109144": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109208": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109276": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109344": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109411": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109419": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109480": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109550": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109692": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109830": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "109963": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110233": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110234": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110237": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110368": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110375": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110777": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110779": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "110783": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111186": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111194": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111327": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111598": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111600": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111601": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "111868": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112009": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112147": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112413": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112420": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112550": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112693": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112821": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112963": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "112964": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "113098": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "113233": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "113236": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "113369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "113505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "113538": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114056": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114330": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114596": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114600": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "114875": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115145": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115417": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115421": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115687": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115693": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115831": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "115964": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116237": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116512": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116778": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116783": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116785": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "116914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117056": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117057": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117328": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117597": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117603": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117867": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "117876": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118004": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118013": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118146": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118286": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118413": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118421": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118692": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118821": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "118966": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119235": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119237": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119367": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119509": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119776": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119784": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "119914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120051": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120056": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120322": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120464": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120873": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "120938": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121006": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121076": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121141": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121146": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121277": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121419": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121420": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121693": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121956": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121963": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "121964": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122236": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122371": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122506": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122641": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122784": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122786": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "122914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123327": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123597": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123602": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123867": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "123873": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124139": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124143": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124146": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124414": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124419": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124550": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124559": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124691": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124821": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "124966": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125238": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125503": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125509": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125783": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "125784": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126048": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126055": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126321": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126326": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126328": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126603": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126869": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "126872": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127004": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127146": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127147": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127416": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127418": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127687": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127692": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127823": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127964": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "127967": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128237": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128238": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128508": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128641": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128647": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128778": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "128918": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129056": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129323": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129394": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129459": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129463": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129596": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129735": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "129875": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130144": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130211": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130285": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130412": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130552": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130555": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130688": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130822": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "130958": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131053": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131144": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131234": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131326": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131418": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131509": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131779": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131781": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "131916": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132052": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132053": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132189": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132323": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132327": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132461": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132600": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132736": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "132872": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133009": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133141": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133142": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133280": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133414": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133420": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133553": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133686": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133826": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133961": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "133964": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134098": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134235": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134236": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134370": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134508": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134643": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134781": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134783": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "134916": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135051": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135052": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135188": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135322": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135462": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135596": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135601": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135735": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "135872": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136009": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136143": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136144": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136279": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136414": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136416": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136552": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136691": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136825": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136962": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "136964": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137098": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137238": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137239": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137372": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137508": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137645": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137783": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137786": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "137916": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138052": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138053": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138188": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138327": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138329": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138463": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138597": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138600": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138735": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138870": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "138876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139006": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139143": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139144": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139280": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139419": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139553": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139687": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139689": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139825": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "139963": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140100": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140233": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140234": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140371": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140508": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140644": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140777": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140780": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "140917": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141055": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141188": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141323": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141325": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141463": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141597": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141734": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141871": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "141875": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142008": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142146": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142280": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142414": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142415": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142554": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142688": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142692": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142826": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142960": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "142962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143100": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143235": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143239": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143371": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143505": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143643": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143781": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143783": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "143916": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144048": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144053": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144188": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144327": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144331": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144463": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144598": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144600": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144734": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144872": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "144873": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145005": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145141": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145280": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145417": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145418": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145552": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145686": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145693": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145827": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145961": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "145967": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146097": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146231": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146233": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146371": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146506": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146512": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146645": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146777": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146778": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "146917": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147054": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147055": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147189": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147326": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147461": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147597": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147602": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147734": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147872": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "147879": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "148960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "148966": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "148967": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "148968": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "149238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "149509": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "149784": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "150051": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151143": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151146": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151147": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151691": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151825": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151893": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151961": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "151962": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "152237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "152506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "152777": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "152778": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "152848": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "152918": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153055": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153323": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153326": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153328": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153331": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "153871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "154005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "154014": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "154143": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "154414": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "155506": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "155507": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "155511": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "155784": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156327": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156329": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156393": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156461": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156531": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156598": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156605": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "156872": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157141": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157421": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157687": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157692": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157694": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "157966": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "158239": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "158509": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "158781": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "159869": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "159872": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "159876": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160142": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160419": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160695": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160959": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160960": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "160966": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "161237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "161368": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "161375": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "161506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "161783": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162051": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162054": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162058": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162330": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162597": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "162873": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "163146": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "163422": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "163689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "163962": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "163969": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164030": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164100": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164167": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164230": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164234": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164239": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164241": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "164780": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165055": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165322": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165325": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165463": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165602": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165603": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165736": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165871": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "165872": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166009": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166145": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166146": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166280": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166413": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166419": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166420": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166422": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166694": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "166962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "167237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "167511": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "168595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "168601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "168602": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "168876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "168938": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169009": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169075": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169144": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169146": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169211": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169279": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169350": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169418": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169420": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169688": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169961": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "169962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170029": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170100": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170166": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170234": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170303": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170371": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170439": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170506": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170514": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170777": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170778": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170781": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "170785": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "171055": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "171329": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "171460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "171468": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "171601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "171871": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "172960": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "172963": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "172964": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173239": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173505": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173779": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173783": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173849": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173917": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "173984": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "174053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "174054": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "174059": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "174330": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "174595": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "174876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175143": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175147": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175149": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175419": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175687": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "175966": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "176231": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "177322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "177327": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "177328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "177602": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "177874": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178235": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178324": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178414": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178416": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178419": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178822": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178830": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "178963": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "179235": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "179503": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "179511": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "179512": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "179513": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "179780": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "180054": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "180325": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "180596": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "180604": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "180733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "180876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181420": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181550": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181691": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181694": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "181966": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182236": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182776": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182777": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182781": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "182918": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183053": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183059": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183189": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183326": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183327": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183463": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183599": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183601": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183736": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183870": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "183881": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "186052": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "187139": {
                        "selectorsKey": "midiRide",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188236": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188237": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188238": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188370": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188511": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188776": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188779": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188781": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "188921": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189059": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189321": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189329": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189604": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "189875": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190146": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190417": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190418": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190691": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190961": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "190962": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191504": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191508": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191509": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "191781": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192054": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192320": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192330": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192459": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192595": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192601": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "192868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193141": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193144": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193277": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193284": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193421": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193692": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "193962": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194236": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194511": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194779": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194784": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "194916": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195056": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195327": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195604": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195731": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195869": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "195876": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196141": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196412": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196413": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196447": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196694": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196961": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196963": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "196966": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197095": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197503": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197509": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197643": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197647": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "197784": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198050": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198052": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198054": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198325": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198600": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198601": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "198871": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199144": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199145": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199419": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199686": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199691": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199692": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199824": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "199964": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200234": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200238": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200513": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200641": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200779": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "200784": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201047": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201056": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201119": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201184": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201255": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201324": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201328": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201329": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201600": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201871": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "201872": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202005": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202143": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202413": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202414": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202420": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202824": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202959": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202960": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "202963": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "203233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "203238": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "203506": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "203510": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "203642": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "203784": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204051": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204053": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204186": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204459": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204600": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204603": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "204869": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205006": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205139": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205156": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205279": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205293": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205413": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205429": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205552": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205566": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205692": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205824": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205829": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "205966": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206236": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206237": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206375": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206509": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206777": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206783": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "206784": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207056": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207193": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207327": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207599": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207601": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207605": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "207868": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208004": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208011": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208147": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208413": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208418": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208420": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208824": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208958": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "208962": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209234": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209235": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209504": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209509": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209777": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209783": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209850": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209914": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "209985": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210050": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210054": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210056": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210328": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210597": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210600": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210733": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "210872": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211143": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211146": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211147": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211416": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211686": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211688": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211693": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211961": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "211963": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212235": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212236": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212369": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212511": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212777": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212779": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212784": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "212914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213056": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213059": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213185": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213322": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213324": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213328": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213460": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213597": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213601": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213691": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213776": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "213903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214142": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214412": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214419": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214420": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214551": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214689": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214960": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214966": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "214967": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215095": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215239": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215503": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215509": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215785": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "215914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216053": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216056": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216325": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216329": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216596": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216601": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216734": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "216876": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217139": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217145": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217147": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217279": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217416": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217691": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "217966": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218097": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218233": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218235": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218238": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218299": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218367": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218435": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218502": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218510": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218571": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218641": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218777": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218783": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218785": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "218919": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219054": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219329": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219330": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219460": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219467": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219602": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219868": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "219872": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220143": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220278": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220285": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220412": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220417": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220692": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220693": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "220960": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221096": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221102": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221234": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221504": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221510": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221641": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "221914": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222049": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222187": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222322": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222458": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222595": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222691": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222776": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222870": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "222961": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223049": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223141": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223145": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223414": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223421": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223688": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "223960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "224233": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "224237": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "224507": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "224513": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "224778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "224785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225324": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225330": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225597": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225685": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225771": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225875": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "225959": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226141": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226150": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226413": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226419": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226689": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226694": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "226962": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "227234": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "227507": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "227511": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "227779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228322": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228326": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228333": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228597": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228605": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228869": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228871": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "228877": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229139": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229144": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229151": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229414": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229416": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229425": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229961": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "229967": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "230236": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "230507": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "230595": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "230687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "230778": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "230783": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231059": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231322": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231329": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231730": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231868": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "231874": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232143": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232232": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232327": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232412": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232418": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232594": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232692": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "232966": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "233233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "233239": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "233508": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "233776": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "233778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234057": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234324": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234334": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234596": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234603": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "234870": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235005": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235143": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235278": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235419": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235553": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235691": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235826": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "235961": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "236097": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "236234": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "236238": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "236505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "236510": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "236779": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237052": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237325": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237330": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237599": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237604": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "237874": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238413": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238420": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238779": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238869": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238961": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "238967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239141": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239233": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239238": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239503": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239511": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "239786": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "240050": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "240325": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "240597": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "240603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "240869": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241139": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241147": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241416": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241417": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241425": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241685": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241689": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241697": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241961": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241962": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "241968": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242234": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242235": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242241": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242505": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242507": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242642": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242777": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "242785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243058": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243324": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243597": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243689": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243778": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243868": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "243874": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244143": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244147": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244412": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244418": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244821": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244960": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "244967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245232": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245322": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245414": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245511": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245599": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245684": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245779": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "245783": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246050": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246055": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246325": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246330": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246601": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246867": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "246870": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247141": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247145": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247416": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247426": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247686": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247692": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "247961": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248096": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248232": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248369": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248509": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248642": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248778": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248792": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "248914": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "249051": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "249055": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "249074": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    }
                }
            }
        }
    }
}