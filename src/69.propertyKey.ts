const str: string = 'key';
const num: number = 1337;
const sym: symbol = Symbol ();
const valid = {
[str]: 'valid',
[num]: 'valid',
[sym]: 'valid',
};
const obj = {};
const invalid = {
//[obj]: 'invalid', error
}
//type PropertyKey = string | number | symbol
let example: PropertyKey;
example = str;
example = num;
example = sym;
//example = obj; errror

export {}