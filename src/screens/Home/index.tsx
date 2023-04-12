import { useContext, useEffect, useState } from "react";

import { ContainerMovies } from "@components/ContainerMovies";
import { FeaturedMovieBanner } from "@components/FeaturedMovieBanner";

import MoviesContext from "@context/Store/MovieContext";

import { Container } from "./styles";

export function Home() {

    const { getMoviesList, getFeaturedMovie } = useContext(MoviesContext)

    const [moviesList, setMoviesList] = useState<Array<{ title: string, items: any }>>([])
    const [movieFeatured, setMovieFeatured] = useState({ genres: [], backdrop_path: "", name: "" })

    const fetchMovies = async () => {
        let list = await getMoviesList()
        let movie = await getFeaturedMovie()
        setMoviesList(list)
        setMovieFeatured(movie)
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <Container>
            <FeaturedMovieBanner movieFeatured={movieFeatured} />
            {
                moviesList.map((movies) => {
                    return <ContainerMovies key={movies.title} category={movies.title} movies={movies.items} />
                })
            }
        </Container>
    )
}