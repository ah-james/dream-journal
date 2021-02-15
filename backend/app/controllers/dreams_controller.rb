class DreamsController < ApplicationController
    def index
        dreams = Dream.all
        render json: dreams
    end

    def show
        dream = Dream.find_by(id: params[:id])
        options = {
            include: [:dream_types, :dream_dates]
        }
        if dream
            render json: DreamSerializer.new(dream, options)
        else
            render json: { message: 'dream not found' }
        end
    end

    def create

    end
end
