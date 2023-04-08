import { Container, ImgMovie } from "./styles";

type Props = {
    imageUri: string
}

export function MovieCard({ imageUri }: Props) {
    return (
        <Container>
            <ImgMovie source={{ uri: imageUri }} />
        </Container>
    )
}