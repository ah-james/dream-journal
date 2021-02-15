class CreateDreamDates < ActiveRecord::Migration[6.1]
  def change
    create_table :dream_dates do |t|
      t.string :date
      t.references :dream, foreign_key: true

      t.timestamps
    end
  end
end
