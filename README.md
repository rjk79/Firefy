![logo](app/assets/images/firefy-logo2.png?raw=true)
# Firefy

## Overview
Firefy is a clone of Spotify that allows you to listen to music whenever you want on an interactive, and social platform.  

![gif](app/assets/firefy.gif)


## Technologies:
* Rails and Postgresql on the backend to store and retrieve data
* React and Redux on the frontend to display and take in data
* Amazon Web Services - S3 for photo and audio file storage and uploading
* HTML5 Audio Elements for music playback


## Features:
### Authenticate 
Sign up or log in to start listening!
### Create Playlists
Share your music tastes with others. Create and edit your own playlists, upload your own artwork, then share them with others.

### Enjoy Continuous Song Play
As you navigate Firefy, enjoy seamless music playback via an informative media player with smooth controls.

### Search
Search for your favorite artists, albums, songs or playlists using a quick, backend-filtering search bar. 

### Friend Others / Follow Playlists / Favorite Songs
Follow playlists that you like so that you can easily access them all the time.  Friend other users to see what playlists they are following share your followed playlists.

## Notable Features

### Universal Song Items
![songcomp](app/assets/images/songcomp_screenshot.png?raw=true)

All song items across all pages can be played, added to playlists, and used to view artist/album pages.  This means you have full control over your playlist playback even when you leave the playlist page.  This feature was rather tricky to implement but by allowing components to manipulate their parent's state, I was able to accomplish this feature.

### Dynamic and Interactive Media Player
![musicplayer](app/assets/images/musicplayer_screenshot.png?raw=true)

The seek bar and volume bar allow you to easily traverse the duration of a song and manipulate the volume in a dynamic, responsive manner. It was quite challenging, but using a series of event-listeners, "substitute" slider-inputs and a queue slice of state, I was able to implement shuffle/loop/back/forward in a faithfully cloned media player.    
