class ChangeDreamDatesToDates < ActiveRecord::Migration[6.1]
  def change
    rename_table :dream_dates, :dates
  end
end
