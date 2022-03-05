import React, { useCallback, useState } from "react";
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Input,
  IconContainer,
  BottomBorder
} from "./styles";

import { useTheme } from "styled-components";

import { 
  TextInputProps
} from './types';

export const TextInput = ({
  IconName,
  value,
  ...rest
}:TextInputProps) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer>
        <Feather
          name={IconName}
          color={isFocused || isFilled ? colors.main : colors.text}
          size={24}
        />
      </IconContainer>
      <Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest} 
      />
      <BottomBorder isFocused={isFocused} />
    </Container>
  )
};
