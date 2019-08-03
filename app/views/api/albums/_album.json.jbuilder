json.album do  
  json.extract! album, :id, :name, :artist_id
  json.song_ids album.songs.pluck(:id)
end


json.songs do
    album.songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
        end
    end
end
# pluck is opposite of set in terms of interpol

json.artist do
    album.artist do
        json.partial! 'api/artists/artist', artist: artist
    end
end