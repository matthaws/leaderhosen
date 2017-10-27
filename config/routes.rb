Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount GraphiQL::Rails::Engine, at: '/api/graphql', graphql_path: '/api/graphql'

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :graphql, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  get '/auth/facebook/callback', to: 'oauth_callbacks#facebook'
end
