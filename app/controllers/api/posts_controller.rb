class Api::PostsController < ApplicationController
  before_action :set_friend
  before_action :set_post, only: [:show, :update]
  def index
    render json: @friend.posts
  end

  def show
    render json: @post
  end

  def update
    # binding.pry
    @post.increment(:likes)
    render json: @post
  end

  private 
    def set_friend 
      @friend = Friend.find(params[:friend_id])
    end
    def set_post
      @post = @friend.posts.find(params[:id])
    end
end
