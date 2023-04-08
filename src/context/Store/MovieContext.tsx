import { createContext } from "react";

type PopularMovies = {
    getMoviesList: () => Promise<any>
}

const MoviesContext = createContext<PopularMovies>({
    getMoviesList: async () => Promise<any>
});

export default MoviesContext;