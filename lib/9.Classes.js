"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m. `);
    }
}
let cat = new Animal("Cat");
cat.move(10);
//cat.name error as name is private
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m. `);
    }
}
class Bird extends Animal2 {
    // implicitly constructor is called
    fly(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m. `);
    }
}
let bird = new Bird("birdy");
bird.fly(11);
