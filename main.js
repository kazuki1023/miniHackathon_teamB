// ハンバーガーメニュー
document.querySelector('.header-button').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
});

// main.js
const movies = [
  {
    id: 1,
    title: "IT",
    genre: "ホラー",
    img: "./assets/img/img-it.webp",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 2,
    title: "きっと、うまくいく",
    genre: "人生のエッセンス",
    img: "./assets/img/img-3idiots.jpg",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 3,
    title: "サマーウォーズ",
    genre: "夏に見たい映画",
    img: "./assets/img/img-summerwars.jpg",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 4,
    title: "Mission: Impossible",
    genre: "アクション映画",
    img: "./assets/img/img-MIP.jpg",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 5,
    title: "Back to the Future",
    genre: "SF映画",
    img: "./assets/img/img-BTF.png",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 6,
    title: "コンフィデンスマンJP",
    genre: "コメディ映画",
    img: "./assets/img/img-confidencemanJP.jpg",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 7,
    title: "ラ・ラ・ランド",
    genre: "ロマンス映画",
    img: "./assets/img/img-LALALAND.jpg",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  {
    id: 8,
    title: "クレヨンしんちゃん　嵐を呼ぶモーレツ！オトナ帝国の逆襲",
    genre: "泣ける映画",
    img: "./assets/img/img-otonateikoku.jpg",
    movie_link: "https://wwws.warnerbros.co.jp/itthemovie/",
  },
  // 追加の映画情報をここに追加
];

function getRandomMovie() {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

function displayMovieInfo(movie) {
  // 新しいdiv要素を作成して映画情報を表示する
  const movieInfoContainer = document.getElementById("movieInfoContainer");
  // const movieInfoDiv = document.createElement("div");
  movieInfoContainer.innerHTML = `
      <img src="${movie.img}" alt="${movie.title} " width="250px" height="150px"class="movie-img-size">
      <div class="movie-content">
      <h2>${movie.title}</h2>
      <p>ジャンル: ${movie.genre}</p>
      <a href="${movie.movie_link}" target="_blank">映画の詳細を見る</a>
      </div>
    `;
  movieInfoContainer.style.display = "block";
  // movieInfoContainer.appendChild(movieInfoDiv);
}

document.getElementById("showMovieButton").addEventListener("click", () => {
  // 一旦表示されている映画情報を削除する
  const previousMovie = document.querySelector("#movieInfoContainer div");
  if (previousMovie) {
    previousMovie.remove();
  }
  // ランダムな映画情報を表示する
  const randomMovie = getRandomMovie();
  displayMovieInfo(randomMovie);
});
