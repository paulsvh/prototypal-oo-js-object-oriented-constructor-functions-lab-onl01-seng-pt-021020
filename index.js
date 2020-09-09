function User(name, email) {
    this.name = name;
    this.email = email;
    this.sayHello = function() {
        console.log(`Hello everybody, my name is ${this.name} whom you've been
mailing at ${this.email}!`);
    };
}
Scooter with year, color, and model properties
Driver with name, age, and experience properties
PickupLocation with address and city properties

function Scooter(year, color, model){
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience;
}

funciton PickupLocation(address, city){
  this.address = address;
  this.city = city;
}
