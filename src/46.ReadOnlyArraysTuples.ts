function reverseSorted(input: readonly number[]): number[] {
  return input.slice().sort().reverse();
}
const start = [1, 2, 3, 5, 4];
const result = reverseSorted(start);
console.log(result); // [5, 4, 3, 2, 1]
console.log(start); // [1, 2, 3, 4, 5]
type Neat = readonly number[];
type Long = ReadonlyArray<number>;


/////////////////////////////////////////
type Point = readonly [number, number];
function move(point: Point, x: number, y: number): Point {
  return [point[0] + x, point[1] + y];
}
const point: Point = [0, 0];
const moved = move(point, 10, 10);
console.log(moved); // [10, 10]
console.log(point); // [10, 10]
