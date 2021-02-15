class DreamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  has_many :dream_dates
  has_many :dream_types
end
