"use strict";
/*
  shape is Square is the userDefinedTypeGuards
  the function returns boolean which confirms what type it is

  */
function isSquare(shape) {
    return "size" in shape;
}
function isRectangle(shape) {
    return "width" in shape;
}
function area(shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensure = shape;
    return _ensure;
}
