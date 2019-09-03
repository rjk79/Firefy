class Playlisting < ApplicationRecord
    validates_uniqueness_of :song_id, :scope => :playlist_id

    belongs_to :song
    belongs_to :playlist
end
