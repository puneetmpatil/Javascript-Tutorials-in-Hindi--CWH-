// Object Literals, Constructors and Object Oriented JavaScript
console.log("This is Tutorial 27")

// Object Literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
}
// console.log(car)
// console.log(car.run())
// console.log(car.name)


// We have already seen constructors like these:
// new Date();

// Create a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`)
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`)
    }
}
let car1 = new GeneralCar('Nissan', 180)
let car2 = new GeneralCar('Maruti Alto', 80)
let car3 = new GeneralCar('Mercedes', 200)
console.log(car1, car2, car3)
// console.log(car2.name)
// console.log(car2.topSpeed)
// console.log(car2.run())