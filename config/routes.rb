Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :friends, only: [:index, :update, :show] do
      resources :posts, only: [:index, :show, :update]
    end
    get "/friendslist", to: "friends#list"
    # put "/posts/:id/likepost", to: "posts#like"
  end
end
