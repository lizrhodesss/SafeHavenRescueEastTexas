class DonationFormsController < ApplicationController
    skip_before_action :authorize, only: [:update, :create]
    
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

    def update
        donationForm = DonationForm.find(params[:id])
        donationForm.update!(donation_params)
	    render json: donationForm, status: :ok
    end


    private
    def donation_params
        params.permit(:name, :dog_id, :email, :amount)
    end
end
