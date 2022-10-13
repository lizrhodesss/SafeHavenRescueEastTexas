# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_12_192648) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adoption_forms", force: :cascade do |t|
    t.string "name"
    t.integer "dog_id"
    t.integer "admin_id"
    t.boolean "otherPets"
    t.boolean "children"
    t.string "whyForeverHome"
    t.string "work"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.string "photo"
    t.string "intakeDate"
    t.string "adoptionDate"
    t.boolean "vaccinesUpToDate"
    t.string "vaccinesGiven"
    t.boolean "spayNeuter"
    t.string "spayNeuterDate"
    t.boolean "available"
    t.string "DOB"
    t.boolean "heartwormStatus"
    t.boolean "heartwormPrevention"
    t.string "heartwormProduct"
    t.string "temperment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "donation_forms", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "amount"
    t.integer "dog_id"
    t.integer "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
