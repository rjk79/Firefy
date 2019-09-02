Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:new, :create, :destroy]
    resources :playlists, only: [:create, :update, :show ,:index, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :playlistings, only: [:create, :destroy]
    resources :searches, only: [:index]
    resources :follows, only: [:index, :create, :show, :destroy]
    resources :friendships, only: [:index, :create, :show, :destroy]
    resources :likes, only: [:index, :create, :show, :destroy]

    get 'users/:id/likes', to: 'users#likes'
  end
end
