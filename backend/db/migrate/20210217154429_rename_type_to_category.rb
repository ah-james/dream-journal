class RenameTypeToCategory < ActiveRecord::Migration[6.1]
  def change
    rename_column :types, :type, :category
    rename_table :types, :categories
    rename_column :dreams, :type_id, :category_id
  end
end
