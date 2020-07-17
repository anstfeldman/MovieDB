let numberOfFilms = +prompt(
  "Сколько фильмов вы смотрели?", "");
let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genre: [],
private: false
};

for (let i = 0; i < numberOfFilms; i++) {
let movieName = prompt("Один из последних просмотренных фильмов?", "");
while (movieName === null || movieName.length === 0 || movieName.length > 50) {
  movieName = prompt("Один из последних просмотренных фильмов?", "");
} 
let movieRate = +prompt("На сколько оцените его?", "");
while (movieRate === null || movieRate.length === 0 || movieRate.length > 50) {
  movieRate = +prompt("На сколько оцените его?", "");
  personalMovieDB.movies[movieName] = movieRate;  
}
  
}

if (personalMovieDB.count < 10) {
alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
alert('Вы киноман');
} else {
alert('Произошла ошибка');
}

console.log(personalMovieDB);