json.extract! artist, :id, :name
json.album_ids artist.albums.pluck(:id)