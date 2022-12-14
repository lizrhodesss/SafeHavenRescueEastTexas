class AdoptionFormsController < ApplicationController
    skip_before_action :authorize, only: [:update, :create]
    
    def index
        render json: AdoptionForm.all, status: :ok
    end


    def show
        adoptionForm = AdoptionForm.find(params[:id])
        render json: adoptionForm, status: :ok
    end

    def create
       adoptForm = AdoptionForm.create!(adoption_form_params)
        render json: adoptForm, status: :created
    end
    
    def update
        adoptForm = AdoptionForm.find(params[:id])
        adoptForm.update!(adoption_form_params)
	    render json: adoptForm, status: :ok
    end


    private
    def adoption_form_params
        params.permit(:name, :dog_id, :otherPets, :whyForeverHome, :work, :email, :admin_id)
    end
end
