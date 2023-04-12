import { TouchableOpacityProps } from "react-native";

import { ButtonPlayCard } from "@components/ButtonPlayCard";

import { ButtonMenu, ButtonMenuIcon, Card, Container, ContainerActive, ImgMovie, MenuMovie } from "./styles";

type Props = TouchableOpacityProps & {
    imageUri: string
    active: boolean
}

export function MovieCard({ imageUri, active = false, ...rest }: Props) {
    return (
        <Container>
            <Card  {...rest}>
                <ImgMovie source={{ uri: imageUri }} />
            </Card>
            {active ?
                <ContainerActive>
                    <ButtonPlayCard />
                    <MenuMovie>
                        <ButtonMenu>
                            <ButtonMenuIcon name="info-outline" />
                        </ButtonMenu>
                        <ButtonMenu>
                            <ButtonMenuIcon name="more-vert" />
                        </ButtonMenu>
                    </MenuMovie>
                </ContainerActive>
                :
                <></>
            }
        </Container>
    )
}