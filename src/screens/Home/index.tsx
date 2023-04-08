import { useContext, useEffect, useState } from "react";

import { ContainerMovies } from "@components/ContainerMovies";

import MoviesContext from "@context/Store/MovieContext";

import { Container } from "./styles";

export function Home() {

    const { getMoviesList } = useContext(MoviesContext)

    const [moviesList, setMoviesList] = useState<Array<{ title: string, items: any }>>([])

    const fetchMovies = async () => {
        let list = await getMoviesList()
        setMoviesList(list)
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <Container>
            {
                moviesList.map((movies) => {
                    return <ContainerMovies key={movies.title} category={movies.title} movies={movies.items} />
                })
            }
        </Container>
    )
}