class CreateAdoptionForms < ActiveRecord::Migration[7.0]
  def change
    create_table :adoption_forms do |t|
      t.string :name
      t.integer :dog_id
      t.integer :admin_id
      t.boolean :otherPets
      t.boolean :children
      t.string :whyForeverHome
      t.string :work
      t.string :email

      t.timestamps
    end
  end
end
