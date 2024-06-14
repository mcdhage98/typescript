"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}
function logResult(result) {
    if (result.isValid) {
        console.log("Success, validated value:", result.validatedValue);
    }
    if (result.isValid === false) {
        console.error("Failure, error reason:", result.errorReason);
    }
}
