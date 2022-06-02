"use strict";

// const obj = new Object();  // old version

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};

console.log(options.name);
// console.log(options['colors']['border']);  // accessing the key


//1 DELETE
delete options.name;

console.log(options);

//2 FOR IN
for (let key in options) {
    console.log(`The property ${key} has value ${options[key]}`);
}

//2.1
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`The property ${i} has value ${options[key][i]}`);
        }
    } else {
        console.log(`The property ${key} has value ${options[key]}`);
    }
}

//3 COUNT
const differentOperations = {
    name: 'dif_test',
    width: 1086,
    height: 1086,
    colors: {
        border: 'orange',
        bg: 'white',
    }
};

let counter = 0;
for (let key in differentOperations) {
    if (typeof(differentOperations[key]) === 'object') {
        for (let i in differentOperations[key]) {
            console.log(`The property ${i} has value ${differentOperations[key][i]}`);
            counter++;  // we can delete it if want counter of the top level
        }
    } else {
        console.log(`The property ${key} has value ${differentOperations[key]}`);
        counter++;
    }
}

console.log(counter);

//4 OBJECT KEYS is better than option 3
const newObj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};

console.log(Object.keys(newObj).length);

//5 OUR OWN METHODS
const makeTestObj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log('Test');
    }
};

makeTestObj.makeTest();

//6 OBJECT DESTRUCTURING
const {border, bg} = makeTestObj.colors;
// we pulled properties as a separate variable
console.log(border);

// accessor properties GET - SET