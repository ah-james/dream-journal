class DreamTypesController < ApplicationController
    def index
        dream_types = DreamType.all
        render json: dream_types
    end
end
