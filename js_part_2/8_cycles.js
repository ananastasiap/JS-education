"use strict";

let num = 50;

// 1st
while (num <= 55) {
    console.log(num);
    num++;
}

// 2nd
do {
    console.log(num);
    num++;
}
while (num < 55);

// 3rd
for (let i = 1; i < 8; i++) {
    console.log(i);
    i++;
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}