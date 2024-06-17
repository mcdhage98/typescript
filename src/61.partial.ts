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
  