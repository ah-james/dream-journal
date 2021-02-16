class DreamDateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date
  has_many :dreams
end
