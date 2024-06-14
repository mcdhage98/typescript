type Person = {
  name: string;
  email: string;
  phone?: string;
};
const bruce: Person = {
  name: "Bruce",
  email: "belt@example.com",
  phone: "911",
};
const alfred: Person = {
  name: "Alfred",
  email: "alfred@example.com",
};
console.log(alfred.phone); // undefined

///////////////////////////////////////////////////////

class Point {
  x?: number | null;
  y?: number;
}
const point = new Point();
console.log(point.x); // undefined
point.x = 0;
point.x = undefined;

export {};
