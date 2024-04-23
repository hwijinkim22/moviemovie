document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '3e497d40228bee95459d85efc2bf05bb';
    const apiUrl = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
});

document.querySelector('.movieList');

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ5N2Q0MDIyOGJlZTk1NDU5ZDg1ZWZjMmJmMDViYiIsInN1YiI6IjY2MjVkOGUzMjIxYmE2MDE3YzE1NDFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keiIpGDChWtbTznZMR_4txVLkOE7q2avZ8AYrC1ILsU'
    }
};

fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        let movies = data.results;
        showMovies(movies)
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
