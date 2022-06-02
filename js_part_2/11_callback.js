"use strict";

//1
function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

//Callback func
//2
function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

/* learnJS('Java', function() {  // anonymous func
    console.log('I reached your heart');
}); */

//3
function done() {
    console.log('Sick of your pleasure');
}

learnJS('Java', done);
