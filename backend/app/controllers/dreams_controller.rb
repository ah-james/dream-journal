class DreamsController < ApplicationController
    def index
        dreams = Dream.all
        options = {include: [:dream_types, :dream_dates]}
        render json: DreamSerializer.new(dream, options)
    end

    def show
        dream = Dream.find_by(id: params[:id])
        options = {include: [:dream_types, :dream_dates]}
        if dream
            render json: DreamSerializer.new(dream, options)
        else
            render json: { message: 'dream not found' }
        end
    end

    def create
        dream = Dream.new(dream_params)
        options = {include: [:dream_types, :dream_dates]}
        if dream.save
            render json: DreamSerializer.new(dream, options)
        else
            render json: {error: "dream didn't save"}
        end
    end

    def destroy
        dream = Dream.find_by(id: params[:id])
        dream.destroy
        render json: {'#{dream.title} has been deleted'}
    end

    private

    def dream_params
        params.require(:dream).permit(:title, :description, :dream_type, :dream_date)
end
