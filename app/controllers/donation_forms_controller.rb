class DonationFormsController < ApplicationController

    def show
        donationForm = DonationForm.find(params[:id])
        Render json: donationForm, status: :ok

    end
    
    def create
        dog = Dog.create!(donation_params)
        render json: dog, status: :created
    end




    private
    def donation_params
        params.permit(:name, :dog_id, :otherPets, :children, :whyForeverHome, :work, :email)
    end
end
