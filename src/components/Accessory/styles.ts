import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 112px;
    height: 92px;
    background-color: ${theme.colors.backgroundPrimary};
    padding: 16px;
    margin-bottom: 8px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text};
    font-size: ${RFValue(13)}px;
    margin-top: 8px;
  `}
`;
