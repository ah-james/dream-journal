class RemoveDateIdFromDreamsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :dreams, :dream_date_id, :integer
  end
end
