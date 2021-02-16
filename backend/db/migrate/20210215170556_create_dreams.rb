class CreateDreams < ActiveRecord::Migration[6.1]
  def change
    create_table :dreams do |t|
      t.string :title
      t.text :description
      t.references :dream_types, foreign_key: true
      t.references :dream_dates, foreign_key: true

      t.timestamps
    end
  end
end
