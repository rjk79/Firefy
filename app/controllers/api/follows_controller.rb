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

    def destroy
        # @follow = Follow.search(params[:search][:car_number], params[:search][:car_model]) 
        # find_by(
        #     user_id: current_user.id,
        #     room_id: params[:room_id]
        #     ).destroy
        @follow.destroy
        render :show
    end

    private
    def follow_params
        params.require(:follow).permit(:user_id, :playlist_id)
    end
end

