import styled from "styled-components/native"

import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity, Image } from "react-native"

export const Container = styled.View`
    width: 140px;
    height: 220px;
    margin-right: 10px;
`;

export const Card = styled(TouchableOpacity)`
    flex:1;
    background-color: ${({ theme }) => theme.colors.gray_200};
`;

export const ImgMovie = styled(Image).attrs({
    resizeMode: "stretch"
})`
    flex:1;
`;

export const ContainerActive = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const MenuMovie = styled.View`
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.gray_400};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ButtonMenu = styled(TouchableOpacity)`
    width: 30px;
    height: 30px;
`;

type Props = {
    name: string;
}

export const ButtonMenuIcon = styled(MaterialIcons).attrs<Props>(({ theme, name }) => ({
    name: name,
    color: theme.colors.white,
    size: 30
}))``;