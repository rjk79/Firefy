# works
@playlists.each do |playlist| 
    json.set! playlist.id do
        json.extract! playlist, :id, :user_id, :name
        json.song_ids playlist.songs.pluck(:id)
    end
end

# add users
