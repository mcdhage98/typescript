type Point2D = {
  x: number;
  y: number;
};
type Point3D = {
  x: number;
  y: number;
  z: number;
};

let point2d: Point2D = {
  x: 1,
  y: 1,
};

let point3d: Point3D = {
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

export {};
