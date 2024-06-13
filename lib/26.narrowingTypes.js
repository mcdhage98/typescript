"use strict";
/*
Narrowing down uinion types use typeof or instanceof or "in operator check the 3rd example"
*/
Object.defineProperty(exports, "__esModule", { value: true });
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected number or string, got '${padding} `);
}
padLeft("Hello world", "4"); // Hello world'
padLeft("Hello world", " "); // Hello world'
padLeft("Hello world", "-"); // '---Hello world'
// ---------------------- ----------------- -------------
class Cat {
    meow() {
        console.log("meow");
    }
}
class Dog {
    bark() {
        console.log("woof");
    }
}
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}
function area(shape) {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    if ("width" in shape) {
        return shape.width * shape.height;
    }
}
area({ size: 2 }); // 4
area({ width: 2, height: 3 }); // 6
