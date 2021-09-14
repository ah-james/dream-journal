class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :date, :category_id, :favorite
  belongs_to :category
end
