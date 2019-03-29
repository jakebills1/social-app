class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.discover_friends(current_user.grouped_friends)
  end

  def update
    current_user.grouped_friends << params[:id].to_i
    current_user.save
  end

  def list
    render json: User.grouped(current_user.grouped_friends)
  end

  def show
    @friend = Friend.find(params[:id])
    render json: @friend
  end
  
end
