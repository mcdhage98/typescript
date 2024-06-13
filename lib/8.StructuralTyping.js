"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let point2d = {
    x: 1,
    y: 1,
};
let point3d = {
    x: 1,
    y: 1,
    z: 18,
};
point2d = point3d;
/*
  gives error only in typescript
  console.log(point2d.z);
  */
console.log(point2d === point3d);
