class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m. `);
  }
}

let cat = new Animal("Cat");
cat.move(10);
//cat.name error as name is private

class Animal2 {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m. `);
  }
}

class Bird extends Animal2 {
  // implicitly constructor is called
  fly(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m. `);
  }
}

let bird = new Bird("birdy");
bird.fly(11);
export {};
