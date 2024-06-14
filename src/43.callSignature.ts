//type Add = (a:number, b:number) => number

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c?: number): number;
  debugName?: string;
};
const add: Add = (a: number, b: number) => {
  return a + b;
};

add.debugName = "Addition Function";

///////////////////////////////////////

//constructor signature
/*

*/
type PointCreator1 = {
  new (x: number, y: number): { x: number; y: number };
};
type PointCreator = new (x: number, y: number) => { x: number; y: number };
const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}
};

