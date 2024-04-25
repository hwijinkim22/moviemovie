const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ5N2Q0MDIyOGJlZTk1NDU5ZDg1ZWZjMmJmMDViYiIsInN1YiI6IjY2MjVkOGUzMjIxYmE2MDE3YzE1NDFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keiIpGDChWtbTznZMR_4txVLkOE7q2avZ8AYrC1ILsU',
    }
}

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let topMovies = response.results;
        showMovieList(topMovies); // TMDB 사이트 result 배열 가져오기
    })
    .catch(err => console.error(err));
// 검색 필터 기능 구현하기
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput')
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const val = searchInput.value.toLowerCase();
        console.log(val);
        showMovieList(val);
    })


// html에 영화 리스트 카드 만들기 
function showMovieList(movies) {
    const movieListBox = document.querySelector('.movieList');
    movieListBox.innerHTML = ""; // innerHTML = "";을 써줌으로써 본격적으로 아래에서 카드를 반환하기 전에 빈 화면 선언

    movies.forEach(movie => {
        let movieCard = document.createElement('div'); // div 만들어 주기
        movieCard.classList.add('card'); // 위에 생성한 div에 클래스 card 부여
        movieCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>  
                    <h4 class="movieTitle">${movie.title}</h4>
                        <p class="overView">영화 줄거리<br><br>${movie.overview}</p>
                        <p class="rating">👍평점:${movie.vote_average}</p>
                    </div>
                </div>`;
                // 영화 클릭 시 해당 영화 id 알럿창
                movieCard.addEventListener('click', function () {
                    alert("영화 ID=" + `${movie.id}`);
                })
        movieListBox.appendChild(movieCard);
    })
};