json.album do  
  json.extract! album, :id, :name, :artist_id
  json.song_ids album.songs.pluck(:id)
  json.photoUrl  url_for(album.photo)
end

