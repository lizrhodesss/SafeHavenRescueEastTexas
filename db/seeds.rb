puts "creating dogs"
d1 = Dog.create(name: "Nellie", available: true, DOB: "2-3 years", breed: "border collie mix", intakeDate: "10-8-22", adoptionDate: nil, vaccinesUpToDate: true, vaccinesGiven: "parvovirus, distemper, rabies", spayNeuter: false, spayNeuterDate: nil, heartwormStatus: false, heartwormPrevention: true, heartwormProduct: "proHeart", temperment: "very laid back, great with kids." )
d2 = Dog.create(name: "Brenna", available: true, DOB: "5 years", breed: "bully mix", intakeDate: "6-10-18", adoptionDate: nil, vaccinesUpToDate: true, vaccinesGiven: "parvovirus, distemper, rabies", spayNeuter: true, spayNeuterDate: "7-30-18", heartwormStatus: false, heartwormPrevention: true, heartwormProduct: "P monthly prevention", temperment: "shes a runner, but would love nothing more than her human telling her good girl." )
d3 = Dog.create(name: "Gator", available: true, DOB: "3, 2020", breed: "heeler mix", intakeDate: "4-20", adoptionDate: nil, vaccinesUpToDate: true, vaccinesGiven: "rabies", spayNeuter: true, spayNeuterDate: "6-1-20", heartwormStatus: true, heartwormPrevention: false, heartwormProduct: "HW postive treatment", temperment: "these days he is very mellow and must remin so, due to HW treatment" )
d4 = Dog.create(name: "Ginny", available: true, DOB: "2, 2020", breed: "heeler mix", intakeDate: "4-2020", adoptionDate: "7-4-20", vaccinesUpToDate: true, vaccinesGiven: "distemper, rabies", spayNeuter: true, spayNeuterDate: "6-1-20", heartwormStatus: false, heartwormPrevention: true, heartwormProduct: "proHeart", temperment: "smart, loves to learn new tricks and shes great with cat, dog and child siblings!" )
d5 = Dog.create(name: "Nina", available: true, DOB: "1,2021", breed: "terrier mix", intakeDate: "1-12-21", adoptionDate: "3-16-21", vaccinesUpToDate: true, vaccinesGiven: "canine flu, distemper, rabies", spayNeuter: true, spayNeuterDate: "4-10-21", heartwormStatus: false, heartwormPrevention: true, heartwormProduct: "P monthly prevention", temperment: "loves to snuggle in her very own bed" )
d6 = Dog.create(name: "Dot", available: true, DOB: "6, 2019", breed: "border collie mix", intakeDate: "4-25-20", adoptionDate: "9-7-20", vaccinesUpToDate: true, vaccinesGiven: "parvovirus, distemper, rabies", spayNeuter: true, spayNeuterDate: "12-7-19", heartwormStatus: false, heartwormPrevention: true, heartwormProduct: "proHeart", temperment: "will cllimb a fence, but would rather if you took her to climb a mountain with you" )


puts "creating donationForms"
df1 = DonationForm.create(name: "Susan Smith", email: "ss1979@aol.com", admin_id: 1, dog_id: d1.id, amount: 50)
df2 = DonationForm.create(name: "Joe Peabody", email: "JoeyP@hotmail.com", admin_id: 1, dog_id: d3.id, amount: 125)
df3 = DonationForm.create(name: "Stan Shumeister", email: "stan.stomps@yahoo.com", admin_id: 1, dog_id: d3.id, amount: $25)

puts "creating adoptionForms"
af1 = AdoptionForm.create(name: "Michele Michaels", email: "littlegreen_mm@gmail.com", dog_id: d4.id, admin_id: 1, otherPets: true, children: true, whyForeverHome: "we want to add to our pack and Ginny seems like she would fit in so well!", work: "work from home, marketing")
af2 = AdoptionForm.create(name: "Mary Montgomery", email: "maryhasalittleterror@gmail.com", dog_id: d5.id, admin_id: 1, otherPets: false, children: false, whyForeverHome: "my job went fully remote, but i miss having co workers, looking for a work buddy", work: "software engineer")
af3 = AdoptionForm.create(name: "Bradley Houston", email: "b.rad.1992@gmail.com", dog_id: d6.id, admin_id: 1, otherPets: true, children: false, whyForeverHome: "my cat needs company, and I want a hiking partner", work: "chef")

puts "making admin"
a1 = Admin.create(username: "Georgia.Mclain", password: "adoptdontshop")

puts "done seeding and creating the stuff and things"