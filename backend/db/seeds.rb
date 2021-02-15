# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dream.create(title: "Maple Panic", description: "weird")

DreamDate.create(date: "11-05-2021", dream_id: 1)

DreamType.create(dream_type: "weirdchamp", dream_id: 1)