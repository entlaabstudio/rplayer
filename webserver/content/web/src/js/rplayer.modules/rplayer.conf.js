/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 * 
 * Don´t use apostrophe in HTML. You just put \".
 */

export default class RPlayerConf {
    constructor() {
        
        console.log("[RPlayer]","Config loaded.");

        this.conf = {
            app: {
                name: "RPlayer",
                version: "0.17.31", // <some platform updates>.<visible or control updates>.<unvisible updates>
                date:    "2022",
                preferences: {
                    transport: {
                        stepTime: .5 // [s]
                    },
                    words: {
                        timeToConsole: false,
                        titleMaxTime:  7000 // [ms]
                    }
                },
                htmlSelectors: {
                    mainWindow: "#rplayer",           // recommended ID
                    info: {
                        currentTime:      ".rplayerCurTime",
                        lengthTime:       ".rplayerLenTime",
                        appVersion:       ".rPlayerVersion",
                        appDate:          ".rPlayerVersionDate",
                        currentTrackName: ".rplayerCurTrackName",
                        albumDuration:    ".rPlayerAlbumDuration",
                        bufferLoading:    ".rplayerBufferShowLoading",
                        bufferCondition:  ".rplayerBufferCondition",
                        transport:        ".rplayerTransport",
                        playlistOneTrack: ".rplayerOneTrack",
                        playlistBox:      ".rplayerTrackList",
                        showInfoWindow:   ".rplayerShowInfo",
                        albumComposer:    ".rplayerAuthor",
                        albumName:        ".rplayerAlbumName",
                        albumYear:        ".rplayerAlbumYear"
                    },
                    controls: {
                        volumeFader:      ".rplayerVolFader",
                        seeker:           ".rplayerSeeker",
                        loopAll:          ".rplayerLoopAll",
                        stopAfterTrack:   ".rplayerStopAfterTrack",
                        fullScreen:       ".fullScreen",
                        wordsButton:      "#rplayerWords",
                        minimize:         ".rplayerMinimize",
                        trackInfoButton:  ".trackInfoButton",
                        helpButton:       ".helpButton"
                    }
                },
                modules: {
                    RPlayerVisual: {
                        scriptFile: "./rplayer.visual.js"
                    },
                    RPlayerInfo: {
                        scriptFile: "./rplayer.info.js"
                    }
                },
                windows: {
                    showInfo: {
                        htmlSelector: ".rplayerShowInfo",
                        htmlTag:      "div",
                        css: {
                            init: {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "10em",
                                height: "10em",
                                border: ".1em solid green",
                                backgroundColor: "rgba(255,255,255,1)"
                            },
                            show: {
                                opacity: 1
                            },
                            hide: {
                                opacity: 0
                            }
                        }
                    }
                }
            },
            album: {
                mediaSrc: "media/YATSU-2021-Mirrors-202202110022.m4a?v=202106262139",
                info: {
                    image: "media/images/dreamer_album.jpg",
                    name: "Dreamer",
                    year: "2021",
                    composer: "YATSU band",
                    anyHtml: 
                    "<p style='margin-top: 1em;'>" +
                        "Thank you for purchasing the \"Dreamer\" Producer Pack, you are an awesome human being! " +
                        "Here's some useful information about the album and what gear was used to make it." +
                    "</p>"
                },
                tracks: {
                    0: {
                        timeStart: 0,
                        mediaName: "Mirrors",
                        info: {
                            image: "media/images/mirrors.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "110BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        },
                    },
                    1: {
                        timeStart: 270,
                        mediaName: "Dreamer",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "120BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    2: {
                        timeStart: 538.5,
                        mediaName: "Ornaments",
                        info: {
                            image: "media/images/ornaments_w_vocals.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Vocal",
                                    html: 
                                    "<a href=\"https://instagram.com/nolanmateer\" target=\"_blank\">Nolan Mateer<i class=\"instagram icon\" style=\"display: inline-block;\"></i></a><br><br>" +
                                    "<img src=\"data:image/jpeg;base64,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\">"
                                },
                                1: {
                                    id: "Song tempo",
                                    html: "120BPM",
                                },
                                2: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                3: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                4: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                5: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        },
                        words: {
                            18545: "Dark shadows of the past", // ID is time [ms]
                            21160: "Haunting my mind, haunting my mind",
                            26600: "Stealing peace throughout the day",
                            29909: "At night the tormenting kind<br>",
                            35520: "Playing scenes of guilt and shame",
                            39952: "Over and over again",
                            44741: "I cannot escape,",
                            48243: "Nightmares will never end<br>",
                            53708: "Alone I found the way",
                            57798: "My soul could be released",
                            62097: "From my darkest days<br>",
                            69908: "Alone I found the way",
                            73878: "My soul could be released",
                            78051: "From my darkest days<br>",
                            88531: "My redeemer has rescued me",
                            96200: "I am a slave to no one<br>",
                            117592: "Dark shadows of the past",
                            122003: "Haunting my mind",
                            125483: "Dark shadows of the past",
                            129491: "Stealing peace throughout the day",
                            133491: "Dark shadows of the past",
                            137901: "Haunting my mind",
                            141469: "It distracts in the day",
                            145520: "At night it torments<br>",
                            149531: "Playing scenes of guilt and shame",
                            153989: "Over and over again",
                            158800: "I can't run away,",
                            162248: "There is a darkness in day<br>",
                            165501: "Playing scenes of guilt and shame",
                            169971: "Over and over again",
                            174771: "I cannot escape,",
                            178291: "Nightmares will never end<br>",
                            183752: "Alone I found the way",
                            187803: "My soul could be released",
                            191973: "From my darkest days<br>",
                            199715: "Alone I found the way",
                            203805: "My soul could be released",
                            208013: "From my darkest days<br>",
                            216560: "No more shadows of the past",
                            220608: "No more haunting my mind",
                            226520: "No more enemy of peace",
                            232632: "I am finally free",
                        }
                    },
                    3: {
                        timeStart: 786.6,
                        mediaName: "Labyrinth",
                        info: {
                            image: "media/images/labyrinth.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "175BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    4: {
                        timeStart: 959.5,
                        mediaName: "Spectre",
                        info: {
                            image: "media/images/djinn.png",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                // 0: {
                                //     id: "Vocal",
                                //     html: 
                                //     "<a href=\"https://instagram.com/nolanmateer\" target=\"_blank\">Nolan Mateer<i class=\"instagram icon\" style=\"display: inline-block;\"></i></a><br><br>" +
                                //     "<img src=\"data:image/jpeg;base64,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\">"
                                // },
                                1: {
                                    id: "Song tempo",
                                    html: "175BPM",
                                },
                                2: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                3: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                4: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                5: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        },
                        words: {
                            33599: "If I could turn back time",
                            36666: "Would I?",
                            39000: "If I have done it differently",
                            42100: "Should I?<br>",
                            44500: "How many steps does it take to reach the abyss",
                            49900: "Even when the downfall is so crystal clear",
                            55500: "We could have chosen a different path",
                            60800: "So why the hell haven´t we?<br>",
                            77777: "All those pictures on the wall",
                            80390: "Maybe I could go back there",
                            83160: "And to the other ones that we never used",
                            88800: "Would it all be different now?",
                            91500: "Would you pretend to care?",
                            94100: "If I was but a specter of my own self?",
                            99000: "(specter of my own self)<br>",
                            102000: "If I could turn back time",
                            105000: "Would you choose something different?",
                            110250: "If I could turn back time",
                            113150: "How could I talk you out of your own mind?",
                            118500: "I tried to reach you so many times<br>",
                            124000: "But you were always so far away, by my side",
                            129590: "Some random day, I decide",
                            135300: "that no more I would try",
                            140774: "And you´ve coped with the void",
                            146500: "...as if it was mine<br>",
                            149100: "All those memories so gray",
                            154448: "Are now painted in the color of pain",
                            160030: "Have I deceived you, have you deceived me?<br>",
                            173795: "Have I deceived you?",
                            181990: "Have you deceived me?",
                            190158: "Have I deceived you?",
                            198347: "Life seems so strange",
                            209600: "Life is so strange<br>",
                            220300: "All those pictures on the wall",
                            222900: "Maybe I could go back there",
                            225990: "And to the other ones that we never used",
                            231360: "Would it all be different now?",
                            233973: "Would you pretend to care?",
                            236900: "If I was but a specter of my own self?<br>",
                            242400: "Would it all be different now?",
                            247800: "Would you pretend to care?"
                        }
                    },
                    5: {
                        timeStart: 1215.5,
                        mediaName: "Bloom",
                        info: {
                            image: "media/images/ornaments_w_vocals.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "135BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    6: {
                        timeStart: 1435.4,
                        mediaName: "Ruin",
                        info: {
                            image: "media/images/mirrors.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "135BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    7: {
                        timeStart: 1543.5,
                        mediaName: "World Eater",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "140BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    8: {
                        timeStart: 1870,
                        mediaName: "Collapse",
                        info: {
                            image: "media/images/mirrors.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "210BPM",
                                },
                                1: {
                                    id: "Drums",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<strong>Kick (blended):</strong><br>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<strong>Snare (blended):</strong><br>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    }
                }
            },
            slideShow: {
                pictures: {
                    // Mirrors
                    0: {
                        timeStart: 0,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    // Dreamer
                    1: {
                        timeStart: 270000,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Ornaments
                    2: {
                        timeStart: 538500,
                        mediaName: "Ornaments",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    // Labyrinth
                    3: {
                        timeStart: 786600,
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    // Spectre
                    4: {
                        timeStart: 959500,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    5: {
                        timeStart: 964400,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    9: {
                        timeStart: 992650,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    10: {
                        timeStart: 1025276,
                        mediaName: "Ornaments",
                        src: "media/images/ornaments.jpg"
                    },
                    11: {
                        timeStart: 1035846,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    12: {
                        timeStart: 1047635,
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    13: {
                        timeStart: 1060993,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    14: {
                        timeStart: 1104890,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    15: {
                        timeStart: 1129367,
                        mediaName: "Ornaments",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    16: {
                        timeStart: 1140658,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    17: {
                        timeStart: 1162594,
                        mediaName: "Ornaments",
                        src: "media/images/ornaments.jpg"
                    },
                    18: {
                        timeStart: 1179314,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    19: {
                        timeStart: 1201160,
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    // Bloom
                    20: {
                        timeStart: 1215000,
                        mediaName: "Ornaments",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    // Ruin
                    21: {
                        timeStart: 1435400,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    // World Eater
                    22: {
                        timeStart: 1543500,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Collapse
                    23: {
                        timeStart: 1870000,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                }
            }
        };
        
        console.log("[RPlayer] Config: ",this.conf);

    }

}