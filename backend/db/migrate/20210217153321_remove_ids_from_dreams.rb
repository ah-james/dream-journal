class RemoveIdsFromDreams < ActiveRecord::Migration[6.1]
  def change
    remove_column :dreams, :dream_date_id, :integer
    remove_column :dreams, :dream_type_id, :integer
    add_column :dreams, :date_id, :integer
    add_column :dreams, :type_id, :integer
  end
end
