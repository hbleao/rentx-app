import React, { useState } from "react";
import { 
  Alert,
  Keyboard, 
  KeyboardAvoidingView, 
  ScrollView, 
  StatusBar,
  TouchableWithoutFeedback
} from "react-native";
import * as Yup from 'yup';

import { 
  Bullets,
  Container,
  Header,
  Subtitle,
  Title
} from "./styles";

import { useTheme } from "styled-components";

import { SignUpFirstStep } from "./SignUpFirstStep";
import { SignUpSecondStep } from "./SignUpSecondStep";

import { BackButton, Bullet } from "../../components";

import { registerUser } from '../../services/Users/registerUser';

import { 
  firstStepSchemaValidation,
  secondStepSchemaValidation
} from './schema';

export const SignUp = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [secondStep, setSecondStep] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);

  function handleGoBack() {
    if(secondStep) {
      setSecondStep(false);
      return;
    }
    navigation.goBack();
  }

  function handleGoToNextScreen() {
    navigation.navigate('SignIn');
  }

  function handleCloseKeyBoard() {
    Keyboard.dismiss();
  }

  async function handleNextStep() {
    try {
      setIsLoadingRegister(true);
      await firstStepSchemaValidation.validate({
        name,
        email,
        driverLicense
      });
  
      setSecondStep(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa... ', error.message);
      }
    } finally {
      setIsLoadingRegister(false);
    }
  }

  async function handleConfirmRegister() {
    try {
      await secondStepSchemaValidation.validate({
        password,
        confirmPassword
      });
      
      const userResponse = await registerUser({
        name,
        email,
        password,
        driver_license: driverLicense
      });

      if (userResponse.status === 201) {
        navigation.navigate('Complete', {
          title: 'Conta criada!',
          message: `Agora é só fazer login\n e aproveitar`,
          handleGoToNextScreen
        });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa... ', error.message);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="height"
      enabled
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.backgroundPrimary}
        translucent
      />
      <ScrollView>
        <TouchableWithoutFeedback onPress={handleCloseKeyBoard}>
          <Container>
            <Header>
              <BackButton onPress={handleGoBack} />
              <Bullets>
                <Bullet active={!secondStep} />
                <Bullet active={secondStep} />
              </Bullets>
            </Header>
            <Title>
              Crie sua {`\n`}
              conta 
            </Title>
            <Subtitle>
              Faça seu cadastro de {`\n`}
              forma rápida e fácil
            </Subtitle>
            {secondStep ? (
              <SignUpSecondStep
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                handleConfirmRegister={handleConfirmRegister}
                isLoadingRegister={isLoadingRegister}
              />
            ) : (
              <SignUpFirstStep
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                driverLicense={driverLicense}
                setDriverLicense={setDriverLicense}
                handleNextStep={handleNextStep}
              />
            )}
          </Container>
      </TouchableWithoutFeedback>
    </ScrollView>
  </KeyboardAvoidingView>
  )
};
