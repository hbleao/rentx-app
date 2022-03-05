import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableHighlight } from "react-native";

export const Container = styled(TouchableHighlight)`
  ${({ theme }) => css`
    width: 80px;
    height: 56px;
    background-color: ${theme.colors.shape_dark};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`;
