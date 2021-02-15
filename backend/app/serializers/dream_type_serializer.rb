class DreamTypeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :dream_type
  belongs_to :dream
end
