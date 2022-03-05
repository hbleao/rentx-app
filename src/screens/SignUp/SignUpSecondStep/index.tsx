import React from "react";

import {
  Container,
  Title,
} from "./styles";

import { 
  PasswordInput,
  Separator,
  Button
} from "../../../components"; 
import { useTheme } from "styled-components";

import { SignUpSecondStepProps } from './types';

export const SignUpSecondStep = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isLoadingRegister,
  handleConfirmRegister,
}: SignUpSecondStepProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Title>2. Senha</Title>
      <PasswordInput
        IconName="lock"
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
      />
      <Separator height={8} />
      <PasswordInput
        IconName="lock"
        placeholder="Repetir Senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />              
      <Separator height={24} />
      <Button 
        title="Cadastrar"
        bgColor={colors.success}
        onPress={handleConfirmRegister}
        loading={isLoadingRegister}
        enabled={!isLoadingRegister}
      />
    </Container>
  )
};
