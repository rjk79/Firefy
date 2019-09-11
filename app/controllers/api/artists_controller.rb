class Api::ArtistsController < ApplicationController
    def index
        # .with_attached_photo
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.find(params[:id])
        render :show
    end
end