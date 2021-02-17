# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dream.create(title: "Maple Panic", description: "My brother thought were were gonna get arrested because 'Maple Syrup is illegal'", date_id: 1, category_id: 4)
Dream.create(title: "Underwear School", description: "Forgot to get dressed before going to school", date_id: 2, category_id: 7)
Dream.create(title: "Sunflower Faces", description: "People had sunflower faces except for me", date_id:3, category_id: 4)
Dream.create(title: "Bonnaroo", description: "My band was headlining Bonnaroo", date_id: 4, category_id: 6)
Dream.create(title: "Falling Dream", description: "Dream where I'm falling but I wake up before I hit the ground", date_id: 5, category_id: 5)


Date.create(date: "11-05-2020")
Date.create(date: "04-07-2009")
Date.create(date: "12-31-2019")
Date.create(date: "03-15-2016")
Date.create(date: "08-22-2004")


Category.create(category: "Nightmare")
Category.create(category: "Funny")
Category.create(category: "Realistic")
Category.create(category: "Weird")
Category.create(category: "Recurring")
Category.create(category: "Ideal Life")
Category.create(category: "Embarrassing")