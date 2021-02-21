class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :category_id
  belongs_to :category
end
