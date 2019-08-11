    json.extract! playlist, :id, :user_id, :name
    json.song_ids playlist.songs.pluck(:id)

    json.photoUrl playlist.photo.attached? ? url_for(playlist.photo) : ""
