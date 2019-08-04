class Album < ApplicationRecord
    validates :name, presence: true

    belongs_to :artist

    has_many :songs

    has_one_attached :photo

end

