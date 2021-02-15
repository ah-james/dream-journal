class DreamDatesController < ApplicationController
    def index
        dream_dates = DreamDate.all
        render json: dream_dates
    end
end
