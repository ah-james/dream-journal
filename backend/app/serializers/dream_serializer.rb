class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  belongs_to :dream_date
  belongs_to :dream_type
end
