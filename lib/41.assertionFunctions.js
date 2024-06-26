"use strict";
/*
application code use userDefinedTypeGuards
for tests use assertionFunctions
*/
Object.defineProperty(exports, "__esModule", { value: true });
function loadPerson() {
    return null;
}
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new TypeError("value is not a Date");
}
const maybePerson = loadPerson();
assert(maybePerson != null, "Could not load person");
console.log("Name:", maybePerson.name);
assertDate(maybePerson.dateOfBirth);
console.log("Date Of Birth:", maybePerson.dateOfBirth.toISOString());
