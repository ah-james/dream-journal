# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dream.create(title: "Maple Panic", description: "My brother thought were were gonna get arrested because 'Maple Syrup is illegal'", dream_date_id: 1, dream_type_id: 4)
Dream.create(title: "Underwear School", description: "Forgot to get dressed before going to school", dream_date_id: 2, dream_type_id: 7)
Dream.create(title: "Sunflower Faces", description: "People had sunflower faces except for me", dream_date_id:3, dream_type_id: 4)
Dream.create(title: "Bonnaroo", description: "My band was headlining Bonnaroo", dream_date_id: 4, dream_type_id: 6)
Dream.create(title: "Falling Dream", description: "Dream where I'm falling but I wake up before I hit the ground", dream_date_id: 5, dream_type_id: 5)


DreamDate.create(date: "11-05-2020")
DreamDate.create(date: "11-05-2021")
DreamDate.create(date: "11-05-2021")
DreamDate.create(date: "11-05-2021")
DreamDate.create(date: "11-05-2021")


DreamType.create(dream_type: "Nightmare")
DreamType.create(dream_type: "Funny")
DreamType.create(dream_type: "Realistic")
DreamType.create(dream_type: "Weird")
DreamType.create(dream_type: "Recurring")
DreamType.create(dream_type: "Ideal Life")
DreamType.create(dream_type: "Embarrassing")