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
end

json.albums do
    if @albums
        @albums.each do |album| 
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