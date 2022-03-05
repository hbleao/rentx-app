import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

import { ContainerPros } from "./types";

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    background-color: ${theme.colors.backgroundSecondary};

  `}
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    height: 56px;
    width: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 2px;
    border-right-color: ${theme.colors.backgroundPrimary};
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    padding: 0 24px;
  `}
`;

export const BottomBorder = styled.View<ContainerPros>`
  ${({ theme, isFocused }) => css`
    width: 100%;
    height: ${isFocused ? '3px' : '0px' };
    background-color: ${theme.colors.main};
    position: absolute;
    bottom: 0px;
  `}
`;
