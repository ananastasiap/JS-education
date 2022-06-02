"use strict";

const str = "test";
const arr = [1, 2, 3];

console.log(str.length);  // свойство
console.log(arr.length);

// STRING
//1
const firstStr = 'testing';
console.log(firstStr[2]);

//2
const a = 'teSt';

console.log(a.toUpperCase());

//3
console.log(a.toLowerCase());

//4
const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

//5
const logg = 'Hello world';

console.log(logg.slice(6, 11));
console.log(logg.slice(0, 5));
console.log(logg.slice(6));
console.log(logg.slice(-5, -2));

//6
const b = 'Hello world';

console.log(b.substring(6, 11));  
// можно задавать первый аргумент больше, чем второй
// не поддерживает отрицательные значения

//7
const string = "HelloLworld";

console.log(string.substr(6, 5)); // 5 is a length


// INTEGERS
//1 Math is a labriary
const number = 12.2;
console.log(Math.round(number));

//2
const test = '12.2px';
console.log(parseInt(test));

//3
console.log(parseFloat(test));

