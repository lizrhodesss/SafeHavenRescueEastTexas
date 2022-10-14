class AdoptionFormsController < ApplicationController
    skip_before_action :authorize, only: :create
    
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


    private
    def adoption_form_params
        params.permit(:name, :dog_id, :otherPets, :whyForeverHome, :work, :email, :admin_id)
    end
end
