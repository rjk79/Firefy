  json.extract! album, :id, :name, :artist_id, :song_ids
  json.photoUrl  url_for(album.photo)


