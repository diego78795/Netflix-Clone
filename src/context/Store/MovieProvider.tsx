
import { ReactNode } from "react";
import Context from "./MovieContext";
import { apiOriginals, apiTrending, apiTopRated, apiGenreMovies, apiTv } from "../../services/api";

type Props = {
    children: ReactNode;
}

const MoviesProvider = ({ children }: Props) => {

    const getFeaturedMovie = async () =>{
        const movies = await apiOriginals()
        const randomMovie = Math.floor(Math.random()*(movies.length - 1))
        const idRandomMovie = movies[randomMovie].id
        let res = await apiTv(idRandomMovie)
        return res
    }

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
            getMoviesList,
            getFeaturedMovie
        }}>
            {children}
        </Context.Provider>
    )
}

export default MoviesProvider;