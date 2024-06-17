type ExampleOptional = {
  name?: string;
};
let optional: ExampleOptional;

optional = { name: undefined };

type ExampleUnion = {
  name: string | undefined;
};
let union: ExampleUnion;
union = { name: undefined };
//union = {} // Error: name is missing

//////////////////////////////////////

// Error: a required parameter cannot follow an optional parameter
/*function logOptional(error?: Error, message: string) {
  if (error != undefined) {
    console.error(error, message);
  } else {
    console.log(message);
  }
}
*/

function logUnion(error: Error | undefined, message: string) {
  if (error != undefined) {
    console.error(error, message);
  } else {
    console.log(message);
  }
}
