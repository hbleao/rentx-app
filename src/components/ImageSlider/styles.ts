import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
  `};
`;

export const ImageIndexes = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
  `};
`;

export const CarImageWrapper = styled.View`
  ${({ theme }) => css`
    width: ${Dimensions.get('window').width}px;
    height: ${RFValue(132)}px
    justify-content: center;
    align-items: center;
  `};
`;

export const CarImage = styled.Image`
  ${({ theme }) => css`
    width: ${RFValue(280)}px;
    height: ${RFValue(132)}px
  `};
`;
