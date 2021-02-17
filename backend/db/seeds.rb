# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dream.create(title: "Maple Panic", description: "My brother thought were were gonna get arrested because 'Maple Syrup is illegal'", dream_date_id: 1, category_id: 4)
Dream.create(title: "Underwear School", description: "Forgot to get dressed before going to school", dream_date_id: 2, category_id: 7)
Dream.create(title: "Sunflower Faces", description: "People had sunflower faces", dream_date_id:3, category_id: 4)
Dream.create(title: "Bonnaroo", description: "headlining Bonnaroo", dream_date_id: 4, category_id: 6)
Dream.create(title: "Falling", description: "I'm falling but I wake up before I hit the ground", dream_date_id: 5, category_id: 5)

Category.create(category: "Nightmare")
Category.create(category: "Funny")
Category.create(category: "Realistic")
Category.create(category: "Weird")
Category.create(category: "Recurring")
Category.create(category: "Ideal Life")
Category.create(category: "Embarrassing")

DreamDate.create(date: "11-05-2020")
DreamDate.create(date: "04-07-2009")
DreamDate.create(date: "12-31-2019")
DreamDate.create(date: "03-15-2016")
DreamDate.create(date: "08-22-2004")