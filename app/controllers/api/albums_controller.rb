class Api::AlbumsController < ApplicationController
    #index, create, update, show, destroy
    def index
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end
end
