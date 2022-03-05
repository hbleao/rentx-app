import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from 'react-native'

import { ContainerProps, TextProps } from './types';

export const Container = styled(Pressable)<ContainerProps>`
  ${({ theme,bgColor }) => css`
    width: 100%;
    padding: 24px;
    min-height: 70px;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background-color: ${bgColor ? bgColor : theme.colors.main};
  `}
`;

export const Title = styled.Text<TextProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${color ? color : theme.colors.backgroundSecondary};
  `}
`;
