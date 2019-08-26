![logo](assets/images/firefy-logo.png?raw=true)
# Firefy

[Live Demo](http://firefy-aa.herokuapp.com/#/)

## Overview
Firefy is a clone of Spotify that allows you to listen to music wherever you are, whenever you want and appreciate music in an interactive, and social environment.  

## Features:
### User Authentication
Sign up or log in to start listening!
### Create Playlists
Share your music tastes with others. Create or edit your own playlists so others can view them.

### Continuous Song Play
As you navigate Firefy, enjoy seamless music playback via an informative media player with smooth controls.

### Searching
Search for your favorite artists, albums, songs or playlists using a quick, database-querying search bar. 

### Friend Other Users / Follow Playlists
Follow playlists that you like so that you can easily access them all the time.  Friend other users to see what playlists they are following share your followed playlists.

![gif](assets/images/firefy.gif)
## Notable Features
### "Smart" Song Items
Once selected and playing, songs in playlists, album pages, and artist pages will indicate they're being played regardless of where they are. And they will allow you to go navigate through their lists without you having to go back to their page.  This means you can shuffle, go back, or go forward through your playlist even when you leave the playlist page.  This feature was quite a hurdle but by allowing components to manipulate their parent's state via the following code, I was able to accomplish this feature.
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
The seek bar and volume allows you to easily traverse the duration of a song and manipulate the volume in a dynamic, responsive manner. It was quite challenging to create a sleek, fully-customized seek and volume bar. But using a series of event-listeners and "substitute" slider-input elements, I was able to successfully create the seek bar.  Partial code snippet for the time seek bar:
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

