class Api::SessionsController < ApplicationController

  def create
    user = params[:user]
    @user = User.find_by_credentials(user[:email], user[:password])

    if @user
      login(@user)
      render 'show'
    else
      render json: ["Invalid email or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No current user"], status: 404
    end
  end
end
