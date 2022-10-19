class DropDogIdFromDonations < ActiveRecord::Migration[7.0]
  def change
    remove_column :donation_forms, :dog_id, :integer
  end
end
