class AdoptionForm < ApplicationRecord
   validates :admin_id, presence: true


    belongs_to :dog
    belongs_to :admin
end
