class DogsController < ApplicationController
   skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Dog.all, status: :ok
    end

    def show
        dog = Dog.find(params[:id])
        render json: dog, status: :ok
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end


  def update
        dog = Dog.find(params[:id])
        dog.update!(dog_params)
        render json: dog, status: :accepted
    end

    def destroy
        Dog.find(params[:id]).destroy
        render json: {}
        head :no_content
    end

    private

    def dog_params
        params.permit(:name, :breed, :photo, :intakeDate, :adoptionDate, :vaccinesUpToDate, :DOB, :spayNeuter, :heartwormStatus, :vaccinesGiven, :spayNeuterDate, :available, :temperament, :heartwormPrevention, :heartwormProduct, :id, :dog)
    end
end
