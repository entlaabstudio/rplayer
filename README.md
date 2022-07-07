# RPlayer by Robert Rajs (MIT)

A player that supports full decentralization. Ready for use on Web3 networks such as IPFS. It arose from the desire for a player that will respect the listening to music albums, not just individual songs, to which buffering is subject.

I would especially like to thank the [artist YATSU](https://yatsuband.bandcamp.com/) ([or Github link](https://github.com/michaldivis)), who provided his inspiring audiovisual material for this player. During the development of RPlayer, I listened to the album Dreamer perhaps 100 times and I still enjoy it.
  
The main goal of this project is to free the distribution of music from large corporations, increase its quality and:
  
* ensure undisturbed and continuous listening to a music album, as on a CD (or in higher sound quality)
* provide plenty of information and available materials, as on the CD cover
* offering graphic materials of a music album without disturbing elements
* display lyrics while playing songs (can be turned off)
* support for bluetooth, background running and integration into the client's operating system, like a regular music player in the form of a standalone application
* an environment in which downloadable materials can be easily downloaded, including detailed settings for modifying the output archive and the size of mp3 files, depending on whether images are imported into them or not
* prevent loss or violation / censorship of the original form of shared data as on a CD (loss of a CD is in this case equivalent to loss of a link to RPlayer)
* storing all the content of the application and the attached media in the client's environment, so that each subsequent download is maximally supported by the cache of the client's Internet browser
* the most easy way to share the player with a QR code
* support for translating the entire environment into another language
* the ability to start in full screen mode and prevent the operating system from going to sleep if the user does not do so (must be supported by a web browser)
* slideshow, regardless of which song is currently playing, which allows you to create a presentation of graphic materials while playing a single song
* maximum power saving when the player is running in the background (inactive tab or display off or a minimized window, etc.)
* multi-threaded solution if the player is running in focus
* download manager, providing the option of compiling an archive for download exactly according to the user's wishes
* user choice whether to include graphic information (in full quality) in mp3 files during download and provide them with icons, thereby user affects files size and their compatibility
* ID3 tags of all kinds are added to mp3 files (intended for download) by the player
* the player can map and dynamically change its design via CSS commands depending on the time of the album, being very performance oriented and running a separate thread for each selector

**When creating a fork, keep the following in mind:** IPFS and Web3 are generally a network on which resources are shared across applications. Keeping the files (including third-party components) in their original forms will ensure a connection to a wider network of ready-made players. This is also the reason why I also share the "vendor" directory here. By the way, Ideally, I recommend creating a working player only by modifying the rplayer.config.js file. This file contains (should contain) everything you need. The fewer files change, the better the player will behave in a decentralized network.

## Principles:

* always use AAC as the audio source, otherwise the player will not work well
* For RPlayer download manager use the mp3 format without ID3 tags as downloads

## Tips:

* by using the {base_url} tag anywhere in the texts, you get the full address of RPlayer, which is unknown on Web3 in advance

## Known issues:

**Booting does not work on a full IPFS node of Opera**. I think the problem is on the browser side, because it does not have an overview of the sizes of loaded files, statuses (everything is automatically 200) and the amount of data already loaded. In addition, it constantly reads data that should have been cached. So even in my opinion, the cache does not work as it should. The implementation of IPFS in this browser does not seem to be complete, and I hope it is only a matter of time before it fixes itself. Sorry for troubles. I do not recommend a full Opera node.

**Firefox and Safari** do not support all Bluetooth commands and do not support preventing the operating system from going to sleep. It's probably only a matter of time before it settles down.
