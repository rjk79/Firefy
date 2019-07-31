class Song < ApplicationRecord
    validates :title, presence: true
    
    belongs_to :album
       
    has_many :playlistings
end
