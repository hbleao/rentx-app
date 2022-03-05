import styled, { css } from "styled-components/native";

import { BulletProps } from './types';

export const Container = styled.View<BulletProps>`
  ${({ theme, active }) => css`
    width: 6px;
    height: 6px;
    background-color: ${active ? theme.colors.title : theme.colors.shape};
    margin-left: 8px;
    border-radius: 6px;
  `};
`;