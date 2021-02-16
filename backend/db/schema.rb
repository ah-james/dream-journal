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

ActiveRecord::Schema.define(version: 2021_02_15_195419) do

  create_table "dream_dates", force: :cascade do |t|
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dream_types", force: :cascade do |t|
    t.string "dream_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dreams", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "dream_type_id"
    t.integer "dream_date_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dream_date_id"], name: "index_dreams_on_dream_date_id"
    t.index ["dream_type_id"], name: "index_dreams_on_dream_type_id"
  end

  add_foreign_key "dreams", "dream_dates"
  add_foreign_key "dreams", "dream_types"
end
