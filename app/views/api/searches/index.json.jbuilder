json.songs do
    if @songs
        @songs.each do |song| 
            json.set! song.id do
                json.partial! 'api/songs/song', song: song
            end
        end
    end
end

json.artists do
    if @artists
        @artists.each do |artist| 
            json.set! artist.id do
                json.partial! 'api/artists/artist', artist: artist
            end
        end
    end
    if @songs
        @songs.each do |song|
        artist = song.artist
        json.set! artist.id do
            json.partial! 'api/artists/artist', artist: artist
        end
    end
    end
end

json.albums do
    if @albums
        @albums.each do |album| 
            json.set! album.id do
                json.partial! 'api/albums/album', album: album
            end
        end
    end
    if @songs
        @songs.each do |song|
            album = song.album
            json.set! album.id do
                json.partial! 'api/albums/album', album: album
            end
        end
    end
end

json.playlists do
    
    if @playlists
        @playlists.each do |playlist| 
            json.set! playlist.id do
                json.partial! 'api/playlists/playlist', playlist: playlist
            end
        end
    end
end



# have separate one for each model

json.artistIds @artists.pluck(:id)

json.albumIds @albums.pluck(:id)

json.songIds @songs.pluck(:id)

json.playlistIds @playlists.pluck(:id)



