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
  console.log('Log: name', name)

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
        title="Proxímo"
        onPress={handleConfirmDataUpdate}
        enabled={!isLoading}
        loading={isLoading}
      />
    </Container>
  )
};
