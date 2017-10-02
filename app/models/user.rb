class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

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

  def password=(password)
     self.password_digest = BCrypt::Password.create(password)
     @password = password
  end

  def is_password?(password)
     BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end 

end
