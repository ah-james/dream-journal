class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :date, :category_id
  belongs_to :category
end
