import React from 'react';
import { TextInputProps as InputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type TextInputProps = InputProps & {
  IconName: React.ComponentProps<typeof Feather>['name'];
}

export type ContainerPros = {
  isFocused: boolean;
}
