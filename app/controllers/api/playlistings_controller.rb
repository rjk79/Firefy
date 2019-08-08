class Api::PlaylistingsController < ApplicationController
 
    def create
        @playlisting = Playlisting.new(playlisting_params)
        if @playlisting.save
          render :show
        else
          render json: @playlisting.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    # def destroy
    #     @playlisting = Playlisting.find_by(song_id: params[:songId]) 
    #     @playlisting.destroy
    #     render :show
    # end
    # find_by(
        #     user_id: current_user.id,
        #     room_id: params[:room_id]
        #     ).destroy

    private
    def playlisting_params
        params.require(:playlisting).permit(:playlist_id, :song_id)
    end
end

