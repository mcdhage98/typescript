"use strict";
function makeReadonly(object) {
    return Object.freeze({ ...object });
}
const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2; // Success: allowed
const readonlyPoint = makeReadonly(editablePoint);
//readonlyPoint.x = 3; // Error: readonly
