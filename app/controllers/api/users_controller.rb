class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end 
  

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422 #unprocesssable entity
    end
  end


  def likes
    user = User.find(params[:id])
    song_ids = user.likes.map{|like| like.song_id}
    
    @songs = Song.includes(:album, :artist).find(song_ids) 
    render :likes
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

# recommended songs based on song metadata, 
# owned playlists + liked songs metadata, and pageviews