json.artist do
    json.extract! artist, :id, :name
    json.album_ids artist.albums.pluck(:id)
    json.photoUrl url_for(artist.photo) 
end
