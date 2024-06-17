"use strict";
function createState(desc) {
    return { ...desc.data, ...desc.methods };
}
let state = createState({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx; //check type of this
            this.y += dy;
        },
    },
});
state.x = 10;
state.y = 20;
state.moveBy(5, 5);
const math = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    },
};
const obj = {
    value: 1,
    ...math,
};
obj.double();
console.log(obj.value); // 2
obj.half();
console.log(obj.value); // 1
