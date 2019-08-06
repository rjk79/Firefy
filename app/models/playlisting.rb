class Playlisting < ApplicationRecord
    belongs_to :song
    belongs_to :playlist
end
