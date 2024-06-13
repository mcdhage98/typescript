let exampleAny: any;
let exampleUnknown: unknown;
// any
exampleAny = 123;
exampleAny = "Hello";
// unknown can accept any values
exampleUnknown = 123;
exampleUnknown = "World";
exampleUnknown = {};

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// unknown
if (typeof exampleUnknown == "string") {
  exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
  let unknownSetBool: boolean = exampleUnknown;
}
