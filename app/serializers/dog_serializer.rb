class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :photo, :intakeDate, :adoptionDate, :vaccinesUpToDate, :spayNeuter, :vaccinesGiven, :spayNeuterDate, :available, :DOB, :heartwormStatus, :temperament, :heartwormPrevention, :heartwormProduct
end




