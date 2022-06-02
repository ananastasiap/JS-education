"use strict";

const arr = [1, 2, 3, 6, 8];

console.log(arr.length);

//1 POP - end
arr.pop();
console.log(arr);

//2 PUSH - end
arr.push(10);
console.log(arr);

//3
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//3.1 FOR OF only with array-like
// has break and continue unlike 5
for (let value of arr) {
    console.log(value);
}

//4 Logic is broken
const arr1 = [1, 2, 3, 5, 7];
arr1[99] = 0;
console.log(arr1.length);
console.log(arr1);

//5 FOR EACH
const arr2 = [1, 2, 3, 6, 8];
arr2.forEach(function(item, i, arr2) {
    console.log(`${i}: ${item} inside the array ${arr2}`);
});

//6 SPLIT
const str = prompt('What do you need?', '');
const products = str.split(', ');
console.log(products);

//7 JOIN
const toys = prompt('What toys do you need?', '');
const divideToys = toys.split(', ');
console.log(divideToys.join('; '));

//8 SORT
const tshirt = prompt('What T-shirts do you need?', '');
const sortTshirts = tshirt.split(', ');
sortTshirts.sort();  // sorts as strings [even numbers]
console.log(divideToys.join('; '));

//8.1
const numArr = [1, 4, 6, 3, 11, 0];
numArr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(numArr);