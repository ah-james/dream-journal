class DreamsController < ApplicationController
    def index
        dreams = Dream.all
        render json: DreamSerializer.new(dreams)
    end

    def show
        dream = Dream.find_by(id: params[:id])
        if dream
            render json: DreamSerializer.new(dream)
        else
            render json: { message: 'dream not found' }
        end
    end

    def create
        dream = Dream.new(dream_params)
        if dream.save
            render json: DreamSerializer.new(dream, include: [:category])
        else
            render json: {error: "dream didn't save"}
        end
    end

    def update
        dream = Dream.find_by(id: params[:id])
        if dream.update(dream_params)
            render json: DreamSerializer.new(dream, include: [:category])
        else
            render json: {error: "dream didn't save"}
        end
    end

    def destroy
        dream = Dream.find_by(id: params[:id])
        dream.destroy
        render json: {message: 'dream has been deleted'}
    end

    private

    def dream_params
        params.require(:dream).permit(:title, :description, :date, :category_id, :favorite)
    end
end
