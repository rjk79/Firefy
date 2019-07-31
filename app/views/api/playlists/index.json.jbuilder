# works
@playlists.each do |playlist| 
    json.set! playlist.id do
        json.extract! playlist, :name
    end
end
