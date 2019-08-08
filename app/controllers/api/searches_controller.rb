class Api::SearchesController < ApplicationController
    def index
        # case :query_type
        # @playlist = Playlist.where("title ~* ?", ".*") 
        # @songs = Song.where("title ~* 's'")   
        # @artists = Artist.where("name ~* 's'")
        # @albums = Album.where("name ~* 's'")
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
