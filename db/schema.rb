# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151105103504) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "unaccent"

  create_table "lists", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email_id"
  end

  create_table "lists_mailgroups", id: false, force: true do |t|
    t.integer "mailgroup_id"
    t.integer "list_id"
  end

  create_table "mailgroups", force: true do |t|
    t.string   "name"
    t.text     "memo"
    t.string   "trialcode"
    t.string   "importance"
    t.string   "created_by"
    t.string   "updated_by"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "mailgroups", ["id"], name: "index_mailgroups_on_groupid", using: :btree

  create_table "mailgroups_users", id: false, force: true do |t|
    t.integer "user_id"
    t.integer "mailgroup_id"
  end

  add_index "mailgroups_users", ["user_id", "mailgroup_id"], name: "m_u", unique: true, using: :btree

  create_table "salutations", force: true do |t|
    t.string   "lang",       limit: 1
    t.string   "gender",     limit: 1
    t.string   "salutation"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "salutation"
    t.string   "title"
    t.string   "firstname"
    t.string   "lastname"
    t.string   "function"
    t.string   "company"
    t.string   "appendix"
    t.string   "street"
    t.string   "city"
    t.string   "zip"
    t.string   "country"
    t.string   "fax"
    t.string   "phone"
    t.string   "phone2"
    t.string   "email"
    t.string   "email2"
    t.string   "gender"
    t.string   "sakkrole"
    t.string   "language"
    t.text     "memo"
    t.string   "prio"
    t.string   "groupsbefore",        limit: 512
    t.string   "created_by"
    t.string   "updated_by"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "login",                           default: "", null: false
    t.string   "encrypted_password",              default: "", null: false
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "users", ["id"], name: "index_users_on_userid", using: :btree

end
