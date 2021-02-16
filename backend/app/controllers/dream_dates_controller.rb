class DreamDatesController < ApplicationController
    def index
        dream_dates = DreamDate.all
        render json: DreamDateSerializer.new(dream_dates)
    end
end
