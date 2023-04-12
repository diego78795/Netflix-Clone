import styled, { css } from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons"

import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
    name: "play",
    color: theme.colors.black,
    size: 20
}))``;

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-family: ${theme.font_family.montserrat_semibold};
        font-size: ${theme.font_size.LG}px;
    `};
`;