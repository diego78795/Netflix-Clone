import { createContext } from "react";

type PopularMovies = {
    getMoviesList: () => Promise<any>
    getFeaturedMovie: () => Promise<any>
}

const MoviesContext = createContext<PopularMovies>({
    getMoviesList: async () => Promise<any>,
    getFeaturedMovie: async () => Promise<any>
});

export default MoviesContext;