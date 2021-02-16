class Dream < ApplicationRecord
    belongs_to :dream_date
    belongs_to :dream_type

    def dream_type
        self.dream_types.dream_type
    end

    def dream_date
        self.dream_dates.date
    end
end
