"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bruce = {
    name: "Bruce",
    email: "belt@example.com",
    phone: "911",
};
const alfred = {
    name: "Alfred",
    email: "alfred@example.com",
};
console.log(alfred.phone); // undefined
///////////////////////////////////////////////////////
class Point {
}
const point = new Point();
console.log(point.x); // undefined
point.x = 0;
point.x = undefined;
