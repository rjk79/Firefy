json.songs do
    @songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
        
        end
    end
end

json.artists do 
    @songs.each do |song|
        artist = song.artist
        json.set! artist.id do
            json.partial! 'api/artists/artist', artist: artist
        end
    end
end

json.albums do
    @songs.each do |song|
        album = song.album
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
        end
    end
end
    
    

