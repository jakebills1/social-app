200.times do
  f = Friend.create(name: Faker::Name.name,
    category: [ Faker::University.name, Faker::IndustrySegments.sector, Faker::Cannabis.strain, Faker::Beer.name, Faker::Bank.name, Faker::Cosmere.allomancer, Faker::Restaurant.name].sample,
    avatar: Faker::Avatar.image, 
    status: [Faker::Movies::HitchhikersGuideToTheGalaxy.quote, Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote, Faker::Movies::BackToTheFuture.quote, 
      Faker::Movies::Lebowski.quote, Faker::Quote.famous_last_words, Faker::TvShows::BojackHorseman.quote].sample)
  10.times do
    f.posts.create(body: Faker::Lorem.paragraph_by_chars(256))
  end
end