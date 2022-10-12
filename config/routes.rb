Rails.application.routes.draw do
    # route to test your configuration
    get '/hello', to: 'application#hello_world'

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
