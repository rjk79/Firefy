json.playlist do
    json.extract! @playlist, :name
end


json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :title, :album_id
        end
    end
end