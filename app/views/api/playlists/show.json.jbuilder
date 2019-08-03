# done
json.playlist do
    json.extract! @playlist, :id, :user_id, :name
    json.song_ids @playlist.songs.pluck(:id)
end


json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
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
        json.song_ids album.songs.pluck(:id)
      end
    end
end


json.artists do
    @playlist.artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name
            json.album_ids artist.albums.pluck(:id)
        end
    end
end

