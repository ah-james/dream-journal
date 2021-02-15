class ChangeDreamTypesName < ActiveRecord::Migration[6.1]
  def change
    rename_column :dream_types, :type, :dream_type
  end
end
