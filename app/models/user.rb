class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  devise :omniauthable, omni_providers: [:facebook]

  def self.from_omniauth(auth)
    User.where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.image = auth.info.image # assuming the user model has an image
  
      user.skip_confirmation!
    end
  end
end
