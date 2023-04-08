import { MovieCard } from "@components/MovieCard";

import { Container, Title } from "./styles";
import { FlatList } from "react-native";

type Props = {
    category: string
    movies: Array<{ id: string, poster_path: string }>
}

export function ContainerMovies({ category, movies }: Props) {
    return (
        <Container>
            <Title>
                {category}
            </Title>
            <FlatList
                data={movies}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <MovieCard imageUri={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    )
}