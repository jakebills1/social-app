# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :grouped_friends, Array
  def self.discover_friends(ids)
    # make sure friends array exists
    ids = ids.empty? ? [0] : ids
    # show random friends not already group
    Friend.where("id NOT IN (?)", ids).order("RANDOM()")
  end
  def self.grouped(ids)
    # make sure friends not empty
    ids = ids.empty? ? [0] : ids
    # select friends where id is in passed ids
    Friend.where("id IN (?)", ids)
  end
end
