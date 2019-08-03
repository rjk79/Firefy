class Playlist < ApplicationRecord
    validates :name, presence: true

    belongs_to :user

    has_many :follows

    has_many :playlistings

    has_many :songs,
        through: :playlistings,
        source: :song
    
    has_many :albums,
      through: :songs,
      source: :album

    has_many :artists,
        through: :songs,
        source: :artist

end
