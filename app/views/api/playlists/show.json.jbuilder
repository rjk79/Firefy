json.playlist do
    json.extract! @playlist, :id, :name
    json.song_ids @playlist.songs.pluck(:id)
end


json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :title, :album_id
        end
    end
end

# pluck is opposite of set in terms of interpol