/*jslint node: true */
"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 11;
console.log(obj);


/* hoisting  */
console.log(ourName);
/* # Old version */
var ourName = 'Ivan';


/* var can be defined but let and const are not */
{
    let result = 50;
}

/* console.log(result); */