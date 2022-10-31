class ChangeTempermentToTemperament < ActiveRecord::Migration[7.0]
  def change
    rename_column :dogs, :temperment, :temperament
  end
end
