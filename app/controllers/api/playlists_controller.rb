class Api::PlaylistsController < ApplicationController
    #index, create, update, show, destroy
    def index
        @playlists = Playlist.all
        render :index
    end
 
    def create
        @playlist = Playlist.new(playlist_params) 
        @playlist.user_id = current_user.id
        if @playlist.save
            render :show
        else
          render json: @playlist.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        if @playlist.update(playlist_params)
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def show
        @playlist = Playlist.includes(playlistings: [song: [album: :artist]], playlistings: [song: :album]).find(params[:id])
        render :show
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy

        render :show
    end

    private
    # make sure the object has a name so in AJAX, data: { {name: }}
    def playlist_params
        
        if params[:playlist][:photo].nil?
            return params.require(:playlist).permit(:name)
        else 
            return params.require(:playlist).permit(:name, :photo) 
        end
    end
end
