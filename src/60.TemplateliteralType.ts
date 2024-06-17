type CSSValue =
  // implies px
  | number
  // number + px|em| rem
  | `${number}px`
  | `${number}em`
  | `${number}rem`;
function size(input: CSSValue) {
  return typeof input == "number" ? input + "px" : input;
}
size(123);
size("123px");
size("12em");
// size("12pxx") error

type size = "large" | "medium" | "small";
type color = "primary" | "secondary";

type style = `${size}-${color}`;
