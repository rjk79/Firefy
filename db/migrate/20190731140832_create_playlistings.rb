class CreatePlaylistings < ActiveRecord::Migration[5.2]
  def change
    create_table :playlistings do |t|
      t.integer :song_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
    add_index :playlistings, :song_id
    add_index :playlistings, :playlist_id
  
  end
end
