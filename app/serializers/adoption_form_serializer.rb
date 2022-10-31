class AdoptionFormSerializer < ActiveModel::Serializer
  attributes :id, :name, :dog_id, :otherPets, :children, :whyForeverHome, :work, :email

  belongs_to :dog
end
