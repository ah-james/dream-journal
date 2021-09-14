class AddFavoriteToDream < ActiveRecord::Migration[6.1]
  def change
    add_column :dreams, :favorite, :boolean
  end
end
