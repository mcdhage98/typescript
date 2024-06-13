"use strict";
function area(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}
{
    isValid: false,
        errorReason;
    string,
    ;
}
;
    | ValidationSuccess
    | ValidationFailure;
function logResult(result, Result) {
    if (result.isValid) {
        console.log('Success, validated value:', result.validated, Value);
    }
    if (result.isValid === false) {
        console.error('Failure, error reason:', result.errorReason);
    }
}
