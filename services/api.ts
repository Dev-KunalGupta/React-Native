export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, { method: 'GET', headers: TMDB_CONFIG.headers })

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText)
    }
    // The Proper Fix
    //     if (!response.ok) {
    //   throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    // }
    // O/P -> Error: Failed to fetch movies: 404 Not Found


    const data = await response.json()
    return data.results;
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