"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// If this element is exist, then true, if not then false
if (1) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// Branching
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log(num + ' - okay!');
}

// Ternary operator
(num === 50) ? console.log('Ok!') : console.log('Error');

// Switch construction
const number = 50;

switch (number) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 51:
        console.log('Okay');
        break;
    default:
        console.log('Nothing is accepted');
        break;
}
// The same actions can be done with strings