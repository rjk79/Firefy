json.artist do
    json.extract! artist, :id, :name
    json.album_ids artist.albums.pluck(:id)
    json.photo_url url_for(artist.photo) 
end
