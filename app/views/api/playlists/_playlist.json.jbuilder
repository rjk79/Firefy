json.extract! @playlist, :id, :user_id, :name
json.song_ids @playlist.songs.pluck(:id)