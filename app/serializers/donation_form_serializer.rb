class DonationFormSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :amount, :dog_id
end
