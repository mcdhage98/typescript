type Person = {
  name: string;
  age: number;
  location: string;
};

const john: Person = {
  name: "John",
  age: 35,
  location: "Melbourne",
};

type keysType = keyof Person; // string | number | string

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

const age = logGet(john, "age"); // 35
//console.log(logGet(john, 'email')); // Error

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting:", key, value);
  obj[key] = value;
}
logSet(john, "age", 8);

export {};
