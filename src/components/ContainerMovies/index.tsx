import { MovieCard } from "@components/MovieCard";

import { Container, Title } from "./styles";
import { FlatList } from "react-native";

type Props = {
    category: string
    movies: Array<{ id: string, uri: string }>
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
                    <MovieCard imageUri={item.uri} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    )
}