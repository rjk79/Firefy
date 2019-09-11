class Api::AlbumsController < ApplicationController
    #index, create, update, show, destroy
    def index
        # .with_attached_photo
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end
end
