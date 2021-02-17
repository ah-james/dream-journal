class RenamingDateToDreamDate < ActiveRecord::Migration[6.1]
  def change
    rename_table :dates, :dream_dates
    rename_column :dreams, :date_id, :dream_date_id
  end
end
