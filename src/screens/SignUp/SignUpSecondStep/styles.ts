import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 64px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.fonts.secondary_600};
    color: ${theme.colors.title};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
    margin-bottom: 24px;
  `}
`;
