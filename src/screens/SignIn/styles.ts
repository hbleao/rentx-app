import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 24px ${getBottomSpace() + 24}px;
    background-color: ${theme.colors.backgroundPrimary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 75}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.title};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
  `}
`;

export const Form = styled.View`
  ${({ theme }) => css`
    margin-top: 64px;
  `}
`;

export const Inputs = styled.View`
  ${({ theme }) => css`

  `}
`;

export const Buttons = styled.View`
  ${({ theme }) => css`
    margin-top: 64px;
  `}
`;
