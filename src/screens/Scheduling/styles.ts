import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { DateValueProps } from "./types";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundSecondary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.header};
    padding: ${getStatusBarHeight() + 32}px 24px 0px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    color: ${theme.colors.shape};
    margin-top: 24px;
  `}
`;

export const RentalPeriod = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
  `}
`;

export const DateInfo = styled.View<DateValueProps>`
  ${({ theme, selected }) => css`
    width: 33%;
    border-bottom-color: ${theme.colors.shape};
    border-bottom-width: 1px;
    padding-bottom: ${selected ? '5px' : '10px'};
  `}
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
  `}
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})`
  ${({ theme }) => css`

  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    padding: 24px;
  `}
`;
