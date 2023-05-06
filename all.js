let numberOfFilms;


function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function (){
        let a, c;
        for(let i = 0; i < 2; i++){
            a = prompt("Один из просмотринных фильм", "");
            c = prompt("На скоько оцените его?", "");
            if (a != null && c != null && a != '' && a.length < 50)
                personMovieDB.movies[a] = c;
            else --i;
        }
    },
    detectPersonalLevel: function (){
        // personMovieDB.count = numberOfFilms;
        if (personMovieDB.count < 10){
            alert("Мало");
        } else if (personMovieDB.count >= 10 && personMovieDB.count < 30){
            alert("Пойдёт");
        } else if (personMovieDB.count >= 30){
            alert("Отлично");
        } else {
            alert("Ошибка");
        }
    },
    showMyDB: function (){
        if (!this.privat){
            alert(personMovieDB)
        }
    },
    writeYourGenres: function (){
        let genre;
        for (let i=1; i<= 3; i++){
            genre = prompt(`Ваш любимый жанр под номером - ${i}`);
            personMovieDB.genres[i-1] = genre;
        }
    }
};
//
// function rememberMyFilms(){
//     let a, c;
//     for(let i = 0; i < 2; i++){
//         a = prompt("Один из просмотринных фильм", "");
//         c = prompt("На скоько оцените его?", "");
//         if (a != null && c != null && a != '' && a.length < 50)
//             personMovieDB.movies[a] = c;
//         else --i;
//     }
// }

// function detectPersonalLevel(){
//     personMovieDB.count = numberOfFilms;
//     if (personMovieDB.count < 10){
//         alert("Мало");
//     } else if (personMovieDB.count >= 10 && personMovieDB.count < 30){
//         alert("Пойдёт");
//     } else if (personMovieDB.count >= 30){
//         alert("Отлично");
//     } else {
//         alert("Ошибка");
//     }
// }

// function showMyDB(hidden){
//     if (!hidden){
//         alert(personMovieDB)
//     }
// }

// function writeYourGenres(){
//     for (let i=1; i<= 3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером - ${i}`);
//         personMovieDB.genres[i-1] = genre;
//     }
//     alert(personMovieDB.genres)
// }


start();
// // rememberMyFilms();
// detectPersonalLevel();
// // showMyDB(personMovieDB.privat);
// writeYourGenres();







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
