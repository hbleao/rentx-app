import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import { 
  OptionProps,
  OptionTitleProps
} from "./types";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundPrimary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 227px;
    background-color: ${theme.colors.header};
    padding: 0 24px;
    align-items: center;
  `}
`;

export const HeaderTop = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + 32}px;
  `}
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(24)}px;
    font-family: ${theme.fonts.secondary_600};
    color: ${theme.colors.shape};
  `}
`;

export const LogoutButton = styled(Pressable)`
  ${({ theme }) => css`
  `}
`;

export const PhotoContainer = styled.View`
  ${({ theme }) => css`
    height: 180px;
    width: 180px;
    border-radius: 90px;
    background-color: ${theme.colors.shape};
    margin-top: 48px;
  `}
`;

export const Photo = styled.Image`
  ${({ theme }) => css`
    height: 180px;
    width: 180px;
    border-radius: 90px;
  `}
`;

export const PhotoButton = styled(Pressable)`
  ${({ theme }) => css`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: ${theme.colors.main};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 24px;
    margin-top: 122px;
  `}
`;

export const ContentOptions = styled.View`
  ${({ theme }) => css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.line};
    margin-bottom: 24px;
    flex-direction: row;
    justify-content: space-around;
  `}
`;

export const Option = styled(Pressable)<OptionProps>`
  padding-bottom: 14px;

  ${({ theme, active }) => active && css`
    border-bottom-width: 3px;
    border-bottom-color: ${theme.colors.main};
  `}
`;

export const OptionTitle = styled.Text<OptionTitleProps>`
  ${({ theme, active }) => css`
    font-size: ${RFValue(20)}px;
    font-family: ${active ? theme.fonts.secondary_500 : theme.fonts.secondary_600};
    color: ${active ? theme.colors.header : theme.colors.text_detail};
  `}
`;

