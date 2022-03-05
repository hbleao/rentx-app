import React from 'react';

import { 
  Container,
  Name
} from './styles';

import { AccessoryProps } from './types';

export const Accessory = ({
  name,
  icon: Icon
}: AccessoryProps) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  )
}
