const movies = [
    {
        title: "映画1のタイトル",
        overview: "映画1のあらすじ",
        poster_path: "img/it.png"
    },
    {
        title: "映画2のタイトル",
        overview: "映画2のあらすじ",
        poster_path: ""
    },
    // 他の映画情報も同様に追加してください
];

// 各要素を取得
const movieContainer = document.getElementById('movieContainer');
const moviePoster = document.getElementById('moviePoster');
const movieTitle = document.getElementById('movieTitle');
const movieOverview = document.getElementById('movieOverview');
const randomMovieLink = document.getElementById('randomMovieLink');

function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];
    updateMovieLink(movie);
}

function updateMovieLink(movie) {
    randomMovieLink.href = `movie.html?title=${encodeURIComponent(movie.title)}&overview=${encodeURIComponent(movie.overview)}&poster=${encodeURIComponent(movie.poster_path)}`;
}

getMovieBtn.addEventListener('click', getRandomMovie);
