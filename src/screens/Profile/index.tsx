import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from "react-redux";

import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Alert
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

import { selectAuth, asyncLogout } from "../../store/reducers";
import { asyncUpdateUser } from '../../store/reducers';

import { BackButton } from '../../components';

import { errorMessage } from '../../utils/errorMessage';

import { SelectedOptionsProps } from './types';
import { profileSchemaValidation } from './schema';

export const Profile = ({ navigation }: any) => {
  const { colors } = useTheme();
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [option, setOption] = useState<SelectedOptionsProps>('dataEdit');
  const [name, setName] = useState(user!.name);
  const [email, setEmail] = useState(user!.email);
  const [driverLicense, setDriverLicense] = useState(user!.driver_license);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState(user!.avatar);

  function handleGoBack() {
    navigation.goBack();
  }
  
  function handleCloseKeyBoard() {
    Keyboard.dismiss();
  }

  function handleSignOut() {
    Alert.alert(
      'Tem certeza?', 
      'Se você sair, irá precisar de internet para conectar-se novamente.', 
      [
        {
          text: 'Cancelar',
          onPress: () => {},
        },
        {
          text: 'Sair',
          onPress: () => dispatch(asyncLogout(user!)),
        }
      ]
    );
  }

  async function handleConfirmDataUpdate() {
    console.log("user: ", user);
    try {
      await profileSchemaValidation.validate({
        name,
        email,
        driverLicense
      });

      await dispatch(asyncUpdateUser({
        id: user!.id,
        user_id: user!.user_id,
        name,
        email,
        avatar: avatar,
        driver_license: driverLicense,
        token: user!.token
      }));
      Alert.alert('Perfil atualizado!');
    } catch (error) {
      errorMessage({
        error,
        message: 'Não foi possível atualizar o perfil.'
      });
    }
  }

  function handleConfirmPasswordUpdate() {

  }

  async function handleAvatarSelect() {
    const newImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,4],
      quality: 1
    });

    if(newImage.cancelled) return; 
    if(newImage.uri) setAvatar(newImage.uri);
  }

  function handleSelectedOption(option: SelectedOptionsProps) {
    setOption(option);
  }

  return (
    <KeyboardAvoidingView
      behavior="height"
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

                <LogoutButton onPress={handleSignOut} >
                  <Feather 
                    name="log-out"
                    size={24}
                    color={colors.shape}
                  />
                </LogoutButton>
              </HeaderTop>
              <PhotoContainer>
                {!!avatar && <Photo source={{ uri: avatar }} />}
                <PhotoButton onPress={handleAvatarSelect}>
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
