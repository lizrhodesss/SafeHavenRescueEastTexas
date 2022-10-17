class AdminsController < ApplicationController
    # skip_before_action :authorize, only: :create
    #skip_before_action :authorize, only: [:index, :show, :update, :create]

    def index
        render json: Admin.all, status: :ok
    end

    def show
        render json: @current_user
    end

    def create
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.id
        render json: admin, status: :created
    end

    # def destroy
    #     admin = Admin.find(params[:id])
    #     admin.destroy
    #     render json: {}
    #     head :no_content
    # end

    private
    def admin_params
        params.permit(:username, :password)
    end
end
