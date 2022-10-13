class DogsController < ApplicationController

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
        dog = Dog.update!(dog_params)
        render json: dog, status: :ok
    end


    private

    def dog_params
        params.permit(:name, :breed, :photo, :intakeDate, :adoptionDate, :vaccinesUpToDate, :DOB, :spayNeuter, :heartwormStatus, :vaccinesGiven, :spayNeuterDate, :available, :temperment, :heartwormPrevention, :heartwormProduct)
    end
end
