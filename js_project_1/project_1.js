"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);


if (personalMovieDB.count < 10) {
    alert('There is not enought movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are a classic spectator!');
} else if (personalMovieDB.count >= 30) {
    alert('You are a movie maniac!');
} else {
    alert('Something goes wong:(');
}