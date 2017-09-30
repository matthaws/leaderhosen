Rails.application.routes.draw do
  root to: 'static_pages#root'

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
