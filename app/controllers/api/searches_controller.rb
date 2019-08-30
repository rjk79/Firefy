class Api::SearchesController < ApplicationController
    def index
        @playlists = Playlist.where("name ~* :reg", :reg => params[:query])  
        @songs = Song.where("title ~* :reg", :reg => params[:query])  
        @artists = Artist.where("name ~* :reg", :reg => params[:query]) 
        @albums = Album.where("name ~* :reg", :reg => params[:query]) 
            
        render :index
    end
 
    private
    def search_params
        params.require(:search).permit(:query)
    end
end
