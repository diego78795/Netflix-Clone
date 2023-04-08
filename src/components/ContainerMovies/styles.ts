import styled, { css } from "styled-components/native";

export const Container = styled.View`
    margin-left: 7px;
    margin-top: 11px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.montserrat_semibold};
        font-size: ${theme.font_size.XL}px;
        color: ${theme.colors.white};
    `};
    margin-bottom: 11px;

`;