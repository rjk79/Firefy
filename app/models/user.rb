class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token

  #FG PER 3 1 2 1 3

  has_many :playlists

  has_many :friendships1,
    foreign_key: :user1_id,
    class_name: :Friendship,
    dependent: :destroy

  has_many :friendships2,
    foreign_key: :user2_id,
    class_name: :Friendship,
    dependent: :destroy

  has_many :follows,
    dependent: :destroy
    
  has_many :likes,
    dependent: :destroy

  has_one_attached :photo


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil 
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
  
end
