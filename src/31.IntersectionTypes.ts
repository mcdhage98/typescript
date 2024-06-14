type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

type ContactDetails = Phone & Email & Person;

const man: ContactDetails = {
  email: "mc@gmail.com",
  phone: "adad",
  name: "mcs",
};

function contact(details: Person & Email & Phone) {
  console.log(`Dear ${details.name}.
    I hope you received our email at ${details.email}.
    We will call you at ${details.phone} shortly.
    `);
}
contact({
  name: "John",
  email: "howdy@example.com",
  phone: "1337",
});

export {}
