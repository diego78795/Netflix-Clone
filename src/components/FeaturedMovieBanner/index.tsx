import { ButtonPlay } from "@components/ButtonPlay";
import { ButtonBanner } from "@components/ButtonBanner";

import { Container, ContainerButtons, Text, Gradient, Title } from "./styles";

type Props = {
    movieFeatured: {
        genres: Array<any>,
        backdrop_path: string,
        name: string
    }
}

export function FeaturedMovieBanner({ movieFeatured }: Props) {

    return (
        <Container source={{ uri: `https://image.tmdb.org/t/p/original${movieFeatured.backdrop_path}` }}>
            <Gradient>
                <Title>
                    {movieFeatured.name}
                </Title>
                <Text> Série
                    {movieFeatured.genres === undefined ? "" :
                        movieFeatured.genres.map((genre) => {
                            return ` ● ${genre.name}`
                        })}
                </Text>
                <ContainerButtons>
                    <ButtonBanner
                        nameIcon="add"
                        text="Minha lista"
                    />
                    <ButtonPlay />
                    <ButtonBanner
                        nameIcon="info-outline"
                        text="Info"
                    />
                </ContainerButtons>
            </Gradient>
        </Container>
    )
}