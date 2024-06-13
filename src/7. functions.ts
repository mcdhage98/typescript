function add(a: number, b: number): number {
  return a + b;
}

function log(s: string): void {
  console.log(s);
}

function sum(...nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur);
}

let add1: (a: number, b: number) => number;

type Add = (a: number, b: number) => number;
//type subtract = (a: number, b:number): number; //not a vlaid syntax

let add2: Add;

const subtract = (a: number, b: number): number => a - b;

export {}
