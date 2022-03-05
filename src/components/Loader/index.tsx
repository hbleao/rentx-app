import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { LoaderProps } from './types';

export const Loader = ({ color }: LoaderProps) => {
  const { colors } = useTheme();

  return (
    <ActivityIndicator 
      size="small"
      color={color ? color : colors.main}
      style={{ flex: 1 }}
    />
  )
}
