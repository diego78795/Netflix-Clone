import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons"

import { TouchableOpacity } from "react-native"


export const Container = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    width: 90px;
`;

type Props = {
    name: string
}

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, name }) => ({
    name: name,
    color: theme.colors.white,
    size: 30
}))`
    align-self: center;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.montserrat_medium};
        font-size: ${theme.font_size.LG}px;
        color: ${theme.colors.white};
    `};
    text-align: center;
`;