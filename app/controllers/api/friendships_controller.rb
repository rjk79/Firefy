class Api::FriendshipsController < ApplicationController
  

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
          render :show
        else
          render json: @friendship.errors.full_messages, status: 422 #unprocesssable entity
        end
    end

    def show
        @friendship = Friendship.find(params[:id])
        render :show
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        @friendship.destroy
        render :show
    end

    private
    def friendship_params
        params.require(:friendship).permit(:user1_id, :user2_id)
    end
end

