import React from 'react';

import { 
  Container,
  Title
} from './styles';

import { ConfirmButtonProps } from './types';

export const ConfirmButton = ({
  title,
  onPress,
}: ConfirmButtonProps) => {

  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}
