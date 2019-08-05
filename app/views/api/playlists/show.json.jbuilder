# done
    json.extract! @playlist, :id, :user_id, :name
    json.song_ids @playlist.songs.pluck(:id)

# add users -- owners of playlists

json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
            # json.artist song.artist.name
            # json.album song.album.name
        end
    end
end
# pluck is opposite of set in terms of interpol


json.albums do
    @playlist.albums.each do |album|
      json.set! album.id do
        json.partial! 'api/albums/album', album: album
      end
    end
end


json.artists do
    @playlist.artists.each do |artist|
        json.set! artist.id do
            json.partial! 'api/artists/artist', artist: artist
        end
    end
end



