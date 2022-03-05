import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    height: 126px;
    background-color: ${theme.colors.backgroundSecondary};
    padding: 24px;
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Details = styled.View`
  ${({ theme }) => css`

  `}
`
export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    text-transform: uppercase;
  `}
`
export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`
export const About = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `}
`
export const Rent = styled.View`
  ${({ theme }) => css`
    margin-right: 24px;
  `}
`
export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    text-transform: uppercase;
  `}
`
export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.main};
  `}
`
export const Type = styled.View`
  ${({ theme }) => css`

  `}
`
export const CardImage = styled.Image`
  ${({ theme }) => css`
    width: ${RFValue(167)}px;
    height: ${RFValue(85)}px;
  `}
`