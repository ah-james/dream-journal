class DreamDatesController < ApplicationController
    def index
        dates = DreamDate.all
        render json: DreamDateSerializer.new(dates)
    end
end
