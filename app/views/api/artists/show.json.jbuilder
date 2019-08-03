json.artist do
    json.extract! @artist, :id, :name
    json.song_ids @artist.albums.pluck(:id)
end


json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id
            # json.artist song.artist.name
            # json.album song.album.name
        end
    end
end
# pluck is opposite of set in terms of interpol


json.albums do
    @playlist.albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :name, :artist_id
      end
    end
end


json.artists do
    @playlist.artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name
        end
    end
end

