import React from "react";
import { View } from "react-native";

import { SeparatorProps } from './types';

export const Separator = ({ height }: SeparatorProps) => {

  return (
    <View style={{ height }} />
  )
};
