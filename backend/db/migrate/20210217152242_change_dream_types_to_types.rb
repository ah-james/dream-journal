class ChangeDreamTypesToTypes < ActiveRecord::Migration[6.1]
  def change
    rename_table :dream_types, :types
  end
end
