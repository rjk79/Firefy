class Api::FriendshipsController < ApplicationController
    def index
        @friendships = Friendship.all
        render :index
    end

    def show
        @friendship = Friendship.find(params[:id])
        render :show
    end
     
    def create
        
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
          render :show
        else
          render json: @friendship.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    def destroy
        
        @friendship = current_user.friendships1.find_by(user2_id: params[:id]) ||
            current_user.friendships2.find_by(user1_id: params[:id])
        @friendship.destroy
        render :show
    end

    private
    def friendship_params
        params.require(:friendship).permit(:user1_id, :user2_id)
    end
end
 
