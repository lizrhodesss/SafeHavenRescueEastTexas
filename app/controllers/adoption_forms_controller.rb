class AdoptionFormsController < ApplicationController

    def show
        adoptionForm = AdoptionForm.find(params[:id])
        render json: adoptionForm, status: :ok
    end

    def create
       adoptForm = Adoption_form.create!(adoption_form_params)
        render json: adoptForm, status: :created
    end


    private
    def adoption_form_params
        params.permit(:username, :password)
    end
end
