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