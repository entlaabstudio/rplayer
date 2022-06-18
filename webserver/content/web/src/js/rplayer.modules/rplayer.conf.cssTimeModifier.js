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
                    "midiKick": ".midiKick, .kickBlendedHeader, .drumsHeader",
                    "midiCrashL1": ".midiCrashL1, .drumsHeader",
                    "midiCrashL2": ".midiCrashL2, .drumsHeader",
                    "midiCrashR": ".midiCrashR, .drumsHeader",
                    "midiSplashL": ".midiSplashL, .drumsHeader",
                    "midiSplashR": ".midiSplashR, .drumsHeader",
                    "midiHihat": ".midiHihat, .drumsHeader",
                    "midiMiniHat": ".midiMiniHat, .drumsHeader",
                    "tom1": ".tom1, .drumsHeader",
                    "tom2": ".tom2, .drumsHeader",
                    "tom3": ".tom3, .drumsHeader",
                    "tom4": ".tom4, .drumsHeader",
                    "china": ".china, .drumsHeader",
                    "ride": ".ride, .drumsHeader",
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
                    "0": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 0
                    },
                    "1": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 0
                    },
                    "2": {
                        "selectorsKey": "marcel",
                        "cssKey": "border",
                        "length": 0
                    },
                    "3": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "4": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "5": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "6": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "7": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "8": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "9": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "10": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "11": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "12": {
                        "selectorsKey": "tom1",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "13": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "14": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "15": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "16": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "17": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "18": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "19": {
                        "selectorsKey": "midiBass",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "20": {
                        "selectorsKey": "guitarsHeader",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "21": {
                        "selectorsKey": "synthsHeader",
                        "cssKey": "midiColor",
                        "length": 0
                    },
                    "539000": {
                        "selectorsKey": "synthsHeader",
                        "cssKey": "midiColor",
                        "length": 83500
                    },
                    "540500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "540501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "540502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "540503": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "540504": {
                        "selectorsKey": "midiBass",
                        "cssKey": "midiColor",
                        "length": 48000
                    },
                    "540505": {
                        "selectorsKey": "guitarsHeader",
                        "cssKey": "midiColor",
                        "length": 48000
                    },
                    "540750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "540751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541252": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "541751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542252": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542253": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542751": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "542752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543253": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543751": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "543752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544376": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "544751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "545751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546751": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "546752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547333": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547416": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547625": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "547876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548000": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548125": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548503": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "548751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "549752": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550003": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550125": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550751": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "550752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "551751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "552751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553750": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "553751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554751": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554752": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554753": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554812": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "554875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555250": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555252": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555625": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "555876": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556000": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556251": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556500": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "556751": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557000": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 7250
                    },
                    "557001": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557002": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557003": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "557875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "558751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "559751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "560751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "561875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "562751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "563751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564251": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564751": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "564875": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 8750
                    },
                    "565000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "565875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "566751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "567751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "568751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "569875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "570751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571750": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "571937": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572250": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572251": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "572875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "573875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574000": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 14750
                    },
                    "574001": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "574751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "575875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "576875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "577875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "578751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "579875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580375": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "580876": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "581875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "582751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "583875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "584875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "585875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "586750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587625": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "587876": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588126": {
                        "selectorsKey": "midiStack",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588250": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "588502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589500": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589502": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589625": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589627": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589750": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589752": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589875": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "589877": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590000": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590002": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590125": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590127": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590250": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590252": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590375": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590377": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590503": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "590504": {
                        "selectorsKey": "midiBass",
                        "cssKey": "midiColor",
                        "length": 48000
                    },
                    "590505": {
                        "selectorsKey": "guitarsHeader",
                        "cssKey": "midiColor",
                        "length": 128000
                    },
                    "590750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591251": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "591750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592000": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 15250
                    },
                    "592001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "592751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "593751": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594625": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "594751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "595750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "596750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597531": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "597751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598251": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598751": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "598752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "599750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "600751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "601751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602252": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "602751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "603000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "603500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "603501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "603502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "603750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "603751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604625": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "604751": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605003": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605501": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "605756": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606006": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606256": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606500": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606625": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "606751": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607501": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607751": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "607758": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608001": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608008": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608250": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 15250
                    },
                    "608251": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "608751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609002": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609125": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "609751": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610625": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "610751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "611000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "611250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "611500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "611501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "611502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "611750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "612750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613531": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "613916": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614251": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614375": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "614751": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "615750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "616751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "617751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618252": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "618751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "619000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "619500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "619501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "619502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "619750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "619751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620751": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620833": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "620916": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621625": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "621875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622503": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "622750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "623750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "624751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "625752": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626251": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626503": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "626750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627000": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 6000
                    },
                    "627001": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627003": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "627750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "628751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629625": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "629876": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630000": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630500": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "630751": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "631750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "632751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "633752": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634251": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634503": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "634625": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 7875
                    },
                    "634750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "635750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636751": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "636752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637625": {
                        "selectorsKey": "tom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637687": {
                        "selectorsKey": "tom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637750": {
                        "selectorsKey": "tom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "637875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638000": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638125": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "638503": {
                        "selectorsKey": "synthsHeader",
                        "cssKey": "midiColor",
                        "length": 146000
                    },
                    "654500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "654501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "654502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "654503": {
                        "selectorsKey": "midiBass",
                        "cssKey": "midiColor",
                        "length": 64000
                    },
                    "655000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "655250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "655500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "655501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "655750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "656000": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 62625
                    },
                    "656001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "656250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "656251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "656500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "656750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "657000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "657250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "657500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "657501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "657750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "658000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "658250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "658500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "658501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "658750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "659000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "659250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "659500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "659501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "659750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "660000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "660250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "660251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "660500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "660750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "661000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "661250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "661500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "661501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "661750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "662000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "662250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "662251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "662750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "663000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "663250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "663500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "663501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "663750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "664000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "664250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "664251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "664500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "664750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "665000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "665250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "665500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "665501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "665750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "666000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "666250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "666500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "666501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "666750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "667000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "667250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "667500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "667501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "667750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "668000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "668250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "668500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "668501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "668750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "669875": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670125": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670251": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670252": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "670502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "671000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "671001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "671250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "671500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "671501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "671750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "672000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "672001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "672250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "672251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "672500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "672750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "673000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "673001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "673002": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "673250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "673500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "673750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674002": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "674750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "675000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "675001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "675250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "675500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "675501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "675750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "676000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "676001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "676250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "676251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "676500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "676750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "677000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "677001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "677250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "677500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "677501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "677750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "678000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "678001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "678002": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "678250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "678251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "678750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "679000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "679001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "679250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "679500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "679501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "679750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "680000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "680001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "680250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "680251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "680500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "680750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "681000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "681001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "681250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "681500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "681501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "681750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "682000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "682001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "682250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "682500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "682501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "682750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "683000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "683001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "683250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "683500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "683501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "683750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "684000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "684001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "684250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "684500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "684501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "684750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685001": {
                        "selectorsKey": "ride",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685625": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685750": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "685875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686251": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "686875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "687875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "688751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "689875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "690875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "691875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "692751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "693875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "694751": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "695875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "696875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "697751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "698875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "699875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "700751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "701875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "702875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "703875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "704751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "705875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706125": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "706751": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "707875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "708875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "709751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710501": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "710875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "711875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "712751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "713875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "714875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "715875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "716751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "717875": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718125": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718250": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718375": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "718502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719500": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719502": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719625": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719627": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719750": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719752": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719875": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "719877": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720000": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720002": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720125": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720127": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720250": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720252": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720375": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720377": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720501": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720502": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720503": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "720504": {
                        "selectorsKey": "midiBass",
                        "cssKey": "midiColor",
                        "length": 55000
                    },
                    "720505": {
                        "selectorsKey": "guitarsHeader",
                        "cssKey": "midiColor",
                        "length": 64000
                    },
                    "720750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721251": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "721750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722125": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 15125
                    },
                    "722250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "722751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "723751": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724625": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "724751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "725000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "725250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "725500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "725501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "725502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "725750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "726750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727531": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "727751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728251": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728751": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "728752": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "729750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "730751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "731751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732252": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "732751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "733000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "733500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "733501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "733502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "733750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "733751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734625": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "734751": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735003": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735501": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "735757": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736007": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736257": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736501": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736625": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "736752": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737501": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737751": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "737753": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738000": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738001": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738003": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738250": {
                        "selectorsKey": "jurta",
                        "cssKey": "border",
                        "length": 15125
                    },
                    "738251": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "738751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739002": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739125": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "739751": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740001": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740251": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740625": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "740751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "741000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "741250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "741500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "741501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "741502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "741750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "742750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743531": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "743916": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744250": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744251": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744375": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744501": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744625": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "744752": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745502": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "745750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746500": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746501": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "746751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "747751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748001": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748252": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "748751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "749000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "749500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "749501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "749502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "749750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "749751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750000": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750501": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750502": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750750": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750751": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750833": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "750916": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751001": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751002": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751251": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751252": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751500": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751501": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751750": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751751": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "751757": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752000": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752001": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752007": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752251": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752257": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "752875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "753501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "754875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "755000": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 2750
                    },
                    "755001": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "755002": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "755125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "755500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "755501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "756000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "756001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "756500": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "756750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "756875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "757501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758000": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "758875": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 3375
                    },
                    "758876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759001": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "759501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "760500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "760501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "760625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "760750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "760875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "761000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "761125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "761250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "761375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "761500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "761501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "762875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "763000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "763125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "763500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "763501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "764500": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "764750": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 3000
                    },
                    "764751": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "764875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "765000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "765125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "765250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "765375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "765500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "765501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "766875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "767000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "767125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "767250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "767375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "767500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "767501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "768000": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "768500": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "768501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "768625": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "768750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "768875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "769000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "769125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "769250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "769375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "769500": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770583": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770666": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770750": {
                        "selectorsKey": "nolan",
                        "cssKey": "border",
                        "length": 5250
                    },
                    "770751": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770833": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "770916": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "771000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "771083": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "771166": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "771500": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "772500": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "772750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "772875": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "773000": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "773125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "773250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "773375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "773500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "773501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774250": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774500": {
                        "selectorsKey": "tom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774501": {
                        "selectorsKey": "china",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774562": {
                        "selectorsKey": "tom1",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774625": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774687": {
                        "selectorsKey": "tom2",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774750": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774812": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774875": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "774937": {
                        "selectorsKey": "tom3",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775000": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775062": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775125": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775250": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775312": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775375": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775437": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775500": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiColor",
                        "length": 50
                    },
                    "775509": {
                        "selectorsKey": "tom4",
                        "cssKey": "midiColor",
                        "length": 50
                    }
                }
            }
        }
    }
}