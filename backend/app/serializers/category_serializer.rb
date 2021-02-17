class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :category
  has_many :dreams
end
