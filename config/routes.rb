Rails.application.routes.draw do
  resources :admins
  resources :adoption_forms
  resources :donation_forms
  resources :dogs

  get "/me", to: "admin#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "admins#create"
  delete "/logout", to: "sessions#destroy"
  post "/new_dog", to: "dogs#create"
  post "application", to: "adoption_forms#create"

   

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end


# //trying to show index of all available dogs to unauth users

# will that mean a custom controller method? 

# history.push(`/donate/${data.dontate.id}`))