import styled, { css } from "styled-components/native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.header};
    padding-top: ${getStatusBarHeight() + 16}px;
    padding-bottom: ${getBottomSpace() + 24}px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(30)}px;
    font-family: ${theme.fonts.secondary_600};
    color: ${theme.colors.shape};
    margin-top: 16px;
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text_detail};
    text-align: center;
    margin-top: 16px;
    line-height: ${RFValue(25)}px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    align-items: center;
    margin-top: 32px;
  `}
`;
