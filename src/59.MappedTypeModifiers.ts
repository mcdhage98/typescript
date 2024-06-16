type Point = {
  readonly x: number;
  y?: number;
  z?: number;
};
// + and - are used to add and remove
type Mapped<T> = {
  +readonly [item in keyof T]-?: T[item];
};
type result = Mapped<Point>;

//////////////////////

type partial<T> = {
  [item in keyof T]?: T[item];
};

class State<T> {
  constructor(private current: T) {}

  update(t: partial<T>) {
    this.current = { ...this.current, ...t };
  }
}

let s = new State({ x: 0, y: 0 });
s.update({ y: 10 });
