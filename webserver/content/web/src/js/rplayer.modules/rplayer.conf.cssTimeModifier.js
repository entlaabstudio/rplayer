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
                    "midiHihatOpen3": ".midiHihatOpen3, .drumsHeader",
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
                    "1": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "2": {
                        "selectorsKey": "midiSnareGhost",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "3": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "4": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "5": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "6": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "7": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "8": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "9": {
                        "selectorsKey": "midiHihatOpen",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "10": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "11": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "12": {
                        "selectorsKey": "midiHihatTipTight",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "13": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "14": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "15": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "16": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "17": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "18": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "19": {
                        "selectorsKey": "midiRide",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "20": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "21": {
                        "selectorsKey": "midiBass",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "22": {
                        "selectorsKey": "guitarsHeader",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "23": {
                        "selectorsKey": "synthsHeader",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "24": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 0
                    },
                    "25": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 0
                    },
                    "26": {
                        "selectorsKey": "marcel",
                        "cssKey": "border",
                        "length": 0
                    },
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
                    },
                    "286250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "286875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287502": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "287752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "288875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "289875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "290875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "291752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "292875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293752": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "293875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294002": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "294752": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "295875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "296752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "297752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "298752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299002": {
                        "selectorsKey": "midiRide",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "299752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "300875": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301500": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "301875": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302000": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "302875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "303753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "304875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "305875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "306875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "307753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308627": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308752": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "308875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309003": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309503": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309627": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "309875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310377": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "310753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "311875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "312753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313503": {
                        "selectorsKey": "midiRide",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "313753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "314753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "315753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316003": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316375": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316437": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316500": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316750": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316752": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "316875": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317125": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317187": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317250": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317500": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317625": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317752": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317812": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "317937": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318062": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318187": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318502": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318752": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "318877": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319127": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319377": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319502": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "319877": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320127": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320252": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320625": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320627": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "320877": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321002": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321502": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321625": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321627": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321752": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "321877": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322002": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322127": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322312": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322437": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322502": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322752": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "322877": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323127": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323377": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323502": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "323877": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324127": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324252": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324312": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324377": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324437": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324502": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324752": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "324877": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325127": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325416": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325502": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "325875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "326000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "326125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "327250": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "327375": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "327500": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "327625": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "327750": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "327875": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328000": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328125": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "328753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "329753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330127": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330502": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "330753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "331875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332000": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332125": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "332753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "333753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "334875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "335875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336003": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336127": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "336753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "337753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338503": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "338753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "339752": {
                        "selectorsKey": "midiHihatOpen3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340002": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340127": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "340753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341625": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "341875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342000": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342125": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "342875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343252": {
                        "selectorsKey": "midiHihatOpen3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343375": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343625": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343833": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "343916": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344083": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344166": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "344753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345127": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "345753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346127": {
                        "selectorsKey": "midiHihatOpen3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "346753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "347875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348127": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "348753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "349753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "350875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "351875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352256": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "352753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "353753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354503": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "354753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "355753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "356753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357375": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357500": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357627": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357750": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357752": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "357875": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358003": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358125": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358627": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "358875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359375": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359625": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359833": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "359916": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360083": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360166": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360254": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "360875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "361752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "362875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "363875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "364875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "365752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366627": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "366875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367500": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367750": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "367875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "368752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "369875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "370752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371752": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "371875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "372752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "373752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "374875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375253": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375502": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375503": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "375753": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376002": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376003": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376252": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376377": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "376752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "377875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "378752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "379752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "380875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "381752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "382752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "383875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "384000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "384002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "384125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "384250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "384252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "384255": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400257": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400339": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400423": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "400507": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401007": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401089": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401173": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401257": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "401757": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "402000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "402007": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "402500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "402507": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "402750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "402757": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403257": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403339": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403423": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403507": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "403757": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404007": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404257": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404757": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404839": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "404923": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405007": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405257": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405507": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405757": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405839": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "405923": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406007": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406257": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406507": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406833": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "406915": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407000": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407083": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407281": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "407752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "408000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "408002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "408500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "408502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "408752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "409752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "410000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "410252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "410500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "410750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "410752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "411752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "412915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "413915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "414875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415781": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "415918": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "416083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "416085": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "417752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "418000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "418252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "418500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "418750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "418752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "419752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "420915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "421915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "422875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "423752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "424000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "424002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "424500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "424502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "424752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "425752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "426000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "426002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "426252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "426500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "426750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "426752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "427752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "428915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "429915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "430875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "431915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432377": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "432752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "433875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "434752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "435752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "436875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "437752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438252": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "438752": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439002": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439375": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439500": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439627": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439750": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "439877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "440000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "440125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "440250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "440252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "440254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "444753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "445753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "446753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "447875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448000": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448125": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "448753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "449753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "450753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "451875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "452753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "453753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "454753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455752": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "455753": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "456753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "457753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "458755": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459005": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459255": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459781": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "459915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "460753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "461753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "462753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "463875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464000": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464125": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "464753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "465753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "466753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467252": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "467877": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468254": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "468753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "469753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "470753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471752": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "471753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "472753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473253": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473502": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "473753": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474002": {
                        "selectorsKey": "midiHihatPedal",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474252": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474627": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "474875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475002": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475375": {
                        "selectorsKey": "midiTom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475625": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475833": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "475915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476083": {
                        "selectorsKey": "midiTom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476165": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476253": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "476875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "477752": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "478875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "479875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480002": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480127": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480502": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "480875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "481752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "482875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "483875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484253": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "484752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485252": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485502": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "485877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "486752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "487752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488254": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "488752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "489752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "490875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491253": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491254": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491503": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491504": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491753": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "491754": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492003": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492004": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "492752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "493752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "494000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "494252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "494500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "494750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "494752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "495752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "496915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "497915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "498875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "499752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "500000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "500002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "500500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "500502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "500752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "501752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "502000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "502252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "502500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "502750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "502752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "503752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "504915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "505915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "506875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "507000": {
                        "selectorsKey": "midiTom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "507125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "507250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "507281": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "508250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "508252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "508333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "508415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "508500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "509000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "509083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "509165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "509250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "509252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "509750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "510000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "510252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "510500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "510750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "511250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "511252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "511333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "511415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "511500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "512250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "512252": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "512253": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "512750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "512833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "512915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "513915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "514000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "514250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "514252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "514500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "514750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "514875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515000": {
                        "selectorsKey": "midiTom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515281": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515502": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "515752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "516000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "516002": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "516500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "516502": {
                        "selectorsKey": "midiHihatOpen2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "517000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "517083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "517165": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "517250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "517252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "517750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "518000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "518252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "518500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "518750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "519250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "519252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "519333": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "519415": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "519500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "519750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "520000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "520250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "520252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "520750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "520833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "520915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "521915": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522252": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522752": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "522875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523259": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523267": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523509": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523517": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "523767": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "524000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "524009": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "524017": {
                        "selectorsKey": "midiChina",
                        "cssKey": "midiColor",
                        "length": 50
                    }
                }
            }
        }
    }
}