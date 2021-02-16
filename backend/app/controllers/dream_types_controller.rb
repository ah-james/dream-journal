class DreamTypesController < ApplicationController
    def index
        dream_types = DreamType.all
        render json: DreamTypeSerializer.new(dream_types)
    end
end
