class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
    add_index :follows, :user_id
    add_index :follows, :playlist_id
     
  end
end
