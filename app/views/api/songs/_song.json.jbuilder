json.extract! song, :id, :title, :album_id
json.audioUrl  url_for(song.audio_file)
