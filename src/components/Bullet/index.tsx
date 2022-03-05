import React from "react";

import { 
  Container,
} from "./styles";

import { BulletProps } from './types';

export const Bullet = ({ active = false }: BulletProps) => {

  return (
    <Container active={active} />
  )
}
