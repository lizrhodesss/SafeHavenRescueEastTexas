class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    

    def create
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin
        else
            render json: { error: ["Invalid Credentials"]}, status: :unauthorized
    end
end

        def destroy
            session.delete :admin_id
            head :no_content
        end
end
