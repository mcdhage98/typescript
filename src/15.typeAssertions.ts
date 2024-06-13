//let hello = load(); dummy function
let hello: unknown;

const trimmed = (hello as string).trim();

/*use below if type is unknown
if (typeof hello === " string") {
  let trimmed = hello.trim();
}*/
