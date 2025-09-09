export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzkxNjBlYjVmNjE4Y2VkMGI5NDk3ZWU3ODQyMTJiZiIsIm5iZiI6MTc1NzQyMDYyMS42NzIsInN1YiI6IjY4YzAxYzRkMzRmNzVkMWUzZTk4Yzk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Da-zWHWUeLXx9GLls1W9IsHBB7fE6LS9APCTFC_CUcA'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));