const Animal = {
  Lion: "King",
  Tiger: 'Queen',
  Dog: "Slave",
  cat: "Dengerous",
  Human: { Male: "Man", Female: "Women" }
}

console.log(Animal);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    //return this.firstName + " " + this.lastName;
    return this.fullName;
  }
};

console.log(person.fullName());