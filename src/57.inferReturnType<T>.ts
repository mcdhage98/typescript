type isArray<T> = T extends Array<infer Member> ? Member : T;

type unBoxArray = isArray<string[]>;
type unboxNumberArr = isArray<number[]>;
type s = isArray<string>;

/////////////
//returnType<T>

function createPerson(name: string, age: number) {
  return {
    name,
    age,
  };
}

//customReturn Type
type returnType<T> = T extends (...args: any) => infer R ? R : never;

type Person = returnType<typeof createPerson>;

//inbuilt ReturnType
function logPerson(p: ReturnType<typeof createPerson>) {
  console.log(p.name, p.age);
}
export{}
