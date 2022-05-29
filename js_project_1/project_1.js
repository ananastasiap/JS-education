"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const questOne = prompt("Один из последних просмотренных фильмов?", ""),
      questTwo = prompt("На сколько оцените его?", ""),
      questThree = prompt("Один из последних просмотренных фильмов?", ""),
      questFour = prompt("На сколько оцените его?", "");


personalMovieDB.movies[questOne] = questTwo;  // лучше использовать [], чтобы избежать багов, НЕ movies.questOne
personalMovieDB.movies[questThree] = questFour;

console.log(personalMovieDB);