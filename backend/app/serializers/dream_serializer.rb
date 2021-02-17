class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :dream_date_id, :category_id
  belongs_to :dream_date
  belongs_to :category
end
