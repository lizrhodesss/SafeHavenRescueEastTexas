class Dog < ApplicationRecord
   validates :name, presence: true
   #:breed, :photo, :intakeDate, :vaccinesUpToDate, :vaccinesGiven, :spayNeuterDate, :heartwormStatus, :heartwormPrevention, presence: true


    has_many :donation_forms
    has_many :adoption_forms
    has_one :admin, through: :adoption_form



    # def
    #     Dog.where(available?: true)
    # end

    
end


# {
#     "id": 1,
#     "name": "Nellie",
#     "breed": "border collie mix",
#     "photo": "public/millie.jpeg",
#     "intakeDate": "10-8-22",
#     "adoptionDate": null,
#     "vaccinesUpToDate": true,
#     "spayNeuter": "false",
#     "vaccinesGiven": "parvovirus, distemper, rabies",
#     "spayNeuterDate": "10-30-22",
#     "available": true,
#     "DOB": "2-3 years",
#     "heartwormStatus": true,
#     "temperment": "very laid back, great with kids.",
#     "heartwormPrevention": true,
#     "heartwormProduct": "proHeart"
# }