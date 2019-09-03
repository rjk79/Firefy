class AddUniqueness < ActiveRecord::Migration[5.2]
  def change
    add_index :playlistings, [:song_id, :playlist_id], unique: true
  end
end
