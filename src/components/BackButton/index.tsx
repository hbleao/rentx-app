import React from 'react';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

import { BackButtonProps } from './types';

export const BackButton = ({ color, onPress }: BackButtonProps) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <MaterialIcons 
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  )
}