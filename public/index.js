"use strict";
function great(username) {
    return `Hello, ${username.name}`;
}
console.log(great({ name: "Yoseph", birthDate: 45 }));
