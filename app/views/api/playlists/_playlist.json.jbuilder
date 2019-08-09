    json.extract! playlist, :id, :user_id, :name
    json.song_ids playlist.songs.pluck(:id)
    json.photoUrl url_for(playlist.photo) 
