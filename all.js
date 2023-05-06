let numberOfFilms;


function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

const personMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personMovieDB.count === '' || personMovieDB.count == null || isNaN(personMovieDB.count)) {
            personMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
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
            alert("Ok База открыта")
        } else alert('Sorry')
    },
    writeYourGenres: function (){
        // let genre;

        for(let i = 1; i<=1; i++){
            let genre = prompt(`Ваш любимый жанр через запятую`);
            if (genre == null || genre === '')
            {
                i--;
            }
            else{
                personMovieDB.genres = genre.split(', ');
            }
        }

        personMovieDB.genres.sort();
        personMovieDB.genres.forEach(function (item, i){
            console.log(`Любимый жанр #${i+1} - это ${item}`)
        })
    },
    toggleVisibleMyDB: function (){
        // this.privat = !this.privat;
        personMovieDB.privat = !personMovieDB;
    }
};

personMovieDB.start();