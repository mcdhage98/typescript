function error(message: string): never {
  throw new Error(message);
}
//const notAllowed: never = 'some string';
const allowed: never = error("this is okay");
const example: string = error("I will not return");
type Verbose = string | never;
type Concise = string;

type NoEmpty<T> = T extends null | undefined ? never : T;
let ex: NoEmpty<string | null> = "";

type expanded = NoEmpty<string | null>;
type expanded1 = NoEmpty<string> | NoEmpty<null>;

type expanded2 =
  | (string extends null | undefined ? never : string)
  | (undefined extends null | undefined ? never : string);

type expanded3 = string | null;
type expanded4 = string;

export {}