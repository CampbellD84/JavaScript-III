/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If in the Global Scope, the value of 'this' is the Window/Console Object. 
* 2. If a function is called with a . before it, the value of 'this' 
is the Object on the left side of the period.
* 3. If a constructor function is used, 'this' refers to the specific Object instance
created and returned by constructor function
* 4. When .call(), .apply(), and .bind() are used, 'this' is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); // Window

// Principle 2

// code example for Implicit Binding
const anObj = {
    name: "Douglas",
    age: 35,
    speak() {
        console.log('implicit this === ', this);
        return `Hi, I'm ${this.name} and I am ${this.age}.`;
    }
}

anObj.speak(); /*  implicit this === Object {
    name: "Douglas",
    age: 35,
    speak() {
        console.log('implicit this === ', this);
        return `Hi, I'm ${this.name} and I am ${this.age}.`;
    }
}
*/

// Principle 3

// code example for New Binding

function Car(attr) {
    this.make = attr.make;
    this.model = attr.model;
    this.year = attr.year;
    this.info = function() {
        console.log('new binding ', this);
        return `This is a ${this.year} ${this.make} ${this.model}.`;
    }
}

const rangeRover = new Car({make: "Land Rover", model: "Range Rover", year: 2012});
const subaruWRX = new Car({make: "Subaru", model: "WRX", year: 2017});

rangeRover.info(); // new binding Car {make: "Land Rover", model: "Range Rover", year: 2012}
subaruWRX.info(); // new binding Car {make: "Subaru", model: "WRX", year: 2017}

// Principle 4

// code example for Explicit Binding

function ViceVersa(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        return `My name is ${this.name} now and I am ${this.age} now! What happened?`;
    }
}

const marshall = new ViceVersa({name: "Marshall", age: 38});
const charlie = new ViceVersa({name: "Charlie", age: 11});

// Principle 4: Explicit Binding in effect below
console.log(marshall.speak.call(charlie)); // My name is Charlie now and I am 11 now! What happened?
console.log(charlie.speak.apply(marshall)); // My name is Marshall now and I am 38 now! What happened?
