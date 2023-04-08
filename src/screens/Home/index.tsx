import { ContainerMovies } from "@components/ContainerMovies";

import { Container } from "./styles";

export function Home() {

    const movies = [
        {
            id: "1",
            uri: "https://image.tmdb.org/t/p/w300/6GE5FwsQIQKNDWkSEBVIWYx7zCK.jpg"
        },
        {
            id: "2",
            uri: "https://image.tmdb.org/t/p/w300/6GE5FwsQIQKNDWkSEBVIWYx7zCK.jpg"
        },
        {
            id: "3",
            uri: "https://image.tmdb.org/t/p/w300/6GE5FwsQIQKNDWkSEBVIWYx7zCK.jpg"
        },
        {
            id: "4",
            uri: "https://image.tmdb.org/t/p/w300/6GE5FwsQIQKNDWkSEBVIWYx7zCK.jpg"
        }
    ]
    return (
        <Container>
            <ContainerMovies category="Originais do Netflix" movies={movies} />
            <ContainerMovies category="Recomendados para Você" movies={movies} />
            <ContainerMovies category="Em Alta" movies={movies} />
            <ContainerMovies category="Romance/Drama" movies={movies} />
        </Container>
    )
}