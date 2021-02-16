class DreamTypesController < ApplicationController
    def index
        dream_types = DreamType.all
        options = {include: [:dreams]}
        render json: DreamTypeSerializer.new(dream_types, options)
    end
end
