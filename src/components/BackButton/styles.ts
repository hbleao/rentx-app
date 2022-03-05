import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";

export const Container = styled(Pressable)`
  ${({ theme }) => css`
    padding: 8px 8px 8px 0px;
  `};
`;
