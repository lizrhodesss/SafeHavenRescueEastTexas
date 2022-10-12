class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :photo
      t.string :intakeDate
      t.string :adoptionDate
      t.boolean :vaccinesUpToDate
      t.string :vaccinesGiven
      t.boolean :SpayNeuter
      t.string :spayNeuterDate
      t.boolean :available
      t.string :DOB
      t.boolean :heartwormStatus
      t.boolean :heartowrmPrevention
      t.string :heartwormProduct
      t.string :temperment

      t.timestamps
    end
  end
end
