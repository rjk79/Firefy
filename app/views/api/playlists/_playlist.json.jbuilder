    json.extract! @playlist, :id, :user_id, :name
    json.song_ids @playlist.songs.pluck(:id)
    # json.photo_url url_for(playlist.photo) 
