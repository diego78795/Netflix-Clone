import { Container, Text, Icon } from "./styles";

type Props = {
    nameIcon: string,
    text: string
}

export function ButtonBanner({ nameIcon, text }: Props) {

    return (
        <Container>
            <Icon name={nameIcon} />
            <Text>
                {text}
            </Text>
        </Container>
    )
}