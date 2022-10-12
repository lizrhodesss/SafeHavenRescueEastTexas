class Dog < ApplicationRecord
    has_many :donation_forms
    has_many :adoption_forms
    has_one :admin, through: :adoption_form
    has_one :admin, through: :donation_form
end
