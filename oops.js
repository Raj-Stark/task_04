// ! Constructor Function

// const Person = function(name, bYear){

//     this.name = name;
//     this.bYear = bYear;

// }

// Person.prototype.calcAge = function(){
//     return 2023 - this.bYear;
// }

// const raj = new Person("Raj" , 1999);
// console.log(raj);

// ! ES6 Classes

// class Person {

//     constructor(name, bYear){
//         this.name = name;
//         this.bYear = bYear;
//     }

//     calcAge(){
//         return 2023 - this.bYear;
//     }

// }

// const raj = new Person("Raj" , 1999);

// console.dir(raj);

// ! Object.create()

// const Person = {

//     name:"Raj"

// }

// const anshu = Object.create(Person);

// console.log(anshu);

//  ! Inheritence in Constructor fn

// const Person = function (name, bYear) {
//   this.name = name;
//   this.bYear = bYear;
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.bYear;
// };

// const Student = function (name, bYear, course) {
//   Person.call(this, name, bYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.name} and I study this ${this.course}`);
// }

// const shafi = new Student("Shafi", 2000,"CS");

// console.log(shafi);

// ! Coding Challenge on (Inheritence in Constructor fn) :

// function Car(brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// }

// Car.prototype.start = function(){
//   console.log(`${this.brand} starts`);
// }
// Car.prototype.brake = function(){
//   this.speed = 0;
//   console.log(`${this.brand} has stopped now and its speed has come to ${this.speed}km/h `);
// }

// function EV(brand, speed, chargeLevel) {
//   Car.call(this, brand, speed);
//   this.chargeLevel = chargeLevel;
// }

// EV.prototype  = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.chargeLevel += chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.chargeLevel -= 1;
//   console.log(
//     `${this.brand} is going at speed of ${this.speed}km/h, with charge of ${this.chargeLevel} %`
//   );
// };

// const tesla = new EV("Tesla", 90, 67);
// tesla.brake()

// console.dir(tesla);

// ! Inheritence in ES6 Classes

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  start() {
    console.log(`${this.brand} starts`);
  }

  brake() {
    this.speed = 0;
    console.log(
      `${this.brand}'s brakes applied now and its speed has come to ${this.speed} km/h `
    );
  }
}

class EV extends Car {
  constructor(brand, speed, chargeLevel) {
    super(brand, speed);

    this.chargeLevel = chargeLevel;
  }
  chargeBattery() {
    this.chargeLevel += chargeTo;
    console.log(`${this.brand} : ${this.chargeLevel} % charged`);
  }

  accelerate() {
    this.speed += 20;
    this.chargeLevel -= 1;
    console.log(
      `${this.brand} is going at speed of ${this.speed}km/h, with charge of ${this.chargeLevel} %`
    );
  }
}

const nexon = new EV("Tata Nexon", 110, 97);
nexon.accelerate();
nexon.brake();

