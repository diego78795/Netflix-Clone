
import { ReactNode } from "react";
import Context from "./MovieContext";
import { apiOriginals, apiTrending, apiTopRated, apiGenreMovies } from "../../services/api";

type Props = {
    children: ReactNode;
}

const MoviesProvider = ({ children }: Props) => {
    const getMoviesList = async () => {
        return [
            {
                title: 'Originais do Netflix',
                items: await apiOriginals()
            },
            {
                title: 'Recomendados para Você',
                items: await apiTrending()
            },
            {
                title: 'Em Alta',
                items: await apiTopRated()
            },
            {
                title: 'Romance/Drama',
                items: await apiGenreMovies(18)
            },
            {
                title: 'Ação',
                items: await apiGenreMovies(28)
            },
            {
                title: 'Comedia',
                items: await apiGenreMovies(35)
            },
            {
                title: 'Aventura',
                items: await apiGenreMovies(12)
            },
            {
                title: 'Documentarios',
                items: await apiGenreMovies(99)
            },
        ]
    }

    return (
        <Context.Provider value={{
            getMoviesList
        }}>
            {children}
        </Context.Provider>
    )
}

export default MoviesProvider;