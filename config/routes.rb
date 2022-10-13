Rails.application.routes.draw do
  resources :admins
  resources :adoption_forms
  resources :donation_forms
  resources :dogs
   

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
