/**
 * @file Slideshow configuration for conf file of RPlayer web application (configVersion: 3)
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

export default class RPlayerConfSlideshow {

    constructor() {

        console.log("[RPlayer]","Config part slideshow loaded.");

        this.conf = {
            slideShow: {
                pictures: {
                    // Mirrors
                    0: {
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    // Dreamer
                    270000: {
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Ornaments
                    538500: {
                        mediaName: "Ornaments_w_vocals",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    // Labyrinth
                    786600: {
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    // Spectre
                    959500: {
                        mediaName: "Spectre",
                        src: "media/images/spectre.jpg"
                    },
                    964400: {
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    992650: {
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    1025276: {
                        mediaName: "Ornaments",
                        src: "media/images/ornaments.jpg"
                    },
                    1035846: {
                        mediaName: "Kraken",
                        src: "media/images/kraken.jpg"
                    },
                    1047635: {
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    1060993: {
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    1104890: {
                        mediaName: "Spectre",
                        src: "media/images/spectre.jpg"
                    },
                    1129367: {
                        mediaName: "Ornaments_w_vocals",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    1140658: {
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    1162594: {
                        mediaName: "Kraken",
                        src: "media/images/kraken.jpg"
                    },
                    1179314: {
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    1201160: {
                        mediaName: "Spectre",
                        src: "media/images/spectre.jpg"
                    },
                    // Bloom
                    1215000: {
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Ruin
                    1435400: {
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // World Eater
                    1543500: {
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Collapse
                    1870000: {
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                }
            }
        }   
    }
}