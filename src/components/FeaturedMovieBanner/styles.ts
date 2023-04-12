import styled, { css } from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient";

import { ImageBackground } from "react-native"

export const Container = styled(ImageBackground)`
    width: 100%;
    height: 600px;
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', 'rgb(0, 0, 0)']
})`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
    gap: 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.montserrat_black};
        font-size: ${theme.font_size.Banner}px;
        color: ${theme.colors.white};
    `};
    text-align: center;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.montserrat_medium};
        font-size: ${theme.font_size.LG}px;
        color: ${theme.colors.white};
    `};
    text-align: center;
`;

export const ContainerButtons = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;