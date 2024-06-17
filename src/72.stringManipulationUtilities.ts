type ab = Uppercase<"ab">

type l =Lowercase<string>

type getter<T extends string> = `get${Capitalize<T>}`

type name = "name"

type getName = getter<name>