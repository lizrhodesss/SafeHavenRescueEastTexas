class Admin < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    
    has_many :donation_forms
    has_many :adoption_forms
    has_many :dogs, through: :adoption_form
    has_many :dogs, through: :donation_form
end
