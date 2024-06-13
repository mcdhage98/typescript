/*
Narrowing down uinion types use typeof or instanceof or "in operator check the 3rd example"
*/

function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected number or string, got '${padding} `);
}
padLeft("Hello world", "4"); // Hello world'
padLeft("Hello world", " "); // Hello world'
padLeft("Hello world", "-"); // '---Hello world'

// ---------------------- ----------------- -------------
class Cat {
  meow() {
    console.log("meow");
  }
}
class Dog {
  bark() {
    console.log("woof");
  }
}
type Animal = Cat | Dog;
function speak(animal: Animal) {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

//------------------------------

type Square = {
  size: number;
};
type Rectangle = {
  width: number;
  height: number;
};
type Shape = Square | Rectangle;
function area(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}
area({ size: 2 }); // 4
area({ width: 2, height: 3 }); // 6

export {};
