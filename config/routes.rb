Rails.application.routes.draw do
  root 'pages#home'
  get '/pages/services', to: 'pages#services', as: 'services'
  get '/pages/proteger', to: 'pages#proteger'
  get '/pages/formations', to: 'pages#formations'
  get '/pages/support', to: 'pages#support'
  get '/pages/contact', to: 'pages#contact'
  get '/pages/conditions', to: 'pages#conditions'
  get '/pages/articleun', to: 'pages#articleun'
  get '/pages/articledeux', to: 'pages#articledeux'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
