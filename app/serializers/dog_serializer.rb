class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :photo, :instakeDate, :adoptionDate, :vaccineStatus, :SpayNeuter
end
