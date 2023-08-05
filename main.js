// main.js
const movies = [
    {
      id: 1,
      title: 'IT',
      genre: 'ホラー',
      img: 'img/it.jpeg',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 2,
      title: 'きっと、うまくいく',
      genre: '人生のエッセンス',
      img: './img/three-idiots.jpeg',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 3,
      title: 'サマーウォーズ',
      genre: '夏に見たい映画',
      img: '',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 4,
      title: 'Mission: Impossible',
      genre: 'アクション映画',
      img: '',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 5,
      title: 'Back to the Future',
      genre: 'SF映画',
      img: '',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 6,
      title: 'コンフィデンスマンJP',
      genre: 'コメディ映画',
      img: '',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 7,
      title: 'ラ・ラ・ランド',
      genre: 'ロマンス映画',
      img: '',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    {
      id: 8,
      title: 'クレヨンしんちゃん　嵐を呼ぶモーレツ！オトナ帝国の逆襲',
      genre: '泣ける映画',
      img: '',
      movie_link: 'https://wwws.warnerbros.co.jp/itthemovie/',
    },
    // 追加の映画情報をここに追加
  ];
  
  function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }
  
  function displayMovieInfo(movie) {
    const movieInfoDiv = document.createElement('div');
    // ここから下にHTMLを書く
    movieInfoDiv.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>ジャンル: ${movie.genre}</p>
      <a href="${movie.movie_link}" target="_blank">映画の詳細を見る</a>
    `;
    document.body.appendChild(movieInfoDiv);
  }
  
  document.getElementById('showMovieButton').addEventListener('click', () => {
    // 一旦表示されている映画情報を削除する
    const previousMovie = document.querySelector('div');
    if (previousMovie) {
      document.body.removeChild(previousMovie);
    }
  
    // ランダムな映画情報を表示する
    const randomMovie = getRandomMovie();
    displayMovieInfo(randomMovie);
  });
  