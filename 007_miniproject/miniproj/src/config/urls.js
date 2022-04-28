const baseURL = "https://api.themoviedb.org/3/";

const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2IwMTk0YWY2OWU5M2IxZDhhYzU4NzgwYTZlYjYxMCIsInN1YiI6IjYyMDAzY2Q1MDA1MDhhMDA2N2RmMmI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tVZsvo7U1u2FSs1uF_9Uoc5wnP39RuJUfR62esA938g"
};

const urls = {
    movie: "movie",
    discover_movie: "discover/movie",
    genres_movie_list: "genre/movie/list"
};

export {headers, baseURL, urls};