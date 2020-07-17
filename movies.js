let numberOfFilms = +prompt(
    "Сколько фильмов вы смотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genre: [],
  private: false
};
let movieName = prompt("Один из последних просмотренных фильмов?", "");
let movieRate = +prompt("На сколько оцените его?", "");
let movieName2 = prompt("Один из последних просмотренных фильмов?", "");
let movieRate2 = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[movieName] = movieRate;
personalMovieDB.movies[movieName2] = movieRate2;

console.log(personalMovieDB);
