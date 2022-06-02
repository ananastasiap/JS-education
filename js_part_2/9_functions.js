"use strict";

// 1 Function declaration
// We can use functions before they were created
function showFirstMessage() {
    console.log('Hello!');
}

showFirstMessage();

// 2
function showSecondMessage(text) {
    console.log(text);
}

showSecondMessage('Hello, my dear!');

// 3
let num = 20;  // global variable

function showThirdMessage(text) {
    console.log(text);
    // let num = 20;  // local variable
    num = 20;
}

showThirdMessage('Hello, my dear!');
console.log(num);

// 4
function showFourthdMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFourthdMessage('Hello, my dear!');
console.log(num);

// 5
function calc(a, b) {
    return (a + b);
    // console.log('unreachable code');
}

console.log(calc(5, 6));
console.log(calc(5, 7));
console.log(calc(5, 8));
console.log(calc(5, 9));

// 6
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// 7 Function expression
// We can use them only after creation
const logger = function() {
    console.log('Hello!');

};
logger();

// 8 Стрелочная функция
const calcul = (a, b) => a + b;

const calcula = a => a + 3;

const calculat = (a, b) => {
    console.log('1');
    return a + b;
};
