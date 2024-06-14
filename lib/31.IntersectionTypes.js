"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const man = {
    email: "mc@gmail.com",
    phone: "adad",
    name: "mcs",
};
function contact(details) {
    console.log(`Dear ${details.name}.
    I hope you received our email at ${details.email}.
    We will call you at ${details.phone} shortly.
    `);
}
contact({
    name: "John",
    email: "howdy@example.com",
    phone: "1337",
});
