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
                    "midiSnare": ".midiSnare, .snareBlendedHeader",
                    "midiKick": ".midiKick, .kickBlendedHeader",
                    "midiCrashL1": ".midiCrashL1",
                    "midiCrashL2": ".midiCrashL2",
                    "midiCrashR": ".midiCrashR",
                    "midiSplashL": ".midiSplashL",
                    "midiSplashR": ".midiSplashR",
                    "midiHihat": ".midiHihat",
                    "midiMiniHat": ".midiMiniHat"
                },
                "css": {
                    "fx1": {
                        "entrance": {
                            "borderColor": "var(--currentTime)",
                            "transition": "all 0.3s ease-out"
                        },
                        "outgoing": {
                            "borderColor": "transparent",
                            "transition": "all 0.3s ease-out"
                        }
                    },
                    "midiSnare": {
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
                    },
                    "midiKick": {
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
                    },
                    "midiCrashL1": {
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
                    },
                    "midiCrashL2": {
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
                    },
                    "midiCrashR": {
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
                    "cssKey": "fx1",
                    "length": 53
                },
                "commandsInTime": {
                    "0": {
                        "selectorsKey": "nolan",
                        "cssKey": "fx1",
                        "length": 0
                    },
                    "1": {
                        "selectorsKey": "jurta",
                        "cssKey": "fx1",
                        "length": 0
                    },
                    "2": {
                        "selectorsKey": "marcel",
                        "cssKey": "fx1",
                        "length": 0
                    },
                    "3": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 0
                    },
                    "4": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 0
                    },
                    "5": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "6": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "7": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "8": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "9": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "10": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "11": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiCrashR",
                        "length": 0
                    },
                    "540512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 272
                    },
                    "540513": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "540514": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "540515": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "540785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "540786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "541058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 272
                    },
                    "541059": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "541060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "541331": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "541332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "541603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "541604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "541605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "541876": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "541877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "542149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 272
                    },
                    "542150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "542151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "542421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 272
                    },
                    "542422": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "542423": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "542424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "542694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "542695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "542967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 272
                    },
                    "542968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "542969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "543240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "543241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "543512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 272
                    },
                    "543513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "543514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "543785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "543786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "543787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "544058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "544059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "544060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "544331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "544332": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "544333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "544603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "544604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "544740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "544876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "544877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "544878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "545149": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "545150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "545421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "545422": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "545423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "545694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "545695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "545967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "545968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "545969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "546240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "546241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "546512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "546513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "546514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "546785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "546786": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "546787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "547058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "547059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "547331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "547332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "547333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "547603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "547604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "547876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "547877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "547878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "547967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 90
                    },
                    "548058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 90
                    },
                    "548149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "548150": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "548151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "548421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "548422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "548558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "548559": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "548694": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "548967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "549103": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "549240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "549241": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "549242": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "549243": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "549512": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "549513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "549785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "549786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "549787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "550058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "550059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "550331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "550332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "550333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "550603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "550604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "550876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "550877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "550878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "551149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "551150": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "551151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "551421": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "551422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "551694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "551695": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "551696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "551967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "551968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "552240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "552241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "552242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "552512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "552513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "552514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "552785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "552786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "553058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "553059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "553331": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "553332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "553467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "553603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "553604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "553605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "553876": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "553877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "554149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "554150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "554151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "554421": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "554422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "554694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "554695": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "554696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "554967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "554968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "555240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "555241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "555242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "555512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "555513": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "555514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "555785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "555786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "556058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "556059": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "556060": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "556061": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "556126": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "556194": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "556331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "556332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "556333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "556467": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "556603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "556604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "556740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "556876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "556877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "556973": {
                        "selectorsKey": "nolan",
                        "length": 17238
                    },
                    "557149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "557150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "557285": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "557558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "557694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "557831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "557967": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "558240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "558241": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "558512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "558513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "558514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "558785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "558786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "559058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "559059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "559331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "559332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "559467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "559603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "559604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "559876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "559877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "560149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "560150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "560421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "560422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "560694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "560695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "560967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "560968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "561240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "561241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "561512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "561513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "561785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "561786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "562058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "562059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "562331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "562332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "562333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "562603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "562604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "562876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "562877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "563149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "563150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "563421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "563422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "563694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "563695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "563831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "563967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "563968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "564240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "564241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "564512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "564513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "564785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "564786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "565058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "565059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "565331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "565332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "565603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "565604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "565876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "565877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "566149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "566150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "566421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "566422": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "566967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "566968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "567240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "567512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "567513": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "567785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "567786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "568058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "568059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "568194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "568331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "568332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "568603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "568604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "568876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "568877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "569149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "569150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "569421": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "569422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "569694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "569695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "569967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "569968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "570240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "570241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "570512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "570513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "570785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "570786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "571058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "571059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "571331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "571332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "571603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "571604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "571876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "571877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "572149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "572150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "572421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "572422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "572558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "572694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "572695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "572967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "572968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "573240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "573241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "573242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "573512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "573513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "573785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "573786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "573965": {
                        "selectorsKey": "jurta",
                        "length": 14899
                    },
                    "574058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "574059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "574331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "574332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "574467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "574603": {
                        "selectorsKey": "midiSplashL",
                        "cssKey": "midiCrashR",
                        "length": 68
                    },
                    "574604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "574740": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 90
                    },
                    "574808": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "574876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "574877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "575012": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "575285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "575421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "575422": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "575423": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "575694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "575695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "575831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "575967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "576103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "576240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "576241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "576512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "576513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "576649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "576785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "576921": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "577058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "577059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "577331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "577332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "577467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "577603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "577740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "577876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "577877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "578149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "578150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "578285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "578421": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "578558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "578694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "578695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "578967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "578968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "579103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "579240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "579376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "579512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "579513": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "579785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "579786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "580058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "580194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "580331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "580467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "580603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "580604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "580876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "580877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "581012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "581149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "581285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "581421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "581422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "581694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "581695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "581831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "581967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "582103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "582240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "582241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "582512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "582513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "582649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "582785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "582921": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "583058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "583059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "583331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "583332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "583467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "583603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "583740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "583876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "583877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "584149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "584150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "584421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "584558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "584559": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "584831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "584967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "584968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "585240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "585376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "585512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "585649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "585785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "585786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "586058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "586059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "586194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "586331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "586467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "586603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "586604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "586876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "586877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "587012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "587149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "587285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "587421": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "587422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "587694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "587695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "587831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "587967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "588103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "588240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "588241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "588512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "588513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "588785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "588921": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "589058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "589194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "589331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "589332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "589603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "589604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "589740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "589876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "590012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "590149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "590150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "590421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "590422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "590558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "590694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "590831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "590967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "591240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "591241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "591376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "591649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "591785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "591786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "591910": {
                        "selectorsKey": "jurta",
                        "length": 32473
                    },
                    "591921": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "592058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "592059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "592194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "592467": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "592740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "592876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "592877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "592878": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "595058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "595059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "595060": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "595061": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "595331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "595603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "595604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "595876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "595877": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "595878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "596149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "596150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "596151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "596421": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "596694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "596695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "596967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "596968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "597240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "597241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "597512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "597513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "597785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "597786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "598058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "598059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "598331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "598332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "598333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "598603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "598876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "598877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "598878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "599149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "599150": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "599151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "599558": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "599694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "599695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "599967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "600240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "600241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "600512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "600513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "600514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "600785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "601058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "601059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "601331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "601332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "601603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "601604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "601605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "601876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "602149": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "602150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "602421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "602422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "602694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "602695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "602728": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "602967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "602968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "603240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "603241": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "603242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "603512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "603785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "603786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "603787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "604058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "604059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "604060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "604331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "604332": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "604333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "604603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "604604": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "604605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "604876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "604877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "605149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "605421": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "605422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "605694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "605695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "605967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "605968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "606240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "606241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "606512": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "606513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "606785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "606786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "607058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "607059": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "607060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "607331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "607332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "607603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "607604": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "607605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "607876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "607877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "608149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "608421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "608422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "608694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "609240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "609241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "609242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "609512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "609513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "609785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "609786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "610058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "610059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "610331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "610332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "610333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "610603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "610876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "610877": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "610878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "611149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "611150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "611151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "611421": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "611694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "611695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "611967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "611968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "612240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "612241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "612512": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "612649": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "612785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "613058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "613059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "613331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "613332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "613603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "613604": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "613605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "613876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "614149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "614421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "614422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "614694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "614695": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "614696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "614967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "614968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "615240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "615241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "615512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "615513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "615785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "615786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "615787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "616058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "616331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "616332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "616333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "616603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "616604": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "616605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "617012": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "617149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "617150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "617421": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "617694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "617967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "617968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "617969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "618240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "618512": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "618513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "618785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "618786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "619058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "619059": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "619060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "619331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "619603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "619604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "619876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "619877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "620149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "620150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "620183": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "620421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "620422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "620512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "620603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "620694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "620695": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "620696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "620967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "621240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "621241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "621376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "621512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "621513": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "621785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "621786": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "622058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "622059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "622331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "622332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "622603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "622876": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "622877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "623149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "623150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "623421": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "623422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "623694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "623695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "623967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "623968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "624240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "624241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "624512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "624513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "624514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "624785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "624786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "625058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "625059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "625060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "625331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "625332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "625603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "625876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "625877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "626149": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "626694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "626695": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "626696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "626856": {
                        "selectorsKey": "nolan",
                        "length": 16039
                    },
                    "626967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "626968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "627240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "627241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "627512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "627513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "627785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "627786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "627787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "628058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "628331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "628332": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "628333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "628603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "628604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "628605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "628740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "628876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "628877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "629012": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "629285": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629421": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629558": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "629967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "629968": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "629969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "630240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "630512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "630513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "630785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "631058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "631059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "631331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "631603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "631604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "631876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "631877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "632149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "632421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "632422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "632694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "632695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "632967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "632968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "633240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "633241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "633242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "633512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "633513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "633785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "633786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "634058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "634059": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "634060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "634331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "634332": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "634333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "634603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "634876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "634877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "635149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "635421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "635422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "635694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "635967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "635968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "636240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "636241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "636512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "636785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "636786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "637058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "637059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "637331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "637332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "637603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "637604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "637605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "637740": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "637876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "638012": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "638285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "638421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "638558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "638694": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "638967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "638968": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "639240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "639241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "639512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "639785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "639786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "640058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "640331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "640332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "640603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "640604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "640876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "641149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "641150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "641421": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "641422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "641694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "641695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "641967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "641968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "641969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "642240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "642241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "642512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "642513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "642785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "642786": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "642787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "643058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "643059": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "643060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "643331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "643603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "643604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "643876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "644149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "644150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "644421": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "644694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "644695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "644967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "644968": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "644969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "645240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "645512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "645513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "645514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "645785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "645786": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "645787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "646058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "646059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "646331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "646740": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "647149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "647285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "647421": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "647422": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "647423": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "655596": {
                        "selectorsKey": "jurta",
                        "length": 63872
                    },
                    "664876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "664877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "664878": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "665422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "665694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "665967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "665968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "666240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "666512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "666785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "666786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "667058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "667331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "667603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "667876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "668149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "668150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "668422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "668694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "668967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "669240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "669241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "669512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "669785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "670058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "670331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "670332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "670603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "670876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "671149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "671150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "671422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "671694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "671967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "672240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "672512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "672513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "672785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "673058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "673331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "673332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "673876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "674149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "674422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "674694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "674695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "674967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "675240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "675512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "675513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "675785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "676058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "676331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "676603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "676876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "676877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "677149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "677422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "677694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "677967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "677968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "678240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "678512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "678785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "679058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "679059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "679331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "679603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "679876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "680149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "680150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "680422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "680694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "680967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "681240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "681241": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "681242": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "681512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "681785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "681922": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "682058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "682194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "682331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "682332": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "682333": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "682876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "683149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "683422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "683423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "683694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "683967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "684240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "684241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "684512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "684785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "685058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "685059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "685331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "685603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "685876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "686149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "686150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "686422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "686694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "686695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "686967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "687240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "687512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "687785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "687786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "688058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "688331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "688603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "688604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "688876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "689149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "689422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "689694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "689967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "689968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "690240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "690512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "690513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "690785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "690786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "691331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "691603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "691876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "692149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "692150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "692422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "692694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "692967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "692968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "693240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "693512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "693785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "694058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "694331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "694332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "694603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "694876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "695149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "695422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "695423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "695694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "695967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "696240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "696512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "696513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "696785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "697058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "697331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "697603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "697604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "697876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "698149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "698422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "698694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "698695": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "699103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "699240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "699376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "699512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "699649": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "699785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "699786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "700058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "700059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "700194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "700331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "700332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "700467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "700603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "700604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "700876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "700877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "701012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "701149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "701285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "701422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "701423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "701694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "701695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "701831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "701967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "702103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "702240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "702241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "702512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "702513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "702649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "702785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "702922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "703058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "703059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "703331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "703332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "703467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "703603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "703604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "703740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "703876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "703877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "704149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "704150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "704422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "704423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "704558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "704694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "704695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "704831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "704967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "704968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "705240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "705241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "705376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "705512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "705649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "705785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "705786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "706058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "706059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "706194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "706331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "706467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "706603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "706604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "706876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "706877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "707012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "707149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "707285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "707422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "707423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "707694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "707695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "707831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "707967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "707968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "708103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "708240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "708241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "708512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "708513": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "708785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "708786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "709058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "709059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "709194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "709331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "709467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "709603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "709604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "709876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "709877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "710012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "710149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "710150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "710285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "710422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "710423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "710694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "710695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "710831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "710967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "711103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "711240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "711241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "711512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "711513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "711649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "711785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "711922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "712058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "712059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "712331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "712332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "712467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "712603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "712740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "712876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "712877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "713149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "713150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "713285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "713422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "713423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "713558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "713694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "713695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "713967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "713968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "714103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "714240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "714376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "714512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "714513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "714785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "714786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "714922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "715058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "715194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "715331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "715332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "715603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "715604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "715740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "715876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "716012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "716149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "716150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "716422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "716423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "716558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "716694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "716695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "716831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "716967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "716968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "717240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "717241": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "717512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "717649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "717785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "717786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "717922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "718058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "718059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "718331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "718332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "718467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "718603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "718740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "718876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "718877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "719149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "719150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "719285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "719422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "719558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "719694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "719695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "719967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "719968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "720103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "720240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "720376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "720512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "720513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "720785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "720786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "720922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "721058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "721059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "721331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "721332": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "721603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "721604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "721876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "721877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "721927": {
                        "selectorsKey": "jurta",
                        "length": 32718
                    },
                    "722149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "722150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "722285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "722422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "722558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "722694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "722695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "722967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "722968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "723103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "723240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "723241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "723376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "723512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "723513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "723785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "723786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "723922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "724058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "724194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "724331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "724332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "724603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "724604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "724740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "724876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "725012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "725149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "725150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "725422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "725423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "725558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "725694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "725831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "725967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "725968": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 545
                    },
                    "726240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "726376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "726512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "726649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "726785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "726786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "727058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "727059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "727194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "727331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "727467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "727603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "727604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "727876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "727877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "728012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "728149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "728285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "728422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "728423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "728694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "728695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "728831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "728967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "729103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "729240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "729241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "729512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "729513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "729649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "729785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "729922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "730058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "730059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "730194": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "730331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "730332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "730603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "730604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "730740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "730876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "730877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "731012": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "731149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "731150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "731422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "731423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "731558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "731694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "731831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "731967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "731968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "732240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "732241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "732376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "732512": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "732649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "732785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "732786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "733058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "733059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "733194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "733331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "733467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "733603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "733604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "733876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "733877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "734012": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "734149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "734558": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "734694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "734695": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "734696": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "736876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "736877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "736878": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "736879": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "737149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "737422": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "737423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "737694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "737695": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "737696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "737967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "737968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "737969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "738240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "738512": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "738513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "738785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "738786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "739058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "739059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "739331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "739332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "739603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "739604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "739876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "739877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "740149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "740150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "740151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "740422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "740694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "740695": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "740696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "740967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "740968": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "740969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "741376": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "741512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "741513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "741785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "742058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "742331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "742332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "742333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "742603": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "742876": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "742877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "743149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "743150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "743422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "743423": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "743424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "743694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "743967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "743968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "744240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "744241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "744512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "744513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "744547": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "744785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "744786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "745058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "745059": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "745060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "745331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "745603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "745604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "745605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "745876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "745877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "745878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "746149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "746150": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "746151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "746422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "746423": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "746424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "746694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "746695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "746967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "747240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "747241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "747512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "747513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "747785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "747786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "748058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "748059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "748331": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "748332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "748603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "748604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "748876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "748877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "748878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "749149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "749150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "749422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "749423": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "749424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "749694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "749695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "749967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "750240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "750241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "750512": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "751058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "751059": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "751060": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "751331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "751332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "751603": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "751604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "751876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "751877": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "752149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "752150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "752151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "752422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "752694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "752695": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "752696": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "752967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "752968": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "752969": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "753240": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "753512": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "753513": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "753785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "753786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "754058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "754059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "754331": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "754332": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "754467": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "754603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "754604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "754876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "754877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "754878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "755034": {
                        "selectorsKey": "nolan",
                        "length": 22386
                    },
                    "755149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "755150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "755151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "755422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "755423": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "755424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "755694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "755967": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "756240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "756241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "756512": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "756513": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "756514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "756785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "756786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "757058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "757059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "757331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "757332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "757603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "757604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "757605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "757876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "758149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "758150": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "758151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "758422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "758423": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "758424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "758831": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "758967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "758968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "759240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "759513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "759785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "759786": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "759787": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "760058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "760331": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "760332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "760603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "760604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "760876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "760877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "760878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "761149": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "761422": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "761423": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "761694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "761695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "761967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "761968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "762001": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 34
                    },
                    "762240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "762241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "762331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "762422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "762513": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "762514": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "762515": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "762785": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "763058": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "763059": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "763194": {
                        "selectorsKey": "midiMiniHat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "763331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "763332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "763603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "763604": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "763605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "763876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "763877": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "763878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "764149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "764150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "764422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "764694": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "764695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "764967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "764968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "765240": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "765241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "765513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "765514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "765785": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "765786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "766058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "766059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "766331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "766332": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "766333": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "766603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "766604": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "766876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "766877": {
                        "selectorsKey": "midiCrashL1",
                        "cssKey": "midiCrashL1",
                        "length": 136
                    },
                    "766878": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "767149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "767150": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "767422": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "767694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "767695": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "767967": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "768513": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "768514": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "768515": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "768785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "768786": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "769058": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "769059": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "769331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "769332": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "769603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "769604": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "769605": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "769876": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "770149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "770150": {
                        "selectorsKey": "midiCrashL2",
                        "cssKey": "midiCrashL2",
                        "length": 136
                    },
                    "770151": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "770422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "770423": {
                        "selectorsKey": "midiCrashR",
                        "cssKey": "midiCrashR",
                        "length": 136
                    },
                    "770424": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "770558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "770694": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "770967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "770968": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "771240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "771241": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "771513": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "771514": {
                        "selectorsKey": "midiHihat",
                        "cssKey": "midiCrashR",
                        "length": 272
                    },
                    "771785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "771922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "772876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "773422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "773558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "773694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "773831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "773967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "774103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "774240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "774376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "774513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "774649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "775058": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "775603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "776422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "776558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "776694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "776831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "776967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "777103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "777240": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "778058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "778194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "778331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "778467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "778603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "778740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "778876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "779013": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "779149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "779285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "779422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "780513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "780649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "780785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "780922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "781058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "781194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "781331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "781467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "781603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "782149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "782285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "782422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "782558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "782694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "782831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "782967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "783103": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "783240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "783376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "783785": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "785149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "785285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "785422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "785558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "785694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "785831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "785967": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "786785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "786922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "787876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "788013": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "788149": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "788694": {
                        "selectorsKey": "midiSplashR",
                        "cssKey": "midiCrashR",
                        "length": 545
                    },
                    "789240": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "789376": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "789513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "789649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "789785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "789922": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "790058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "790194": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "791422": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "791513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "791603": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "791694": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "791785": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "791876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "791967": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "792058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "792149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 90
                    },
                    "793876": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "794013": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "794149": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "794285": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "794422": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "794558": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "794694": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "795513": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "795649": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "796058": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "796126": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "796467": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "796535": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "796603": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "796672": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 68
                    },
                    "796740": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 136
                    },
                    "796808": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 68
                    },
                    "796876": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 136
                    },
                    "993039": {
                        "selectorsKey": "marcel",
                        "length": 33991
                    },
                    "1036907": {
                        "selectorsKey": "marcel",
                        "length": 138490
                    },
                    "1179447": {
                        "selectorsKey": "marcel",
                        "length": 34322
                    },
                    "1545045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1546223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1547295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1547402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1547616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1547830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548580": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548794": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548901": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1549545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1551152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1553080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1554152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1554259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1554473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1554688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555009": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555652": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1556188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1556402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1556723": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1556830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1558223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1558330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1558545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1558759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1559938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561009": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1561545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1563259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563580": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1564866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1566795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1568188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1568402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1568723": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1568830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1570116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1570438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1570545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1570759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1571723": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1572045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1572259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1572473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1572580": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1573116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1573223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1573336": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1573759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1573973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1574402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1574616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1574830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1575046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1575077": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1575473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1575688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1575902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1576330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1576759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1576790": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1577188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1577402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1577830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1578045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1578259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1578473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1578505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1578902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1579116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1579330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1579759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1580188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1580219": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1580616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1580830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581263": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1581473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581480": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1581688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1582759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1583188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1583616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1583622": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1584045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584691": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1584902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584908": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1585116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1585330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1585545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1585759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1585973": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1586188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1586402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1586616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1586830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1587259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1588760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590479": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1590688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1592189": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593580": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593907": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1594009": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1594010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594652": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594977": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595194": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595723": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597335": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1597438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597763": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1597867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597977": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1598081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598410": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1598510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598622": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1598724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599153": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599581": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599796": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1601188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1602546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1603117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1603760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1603974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1604188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1604403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1604831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1605974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1608046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1609403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1610617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1610831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1611260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1612867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1614902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1616260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1617475": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1617688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1617903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1618117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1618546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1618760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1619688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1621760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1623117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1624331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1624546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1624760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1624974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1626546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1626760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1627331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1627653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1627974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1628081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1628188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1628510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1628831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1630117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1630331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1630546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1630760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1631938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1632260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1632688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1632903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1633546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1635046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1635367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1635688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1636867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1638260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1638367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1638474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1638796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1640188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1640831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1642224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1642546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1642974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1643188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1643403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1643617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1643831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1645653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1646403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1646617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1646831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1647260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1649081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1649403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1649831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1650581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651546": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651653": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651867": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1652617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1653117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1653188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1653260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1654117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1654224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1654331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1654438": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1654760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1655938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1657546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1659260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1660867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1662796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1664188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1664403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1664724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1664831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1666117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1666438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1666546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1666760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1668046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1668260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1668474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1669653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1671260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1672974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1674581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1676188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1676510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1676617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1676831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1678117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1679831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1681331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1681974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1682188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1682189": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1682617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1682831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1683933": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1684331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1684546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1684760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1685188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1685616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1685646": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1686046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686690": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1686903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686907": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1687117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1687330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1687546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1687759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1687973": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1688188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1688403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1688617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1688831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689049": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1689260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1690760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692478": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1692688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1694187": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694295": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1694510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1694616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694723": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694830": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694937": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1695046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1696331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1697617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1697688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1697760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1697831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1698046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1698260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1698903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1699117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1699331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1699546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1699974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1701117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1703188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1704546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1705117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1705760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1705974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1706188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1706403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1706617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1706831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1708010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1710046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1711403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1712617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1712831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1713046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1713260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1713688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1713903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1714974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1716903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1718260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1719474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1719688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1719903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1720117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1721688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1721903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1722474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1722795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1723653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1724403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1724617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1724831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1725260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1727081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1727403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1727831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1728688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1730510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1732010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1733938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1734260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1734688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1734903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1735117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1735331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1736188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1736510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1736831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1736938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1737045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1737367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1737688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1738974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1740260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1740367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1740474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1740795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1742188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1742403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1742617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1742831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1744224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1744545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1744974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1745724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1747653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1748403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1748617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1748831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1749045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749153": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749367": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749581": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1770260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1770474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1770903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1771331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1771760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1772188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1772617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1774331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1774760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1775188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1775617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1776045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1776474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1776903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1777331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1777760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1778188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1778617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1779045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1779474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1779903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1780331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1780760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1781188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1781617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1782045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1782474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1782903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1783331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1783760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1783974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1784188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1784617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1785045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1785474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1785903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1786331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1786760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1787188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1787403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1787617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1788045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1788474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1788903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1789331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1789760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1790188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1790617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1790831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1791045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1791474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1791903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1792331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1792760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1793188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1793617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1794045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1794260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1794474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1794903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1795331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1795760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1796188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1796617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1797045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1797474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1797688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1797903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1798331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1798760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1799188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1799617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1800045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1800474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1800903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1801331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1801760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1802188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1802617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1803045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1803474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1803903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804010": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804224": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804438": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804653": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1806688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1806903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1807117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1807331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1808617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1808724": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1808831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1808938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1809045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1809153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1809260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1809331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1809403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1809903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1810224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1810331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1810545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1810760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1812153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1812260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1812474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1812688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1813331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1814188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1814403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1814831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1815903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816974": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1817081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1818045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1818260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1818474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1818688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1819867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819974": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1820081": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1820188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1821045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1822117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1822224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1822438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1822759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1823617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823937": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1825009": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825974": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1826187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1827045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1827260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1827687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1827902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1828653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1829937": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830044": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830794": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1831330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831544": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1832187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1832403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1832974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1948932": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1948969": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1952531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1952981": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1953131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1953431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1953731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954181": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954631": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1955231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1955681": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1955831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1956131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1956431": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1956881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1957331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957481": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957632": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957781": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1958231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1958531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1958831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1959281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1959431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1959731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1960331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1960631": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1960931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1961381": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1961531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1961831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1962131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1962431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1962881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1963031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1963331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1963631": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1964531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964681": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964981": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965431": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1966031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1966059": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1966931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1967381": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1967531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1967831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1968131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1968581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1968731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1969031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1969331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1969631": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1970081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1970231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1970531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1970831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1971281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1971431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1971731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1971881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972032": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972181": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972631": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973156": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1973681": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1973981": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1974131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1974581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1974731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1975031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1975331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1975781": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1975931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1976231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1976531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1976831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1977281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1977431": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1977731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1978031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1978481": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1978631": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1978931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979232": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979381": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980356": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1980581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1981031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    }
                }
            }
        }
    }
}