import React from "react";

import {
  Container,
} from "./styles";

import { 
  PasswordInput,
  Separator,
  Button
} from "../../../components";

import { useTheme } from "styled-components";

import { PasswordEditProps } from './types';

export const PasswordEdit = ({
  password,
  setPassword,
  currentPassword,
  setCurrentPassword,
  confirmPassword,
  setConfirmPassword,
  isLoading,
  handleConfirmPasswordUpdate
}: PasswordEditProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <PasswordInput
        IconName="lock"
        placeholder="Senha atual"
        onChangeText={setCurrentPassword}
        value={currentPassword}
      />
      <Separator height={8} />
      <PasswordInput
        IconName="lock"
        placeholder="nova Senha"
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
        onPress={handleConfirmPasswordUpdate}
        enabled={!isLoading}
        loading={isLoading}
      />
      <Separator height={16} />
    </Container>
  )
};
