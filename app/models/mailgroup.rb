class Mailgroup < ActiveRecord::Base

  has_and_belongs_to_many :users
  has_and_belongs_to_many :lists 

  validates :name, uniqueness: true

  scope :searched,    -> (term) { where("name ILIKE '%#{term}%' AND type IS NULL") if term.present? }
  scope :is_robinson, -> { where('robinson_id is not NULL') }
  scope :regular,     -> { where('query is NULL') }



  # def self.sort_by_user_count
  #   sort_by(&:user_count)
  # end

end
