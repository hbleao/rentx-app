import React from "react";

import {
  Container,
  Title,
} from "./styles";

import {
  TextInput,
  Separator,
  Button
} from "../../../components";

import { SignUpFirstStepProps } from './types';

export const SignUpFirstStep = ({
  name,
  setName,
  email,
  setEmail,
  driverLicense,
  setDriverLicense,
  handleNextStep
}: SignUpFirstStepProps) => {
  return (
    <Container>
      <Title>1. dados</Title>
      <TextInput
        placeholder="Nome"
        IconName="user"
        onChangeText={setName}
        value={name}
      />
      <Separator height={8} />
      <TextInput
        placeholder="Email"
        IconName="mail"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <Separator height={8} />
      <TextInput
        placeholder="CNH"
        IconName="credit-card"
        keyboardType="numeric"
        onChangeText={setDriverLicense}
        value={driverLicense}
      />
      <Separator height={24} />
      <Button 
        title="Proxímo"
        onPress={handleNextStep}
        enabled={true}
      />
    </Container>
  )
};
