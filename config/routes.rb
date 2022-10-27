Rails.application.routes.draw do
  resources :admins
  resources :adoption_forms
  resources :donation_forms
  resources :dogs

  get "/me", to: "admins#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "admins#create"
  delete "/logout", to: "sessions#destroy"
  post "/new_dog", to: "dogs#create"
  post "application", to: "adoption_forms#create"
  # get "/admin/donations", to: "donation_forms#index"
  # get "/admin/adoptions", to: "adoption_forms#index"

   

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
