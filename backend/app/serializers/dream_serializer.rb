class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :date_id, :category_id
  belongs_to :date
  belongs_to :category
end
