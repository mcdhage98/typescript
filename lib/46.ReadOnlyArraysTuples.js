"use strict";
function reverseSorted(input) {
    return input.slice().sort().reverse();
}
const start = [1, 2, 3, 5, 4];
const result = reverseSorted(start);
console.log(result); // [5, 4, 3, 2, 1]
console.log(start); // [1, 2, 3, 4, 5]
function move(point, x, y) {
    return [point[0] + x, point[1] + y];
}
const point = [0, 0];
const moved = move(point, 10, 10);
console.log(moved); // [10, 10]
console.log(point); // [10, 10]
