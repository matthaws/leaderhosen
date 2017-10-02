class User < ActiveRecord::Base


  def self.find_or_create_by_fb_auth_hash(auth_hash)
     user = self.find_by(uid: auth_hash[:uid], provider: auth_hash[:provider])

     unless user
       user = self.create!(
         uid: auth_hash[:uid],
         provider: auth_hash[:provider],
         email: auth_hash[:info][:email],
         password_digest: SecureRandom::urlsafe_base64(16)
       )
     end

     user
   end

end
