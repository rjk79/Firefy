Rails.application.routes.draw do
  get 'api/users'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "static_pages#root"

  #root page
  namespace :api, defaults: { format: :json } do    
    resources :users, only: [:create]
    resource :session, only: [:new, :create, :destroy]
    resources :playlists, only: [:create, :update, :show ,:index, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :songs, only: [:index, :show]
  end
end
