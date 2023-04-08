import styled from "styled-components/native"

import { TouchableOpacity, Image } from "react-native"

export const Container = styled(TouchableOpacity)`
    width: 140px;
    height: 220px;
    background-color: ${({ theme }) => theme.colors.gray_200};
    margin-right: 10px;
`;

export const ImgMovie = styled(Image).attrs({
    resizeMode: "stretch"
})`
    width: 100%;
    height: 100%;
`;