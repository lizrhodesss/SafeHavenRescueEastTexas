class DonationFormsController < ApplicationController

    
    def index
        render json: DonationForm.all, status: :ok
    end
    
    def show
        donationForm = DonationForm.find(params[:id])
        Render json: donationForm, status: :ok

    end
    
    def create
        donationForm = DonationForm.create!(donation_params)
        render json: donationForm, status: :created
    end




    private
    def donation_params
        params.permit(:name, :dog_id, :otherPets, :children, :whyForeverHome, :work, :email)
    end
end
