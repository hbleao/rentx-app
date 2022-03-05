import React from 'react';

import { 
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage
} from './styles';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { CarData } from './types';

export const Car = ({
  data,
  onPress
}: CarData) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container onPress={onPress} >
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>R$ {data.price}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CardImage 
        source={{ uri: data.thumbnail}}
        resizeMode='contain'
      />
    </Container>
  )
}