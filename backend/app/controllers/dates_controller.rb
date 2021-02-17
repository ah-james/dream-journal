class DatesController < ApplicationController
    def index
        dates = Date.all
        render json: DateSerializer.new(dates)
    end
end
