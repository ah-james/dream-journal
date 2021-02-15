class DreamsController < ApplicationController
    def index
        dreams = Dream.all
        render json: dreams
    end

    def show
        dream = Dream.find_by(id: params[:id])
        if dream
            render json: dream, include: [:dream_dates, :dream_types]
        else
            render json: { message: 'dream not found' }
        end
    end

    def create

    end
end
