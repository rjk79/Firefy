class Song < ApplicationRecord
    validates :title, presence: true
    
    belongs_to :album
       
    
    has_one :artist,
    through: :album,
    source: :artist
    
    has_many :playlistings
    
    has_one_attached :audio
end
