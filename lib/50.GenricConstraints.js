"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFullName(obj) {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
    };
}
const john = addFullName({
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe'
});
console.log(john.email); // john@example.com
console.log(john.fullName); // John Doe
const jane = addFullName({ firstName: 'Jane', lastName: 'Austen' });
