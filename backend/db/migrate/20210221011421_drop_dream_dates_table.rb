class DropDreamDatesTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :dream_dates
    add_column :dreams, :date, :string

  end
end
