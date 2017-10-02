class Api::SessionsController < ApplicationController

  def create
    user = params[:user]
    @user = User.find_by_credentials(user[:username], user[:password])

    if @user
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["No current user"], status: 404
    end
  end
end 
