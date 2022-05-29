"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5"); 


/* Постфиксный инкремент и декремент */
 let incrPost = 10,
    decrPost = 10;

incrPost++;
decrPost--;

console.log(incrPost);
console.log(decrPost);

/* Префиксный инкремент и декремент */
let incrPre = 15,
    decrPre = 20;

++incrPre;
--decrPre;

console.log(incrPre);
console.log(decrPre);


/* Постфиксный инкремент и декремент */
let incrPost1 = 10,
decrPost1 = 10;

console.log(incrPost1++);
console.log(decrPost1--);
/* Сначала возвращает старое значение, а потом уже уменьшает или увел. */


console.log(5 % 2);  // остаток от деления

console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 != '8');
console.log(2*4 === '8');


// && and
// || or
// ! отрицание

const isChecked = true,
    isCLose = false;

console.log(isChecked && isCLose);
console.log(isChecked || isCLose);
console.log(!isChecked || isCLose);

