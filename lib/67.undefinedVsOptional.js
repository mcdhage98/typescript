"use strict";
let optional;
optional = { name: undefined };
let union;
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
function logUnion(error, message) {
    if (error != undefined) {
        console.error(error, message);
    }
    else {
        console.log(message);
    }
}
