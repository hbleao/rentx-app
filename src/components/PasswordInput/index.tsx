import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Input,
  IconContainer,
  ChangePasswordVisibilityButton
} from "./styles";

import { useTheme } from "styled-components";

import { 
  PasswordInputProps
} from './types';

export const PasswordInput = ({
  IconName,
  value,
  ...rest
}:PasswordInputProps) => {
  const { colors } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }
  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={IconName}
          color={isFocused || isFilled ? colors.main : colors.text}
          size={24}
        />
      </IconContainer>
      <Input  
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        {...rest} 
      />

      <ChangePasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
      <Feather
          name={isPasswordVisible ? "eye" : "eye-off"}
          color={colors.text}
          size={24}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  )
};
