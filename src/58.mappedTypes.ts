type Point = {
  x: number;
  y: number;
  z: number;
};

type ReadOnly<T extends Object> = {
  readonly [item in keyof T]: T[item];
};

type ReadOnlyPoint = ReadOnly<Point>;

export {}