"use strict";

//1
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

//2
const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

//3 copy our object
function copyObj(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);
// shallow copies
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

// changes in both objects
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

//4 OBJECT ASSIGN
// independent shallow copy of an object
const toAdd = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(toAdd, add));

//4.1
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

//5 Copy of an array
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abcdefghijklmnopqrstuvwxyz';
console.log(newArray);
console.log(oldArray);

// ES6 ... - spread operator
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'tg', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// ES8
const array = ['a', 'b'];
const newArrray = [...array];

//7
const q = {
    one: 1,
    two: 2
};

const newQ = {...q};
console.log(newQ);