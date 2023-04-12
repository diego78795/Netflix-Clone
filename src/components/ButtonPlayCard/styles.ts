import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";

export const Contaier = styled(TouchableOpacity)`
    ${({ theme }) => css`
        border: 2px solid ${theme.colors.white};
        background-color: ${theme.colors.gray_200};
    `};
    width: 65px;
    height: 65px;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    opacity: 0.9;
    margin: auto;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    name: "play-arrow",
    color: theme.colors.white,
    size: 40
}))`
    align-self: center;
`;