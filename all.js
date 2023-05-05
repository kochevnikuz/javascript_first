const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a, c;
for(let i = 0; i < 2; i++){
    a = prompt("Один из просмотринных фильм", "");
    c = prompt("На скоько оцените его?", "");
    if (a != null && c != null && a != '' && a.length < 50)
        personMovieDB.movies[a] = c;
    else --i;
}

if (numberOfFilms < 10)
    alert("Мало");
else if (numberOfFilms >= 10 && numberOfFilms < 30)
    alert("классик");
else if (numberOfFilms => 30)
    alert("Отлично");
else alert('Ошибка')


// const a = prompt("Один из просмотринных фильм", "");
// const b = prompt("На скоько оцените его?", "");
// const c = prompt("Один из просмотринных фильм", "");
// const d = prompt("На скоько оцените его?", "");

// personMovieDB.movies[a] = b;
// personMovieDB.movies[c] = d;

// document.write(personMovieDB)

// let num = 60;
//
// while (++num<65) {
//     console.log(num);
// }
