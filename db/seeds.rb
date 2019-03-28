200.times do
  Friend.create(name: Faker::Name.name, category: [ Faker::University.name, Faker::IndustrySegments.sector, Faker::Cannabis.strain, Faker::Beer.name, Faker::Bank.name, Faker::Cosmere.allomancer, Faker::Restaurant.name].sample, avatar: Faker::Avatar.image)
end