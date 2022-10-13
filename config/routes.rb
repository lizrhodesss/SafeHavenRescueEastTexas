Rails.application.routes.draw do
  resources :admins
  resources :adoption_forms
  resources :donation_forms
  resources :dogs

  # get "/me", to: "admin#show"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
  get "/available_pets", to: "dogs#index"
  post "/new_dog", to: "dogs#create"
  patch "/update_dog", to: "dogs#update"
  post "application", to: "adoption_forms#create"

   

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
