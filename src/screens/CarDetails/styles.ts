import styled, { css } from "styled-components/native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundSecondary};
  `};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
  `};
`;

export const CarImages = styled.View`
  ${({ theme }) => css`
    margin-top: ${getStatusBarHeight() + 32}px;
  `};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})`
  ${({ theme }) => css`
    
  `}
`;

export const Details = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  `}
`;
export const Description = styled.View`
  ${({ theme }) => css`
  
  `}
`;
export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.title};
    font-size: ${RFValue(25)}px;
  `}
`;

export const Rent = styled.View`
  ${({ theme }) => css`
  
  `}
`;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.main};
    font-size: ${RFValue(25)}px;
  `}
`;

export const About = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;
    margin-top: 24px;
    line-height: ${RFValue(25)}px;
  `}
`;

export const Accessories = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.backgroundSecondary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
  `}
`;
