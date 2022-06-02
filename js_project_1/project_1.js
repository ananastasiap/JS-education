"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const questOne = prompt("Один из последних просмотренных фильмов?", ""),
              questTwo = prompt("На сколько оцените его?", "");
    
        if (questOne != null && questTwo != null && questOne != '' && questTwo != '' && questOne.length <50) {
            personalMovieDB.movies[questOne] = questTwo;
            console.log('OK');
        } else {
            console.log('ERROR');
            i--;
        }
    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('There is not enought movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic spectator!');
    } else if (personalMovieDB.count >= 30) {
        alert('You are a movie maniac!');
    } else {
        alert('Something goes wong:(');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

//My version
/* function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
} */

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // Начинаем с 1-го для пользователя
        /* const genre = prompt(`Ваш любимый жанр под номером ${i}`);  // ${номер по порядку}
        personalMovieDB.genres[i - 1] = genre; */
        // Вычитаем 1, т.к. начинали не с 0, а с 1-го
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();