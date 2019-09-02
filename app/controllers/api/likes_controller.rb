class Api::LikesController < ApplicationController
    def index
      @likes = Like.all
    end


    def create
        @like = Like.new(like_params)
        if @like.save
          render :show
        else
          render json: @like.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    def destroy
        @like = current_user.likes.find_by(song_id: params[:id])
        @like.destroy
        render :show
    end
 
    private
    def like_params
        params.require(:like).permit(:user_id, :song_id)
    end
end
