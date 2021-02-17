Rails.application.routes.draw do
  resources :dream_dates
  resources :categories
  resources :dreams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
