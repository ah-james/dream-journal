class CreateDreamTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :dream_types do |t|
      t.string :type
      t.references :dream, foreign_key: true

      t.timestamps
    end
  end
end
