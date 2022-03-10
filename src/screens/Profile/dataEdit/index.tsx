import React from "react";

import {
  Container,
} from "./styles";

import {
  TextInput,
  Separator,
  Button
} from "../../../components";

import { DataEditProps } from './types';
import { useTheme } from "styled-components";

export const DataEdit = ({
  name,
  setName,
  email,
  setEmail,
  driverLicense,
  setDriverLicense,
  isLoading,
  handleConfirmDataUpdate
}: DataEditProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <TextInput
        placeholder="Nome"
        IconName="user"
        onChangeText={setName}
        defaultValue={name}
        value={name}
      />
      <Separator height={8} />
      <TextInput
        placeholder="Email"
        IconName="mail"
        keyboardType="email-address"
        defaultValue={email}
        onChangeText={setEmail}
        value={email}
      />
      <Separator height={8} />
      <TextInput
        placeholder="CNH"
        IconName="credit-card"
        keyboardType="numeric"
        defaultValue={driverLicense}
        onChangeText={setDriverLicense}
        value={driverLicense}
      />
      <Separator height={24} />
      <Button 
        title="Salvar Alterações"
        bgColor={colors.success}
        onPress={handleConfirmDataUpdate}
        enabled={!isLoading}
        loading={isLoading}
      />
      <Separator height={16} />
    </Container>
  )
};
