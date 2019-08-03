class Album < ApplicationRecord
    validates :name, presence: true

    belongs_to :artist

    has_many :songs

end

