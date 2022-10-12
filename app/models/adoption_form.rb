class AdoptionForm < ApplicationRecord
    belongs_to :dog
    belongs_to :admin
end
