class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :dream_date_id, :dream_type_id
  belongs_to :dream_date
  belongs_to :dream_type
end
