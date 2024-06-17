type StateDescription<D, M> = {
  data: D;
  methods: M & ThisType<D & M>; // defines what this object type should contain
};
function createState<D, M>(desc: StateDescription<D, M>): D & M {
  return { ...desc.data, ...desc.methods };
}

let state = createState({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; //check type of this
      this.y += dy;
    },
  },
});
state.x = 10;
state.y = 20;
state.moveBy(5, 5);

//////////////////////////////////
type Maths = {
  double(): void;
  half(): void;
};

const math: Maths & ThisType<{ value: number }> = {
  double() {
    this.value *= 2;
  },
  half() {
    this.value /= 2;
  },
};
const obj = {
  value: 1,
  ...math,
};
obj.double();
console.log(obj.value); // 2
obj.half();
console.log(obj.value); // 1
