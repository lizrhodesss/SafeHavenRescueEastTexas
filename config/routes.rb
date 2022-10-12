Rails.application.routes.draw do
  resources :admins
  resources :adoption_forms
  resources :donation_forms
  resources :dogs
    # route to test your configuration
    get '/hello', to: 'application#hello_world'

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
