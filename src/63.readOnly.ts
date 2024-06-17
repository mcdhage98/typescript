type readOnly<T> = {
  readonly [item in keyof T]: T[item];
};

function makeReadonly<T>(object: T): Readonly<T> {
  return Object.freeze({ ...object });
}
const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2; // Success: allowed
const readonlyPoint = makeReadonly(editablePoint);
//readonlyPoint.x = 3; // Error: readonly
