class Playlist < ApplicationRecord
    validates :name, presence: true

    belongs_to :user

    has_many :follows, dependent: :destroy

    has_many :playlistings, dependent: :destroy

    has_many :songs,
        through: :playlistings,
        source: :song
    
    has_many :albums,
      through: :songs,
      source: :album

    has_many :artists,
        through: :songs,
        source: :artist

        

    has_one_attached :photo

end
