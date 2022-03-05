import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from "react-redux";

import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { 
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  ContentOptions,
  Option,
  OptionTitle,
} from './styles';

import { DataEdit } from './dataEdit';
import { PasswordEdit } from './passwordEdit';

import { selectAuth } from "../../store/reducers";

import { BackButton } from '../../components';

export { SelectedOptionsProps } from './types';

export const Profile = ({ navigation }: any) => {
  const { colors } = useTheme();
  const { user } = useSelector(selectAuth);
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [name, setName] = useState(user!.name);
  const [email, setEmail] = useState(user!.email);
  const [driverLicense, setDriverLicense] = useState(user!.driver_license);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }
  
  function handleCloseKeyBoard() {
    Keyboard.dismiss();
  }

  function handleSignOut() {

  }

  function handleConfirmDataUpdate() {

  }

  function handleConfirmPasswordUpdate() {

  }

  function handleSelectedOption(option: 'dataEdit' | 'passwordEdit') {
    setOption(option);
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={handleCloseKeyBoard}>
          <Container>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <Header>
              <HeaderTop>
                <BackButton
                  color={colors.shape}
                  onPress={handleGoBack}
                />
                <HeaderTitle>Editar Perfil</HeaderTitle>
                <LogoutButton  onPress={handleSignOut} >
                  <Feather 
                    name="log-out"
                    size={24}
                    color={colors.shape}
                  />
                </LogoutButton>
              </HeaderTop>
              <PhotoContainer>
                <Photo
                  source={{ uri: 'https://avatars.githubusercontent.com/u/35975531?v=4' }}
                />
                <PhotoButton onPress={() => {}}>
                  <Feather 
                    name="camera"
                    size={24}
                    color={colors.shape}
                  />
                </PhotoButton>
              </PhotoContainer>
            </Header>

            <Content>
              <ContentOptions>
                <Option 
                  active={option === 'dataEdit'}
                  onPress={() => handleSelectedOption('dataEdit')}
                >
                  <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
                </Option>
                <Option 
                  active={option === 'passwordEdit'}
                  onPress={() => handleSelectedOption('passwordEdit')}
                >
                  <OptionTitle active={option === 'passwordEdit'}>Trocar senha</OptionTitle>
                </Option>
              </ContentOptions>

              {option === 'dataEdit' ? (
                  <DataEdit
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    driverLicense={driverLicense}
                    setDriverLicense={setDriverLicense}
                    isLoading={isLoading}
                    handleConfirmDataUpdate={handleConfirmDataUpdate}
                  />
                ) : (
                  <PasswordEdit
                    currentPassword={currentPassword}
                    setCurrentPassword={setCurrentPassword}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    isLoading={isLoading}
                    handleConfirmPasswordUpdate={handleConfirmPasswordUpdate}
                  />
                )
              }
            </Content>
          </Container>
        </ TouchableWithoutFeedback>
      </ ScrollView>
    </ KeyboardAvoidingView>
  )
}
