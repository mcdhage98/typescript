let reg: RegExp = new RegExp("ab+c");

let arr: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let q = new Queue<number>();

export {}
