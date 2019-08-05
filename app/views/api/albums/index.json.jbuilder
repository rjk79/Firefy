 json.albums do
   @albums.each do |album| 
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
        end
    end
end


json.artists do
    @albums.each do |album|
        json.set!  album.artist.id do
            json.partial! 'api/artists/artist', artist: album.artist
        end
    end
end