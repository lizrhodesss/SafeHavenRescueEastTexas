class AdoptionForm < ApplicationRecord
   validates :name,  :email, :otherPets, :whyForeverHome, presence: true


    belongs_to :dog
    belongs_to :admin
end
