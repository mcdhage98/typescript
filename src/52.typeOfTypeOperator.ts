const personResponse = {
  name: "john",
  email: "john@example. com",
  firstName: "John",
  lastName: "Doe",
};
type PersonResponse = typeof personResponse; //use type of operator
function processResponse(person: PersonResponse) {
  console.log("Full name:", "${person, firstName} ${person, lastName}");
}
