class AddUniqueness2 < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:user_id, :song_id], unique: true
    add_index :follows, [:user_id, :playlist_id], unique: true
  end
end
