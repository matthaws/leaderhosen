class OauthCallbacksController < ApplicationController
  def facebook
    debugger
    user = User.find_or_create_by_fb_auth_hash(request.env['omniauth.auth'])
    sign_in(user)
  end
end
