class CreateDonationForms < ActiveRecord::Migration[7.0]
  def change
    create_table :donation_forms do |t|
      t.string :name
      t.string :email
      t.integer :amount
      t.integer :dog_id
      t.integer :admin_id
      
      t.timestamps
    end
  end
end
