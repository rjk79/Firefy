class Playlist < ApplicationRecord
    validates :name, presence: true

    belongs_to :user

    has_many :follows

    has_many :playlistings

    has_many :songs,
        through: :playlistings,
        source: :song

end
