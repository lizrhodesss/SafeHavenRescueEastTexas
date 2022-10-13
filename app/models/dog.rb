class Dog < ApplicationRecord
    validates :name, :breed, :photo, :intakeDate, :vaccinesUpToDate, :vaccinesGiven, :spayNeuterDate, :heartwormStatus, :heartwormPrevention, presence: true


    has_many :donation_forms
    has_many :adoption_forms
    has_one :admin, through: :adoption_form
    has_one :admin, through: :donation_form



    def
        Dog.where(available?: true)
    end

    
end
