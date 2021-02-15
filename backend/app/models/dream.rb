class Dream < ApplicationRecord
    has_many: dream_dates
    has_many: dream_types
end
