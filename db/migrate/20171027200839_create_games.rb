class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.string :publisher
      t.text :description
      t.integer :max_players

      t.timestamps
    end
  end
end
