class DreamDatesController < ApplicationController
    def index
        dream_dates = DreamDate.all
        options = {include: [:dreams]}
        render json: DreamDateSerializer.new(dream_dates, options)
    end
end
