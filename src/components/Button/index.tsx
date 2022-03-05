import React from 'react';
import { useTheme } from 'styled-components';

import { Loader } from '../Loader';

import { 
  Container,
  Title
} from './styles';

import { ButtonProps } from './types';

export const Button = ({
  title,
  color,
  bgColor,
  colorLoader,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <Container
      bgColor={bgColor}
      onPress={onPress}
      disabled={!enabled}
      style={{ opacity: enabled ? 1 : .7 }}
      {...rest}
    >
      {loading
        ? <Loader color={colorLoader ? colorLoader : colors.backgroundPrimary } />
        : <Title color={color}>{title}</Title>
      }
    </Container>
  )
}
