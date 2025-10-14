/**
 * @file Part of configuration for conf file of RPlayer web application (configVersion: 3)
 * @copyright Robert Rajs 2023
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2023 Robert Rajs
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

export default class RPlayerConfTrackHtml {
    constructor() {

        console.log("[RPlayer]","Config part TrackHtml loaded.");
        
        this.conf = {
            0: " \
                <p>All drums are programmed. Here's a list of all the sample libraries / samples used for different kit pieces:<br> \
                </p> \
                <div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended): \
                </div> \
                <ul> \
                    <li>GGD OKW Modern Fusion - the main kick</li> \
                    <li>GGD Modern &amp; Massive - 26x14 Yamaha kick</li> \
                    <li>custom one shot kick sample</li> \
                </ul> \
                <div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended): \
                </div> \
                <ul> \
                    <li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li> \
                    <li>GGD P4 - The VK snare</li> \
                    <li>GGD OKW Metal - the main snare (only the room mics)</li> \
                </ul> \
                <div style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Toms:</div> \
                <ul> \
                    <li>GGD P4 toms</li> \
                </ul> \
                <div style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Cymbals:</div> \
                <ul> \
                    <li>GGD P4 cymbals</li> \
                </ul> \
            ",
            1: "\
                <p>All the bass is programmed. All of the bass tracks on the album were done with Sumbission Audio's DjinnBass \
                    sample library. Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br> \
                </p> \
            ",
            2: "\
                <p>All of the guitar tracks on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way \
                    of saying \"a table and an audio interface in my living room\").</p><strong>Gear used for guitar \
                    tracking:</strong><br> \
                <ul> \
                    <li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li> \
                    <li>Focusrite Scarlett Solo Gen 3 audio interface</li> \
                    <li>Radial PRO48 active DI box</li> \
                    <li>Daddario EXL157 strings</li> \
                    <li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\") \
                    </li> \
                    <li>Janicek Picks Jazz B 0.88mm guitar picks</li> \
                </ul> \
                <h4>Tones</h4> \
                <table style=\"border-collapse: collapse;\"> \
                    <tbody> \
                        <tr> \
                            <td><strong>Rhytms: </strong></td> \
                            <td>NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)</td> \
                        </tr> \
                        <tr> \
                            <td><strong>Leads: </strong></td> \
                            <td>NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)</td> \
                        </tr> \
                        <tr> \
                            <td><strong>Cleans: </strong></td> \
                            <td>NeuralDSP Archetype Plini (cab sim turned off)</td> \
                        </tr> \
                    </tbody> \
                </table> \
            ",
            3: "\
                <p>All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries \
                    used:</p> \
                <ul> \
                    <li>Fracture Sounds' Woodchester Piano (kontakt library)</li> \
                    <li>u-he Diva (synth plugin)</li> \
                    <li>Best Service's Emotional Cello (kontakt library)</li> \
                    <li>Heavyocity's Gravity (kontakt library)</li> \
                    <li>Heavyocity's Mosaic Tape (kontakt library)</li> \
                    <li>Finishing Move's Posthuman (kontakt library)</li> \
                </ul> \
            "
        }
    }
}