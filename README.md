![logo](app/assets/images/firefy-logo2.png?raw=true)
# Firefy

[Live Demo](http://firefy-aa.herokuapp.com/#/)

## Overview
Firefy is a clone of Spotify that allows you to listen to music wherever you are, whenever you want and appreciate music in an interactive, and social environment.  

![gif](app/assets/firefy.gif)

## Features:
### User Authentication
Sign up or log in to start listening!
### Create Playlists
Share your music tastes with others. Create and edit your own playlists, upload your own artwork, then share them with others.

### Continuous Song Play
As you navigate Firefy, enjoy seamless music playback via an informative media player with smooth controls.

### Searching
Search for your favorite artists, albums, songs or playlists using a quick, database-querying search bar. 

### Friend Other Users / Follow Playlists
Follow playlists that you like so that you can easily access them all the time.  Friend other users to see what playlists they are following share your followed playlists.

## Notable Features

### "Smart" Song Items
![songcomp](app/assets/images/songcomp_screenshot.png?raw=true)

All song items across all pages can be played, added to playlists, and used to view artist/album pages.  This means you have full control over your playlist playback even when you leave the playlist page.  This feature was rather tricky to implement but by allowing components to manipulate their parent's state via the following code, I was able to accomplish this feature.
```
<div className="songcomponent">
    <img className="lightup" src={window.noteURL} onClick={()=>handlePickSong(song.id)} />
    <div className="playlist-show-song-text">
        <p className={`${flashing} song-component-title`} 
            onClick={() => handlePickSong(song.id)}>
            {song.title}
        </p>
        <div className={`songli-artist-album faded`}>
            <Link to={`/artist/${artist.id}`} className="artist-album-li underlining">{artist.name}</Link>
            {artist.name && album.name ? "  -  " : ""}
            <Link to={`/album/${album.id}`} className="artist-album-li underlining">{album.name}</Link>
        </div>
        <button className="songli-ell lightup" onClick={this.toggleOpenPlaylists}> + </button>
        {/* <button className="songli-ell lightup" onClick={this.handleRemoveFromPlaylist}> - </button> */}
            {popup}
    </div>
</div>
```

### Dynamic and Interactive Media Player
![musicplayer](app/assets/images/musicplayer_screenshot.png?raw=true)

The seek bar and volume bar allow you to easily traverse the duration of a song and manipulate the volume in a dynamic, responsive manner. It was quite challenging, but using a series of event-listeners, "substitute" slider-inputs and a queue slice of state, I was able to implement shuffle/loop/back/forward in a faithfully cloned media player.  Partial code snippet for the time seek bar:
```
document.getElementsByClassName('time-slider-wrapper')[0].addEventListener('mouseenter', () => {
    document.getElementsByClassName('time-slider-wrapper')[0].classList.add("green-bar")
    document.getElementsByClassName('fake-thumb')[0].style.display = "inherit"
})                                        
document.getElementsByClassName('time-slider-wrapper')[0].addEventListener('mouseleave', () => {
    document.getElementsByClassName('time-slider-wrapper')[0].classList.remove("green-bar")
    document.getElementsByClassName('fake-thumb')[0].style.display = "none"
})
this.player.ontimeupdate = e => {
    document.getElementsByClassName('fake-thumb')[0].style.left = `${Math.floor(this.state.currTime * 100 /this.state.duration)}%`;
}  
```    


## Technologies:
* Rails and Postgresql on the backend to store and retrieve data
* React and Redux on the frontend to display and take in data
* Amazon Web Services - S3 for photo and audio file storage 

