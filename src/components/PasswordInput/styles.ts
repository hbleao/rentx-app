import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import { ContainerPros } from "./types";

export const Container = styled.View<ContainerPros>`
  ${({ theme, isFocused }) => css`
    flex-direction: row;
    background-color: ${theme.colors.backgroundSecondary};
    border-bottom-color: ${isFocused ? theme.colors.main : 'transparent' };
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

export const ChangePasswordVisibilityButton = styled(TouchableOpacity)`
  ${({ theme }) => css`
    height: 56px;
    width: 56px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  `}
`;
