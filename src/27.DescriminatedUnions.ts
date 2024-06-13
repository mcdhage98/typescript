type Square = {
  kind: "square";
  size: number;
};
type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};
type Shape = Square | Rectangle;

function area(shape: Shape) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}
/////////////////////////////////
type ValidationSuccess = {
    isValid: true,
    validatedValue: string,
    };
    type Validation Failure = {
    isValid: false,
    errorReason: string,
    };
    type Validation Result =
    | ValidationSuccess
    | ValidationFailure;
    function logResult(result: Validation Result) {
    if (result.isValid) {
    console.log('Success, validated value:', result.validated Value);
    }
    if (result.isValid === false) {
    console.error('Failure, error reason:', result.errorReason);
    }
    }