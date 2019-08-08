class Api::PlaylistingsController < ApplicationController
 
    def create
        @playlisting = Playlisting.new(playlisting_params)
        if @playlisting.save
          render :show
        else
          render json: @playlisting.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    def destroy
        @playlisting = Playlisting.find(params[:id]) 
        @playlisting.destroy
        render :show
    end

    private
    def playlisting_params
        params.require(:playlisting).permit(:playlist_id, :song_id)
    end
end

