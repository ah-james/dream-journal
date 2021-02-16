class DreamTypeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :dream_type
  has_many :dreams
end
