class DonationForm < ApplicationRecord
    validates :amount, presence: true

    belongs_to :dog
end
