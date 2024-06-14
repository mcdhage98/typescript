type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

interface IPoint2D {
  x: number;
  y: number;
}

interface IPoint3D extends IPoint2D {
  z: number;
}

const point1: IPoint3D = {
  z: 1,
  x: 1,
  y: 1,
};

export {};
