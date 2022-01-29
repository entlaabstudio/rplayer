/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

export default class RPlayerConf {
    constructor() {
        
        console.log("[RPlayer]","Config loaded.");

        this.conf = {
            app: {
                version: "0.7.19", // <some platform updates>.<visible or control updates>.<unvisible updates>
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
                        showInfoWindow:   ".rplayerShowInfo"
                    },
                    controls: {
                        volumeFader:      ".rplayerVolFader",
                        seeker:           ".rplayerSeeker",
                        loopAll:          ".rplayerLoopAll",
                        stopAfterTrack:   ".rplayerStopAfterTrack",
                        fullScreen:       ".fullScreen",
                        wordsButton:      "#rplayerWords",
                        minimize:         ".rplayerMinimize",
                        trackInfoButton:  ".trackInfoButton"
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
                mediaSrc: "media/YATSU-2021-Mirrors.m4a?v=202106262139",
                info: {
                    image: "media/images/dreamer_album.jpg",
                    anyHtml: 
                    "<h1>" +
                        "Hello World!" +
                    "</h1>"
                },
                tracks: {
                    0: {
                        timeStart: 0,
                        mediaName: "Mirrors",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
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
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer .",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
                                }
                            },
                        }
                    },
                    2: {
                        timeStart: 538.5,
                        mediaName: "Ornaments",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
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
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
                                }
                            },
                        }
                    },
                    4: {
                        timeStart: 959.5,
                        mediaName: "Spectre",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
                                }
                            },
                        }
                    },
                    5: {
                        timeStart: 1215.5,
                        mediaName: "Bloom",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
                                }
                            },
                        }
                    },
                    6: {
                        timeStart: 1435.4,
                        mediaName: "Ruin",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
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
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
                                }
                            },
                        }
                    },
                    8: {
                        timeStart: 1870,
                        mediaName: "Collapse",
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            composer: "Michal Diviš",
                            year: 2021,
                            anyHtml: {
                                0: {
                                    id: "Social information",
                                    html: "<a href='https://facebook.com/yatsuband'>https://facebook.com/yatsuband</a>",
                                },
                                1: {
                                    id: "Story",
                                    html: 
                                    "Lorem ipsum dolor sit amet consectetuer id tempus Sed hendrerit velit. Natoque sapien In adipiscing tincidunt ante scelerisque quis congue vitae aliquet. Pede consectetuer Maecenas felis est morbi nascetur tortor urna vitae vitae. Suscipit nibh sodales magnis orci leo Morbi metus pede Sed gravida. Tempor nulla semper semper Vestibulum wisi pede at sollicitudin semper gravida. Aenean adipiscing Proin Donec et Aenean tincidunt hendrerit Phasellus nibh quis. Pretium Sed habitasse montes feugiat vitae id semper ac Ut amet. Sit eros et ipsum orci Curabitur tristique eu massa eget neque. Vestibulum Curabitur Curabitur nec et elit Curabitur Curabitur Nulla Curabitur lorem. Vivamus nisl non ante justo elit semper id tortor tincidunt sed. Ipsum porttitor suscipit id orci consectetuer magna ac et consequat lobortis. Ornare ullamcorper mauris sit aliquet semper nisl montes Aenean Vestibulum pellentesque. Enim dictum netus sociis Curabitur diam Sed felis massa quis elit. Faucibus nisl pellentesque Pellentesque nulla odio nec vestibulum leo augue porttitor. Maecenas risus Sed sit quis et Maecenas leo morbi pulvinar Vestibulum. A habitant cursus rutrum vitae tristique habitasse et Donec feugiat semper. Feugiat nec quis enim eu semper at aliquet Curabitur velit non. Ut ut sem et Pellentesque quis nulla lobortis ante mollis.",
                                },
                                2: {
                                    id: "Instruments",
                                    html:
                                    "Guitar: Michal Diviš<br>" +
                                    "Etc: Anything in HTML",
                                },
                                3: {
                                    id: "Music label",
                                    html: "may be Blue note?"
                                }
                            },
                        }
                    }
                }
            },
            slideShow: {
                pictures: {
                    0: {
                        timeStart: 0,
                        mediaName: "Dreamer album",
                        src: "media/images/dreamer_album.jpg"
                    },
                    1: {
                        timeStart: 270,
                        mediaName: "YATSU",
                        src: "media/images/yatsu-logo.jpg"
                    }
                }
            }
        };
        
        // console.log("[RPlayer] Config: ",this.conf);

    }

}