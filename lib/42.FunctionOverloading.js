"use strict";
//function overload
function makeDate(timestampOrYear, month, day) {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    }
    else {
        return new Date(timestampOrYear);
    }
}
const doomsDay = makeDate(2000, 1, 1);
const now = makeDate(Date.now());
