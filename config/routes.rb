Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :friends, only: [:index, :update] do
      resources :posts, only: [:index, :show]
    end
    get "/friendslist", to: "friends#list"
  end
end
