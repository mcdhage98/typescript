type Point = {
  readonly x: number;
  y: number;
};

const point: Point = {
  x: 1,
  y: 1,
};

// point.x = 0 error as x is readonly

class Animal {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const sheep = new Animal("sheep");
console.log(sheep.name); // Allow
// sheep.name = "wolf"; // Disallow

export {};
