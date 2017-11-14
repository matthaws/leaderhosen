class Game < ActiveRecord::Base
  validate :name, presence: true

  

end
