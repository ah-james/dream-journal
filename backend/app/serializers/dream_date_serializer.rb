class DreamDateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date
  belongs_to :dream
end
