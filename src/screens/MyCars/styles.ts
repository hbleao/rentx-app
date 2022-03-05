import styled, { css } from "styled-components/native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: ${getBottomSpace() + 24}px;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.header};
    padding: ${getStatusBarHeight() + 32}px 24px 32px;
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

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.secondary_400};
    font-size: ${RFValue(15)}px;
    margin-top: 24px;
  `}
`;

export const Appointment = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
  `}
`;

export const AppointmentsQuantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
  `}
`;

export const AppointmentsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    padding: 0 24px;
  `}
`;

export const CarWrapper = styled.View`
  ${({ theme }) => css`
    margin-bottom: 16px;
  `}
`;

export const CarFooter = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.backgroundSecondary};
    padding: 12px;
    margin-top: -10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const CarTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
  `}
`;

export const CarFooterPeriod = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
  `}
`;

export const CarFooterDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.title};
  `}
`;