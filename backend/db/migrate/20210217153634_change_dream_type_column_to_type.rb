class ChangeDreamTypeColumnToType < ActiveRecord::Migration[6.1]
  def change
    rename_column :types, :dream_type, :type
  end
end
