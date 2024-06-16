"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////
//returnType<T>
function createPerson(name, age) {
    return {
        name,
        age,
    };
}
//inbuilt ReturnType
function logPerson(p) {
    console.log(p.name, p.age);
}
