class Api::FollowsController < ApplicationController
    def index
        @follows = Follow.all
        render :index
    end 

    def create
        @follow = Follow.new(follow_params)
        
        if @follow.save
          render :show
        else
          render json: @follow.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    def show
        @follow = current_user.follows.find_by(playlist_id: params[:id])
        render :show
    end
 
    def destroy        
        @follow = current_user.follows.find_by(playlist_id: params[:id])
        @follow.destroy
        render :show
    end

    private
    def follow_params
        params.require(:follow).permit(:user_id, :playlist_id)
    end
end

