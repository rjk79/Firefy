class Api::SongsController < ApplicationController
    #index, create, update, show, destroy
    def index
        @songs = Song.all
        render :index
    end

    def show
        @song = Song.find(params[:id])
        render :show
    end
end