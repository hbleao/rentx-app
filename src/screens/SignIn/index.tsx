import React, { useState } from "react";
import { 
  Alert,
  Keyboard, 
  KeyboardAvoidingView, 
  StatusBar, 
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { useTheme } from "styled-components";

import { 
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Inputs,
  Buttons,
} from "./styles";

import { 
  Button,
  TextInput,
  PasswordInput,
  Separator
} from "../../components";

import { 
  asyncLogin,
} from '../../store/reducers';

import { schema } from '../../constants/screens/SignIn';

export const SignIn = ({ navigation }: any) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit() {
    try {
      await schema.validate({ email, password });

      dispatch(asyncLogin());
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa... ', error.message);
        console.log('Log: error', error);
      } else {
        Alert.alert(
          'Ocorreu um erro na autenticação', 
          'verifique suas credenciais.'
        );
        console.log('Log: error', error);
      }
    }
  }

  function handleCloseKeyBoard() {
    Keyboard.dismiss();
  }

  function handleGoToSignUp() {
    navigation.navigate('SignUp');
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
              backgroundColor="transparent"
              translucent
              barStyle="dark-content"
            />
            <Header>
              <Title>
                Estamos {`\n`}
                quase lá
              </Title>
              <Subtitle>
                Faça seu login para começar{`\n`}
                uma experiência incrível.
              </Subtitle>
            </Header>

            <Form>
              <Inputs>
                <TextInput
                  IconName="mail"
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={setEmail}
                  value={email}
                />
                <Separator height={8} />
                <PasswordInput
                  IconName="lock"
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={setPassword}
                  value={password}
                />
              </Inputs>

              <Buttons>
                <Button
                  title="Login"
                  onPress={handleSubmit}
                />
                <Separator height={8} />
                <Button
                  title="Criar conta gratuita"
                  color={colors.header}
                  bgColor={colors.backgroundSecondary}
                  onPress={handleGoToSignUp}
                />
              </Buttons>
            </Form>
          </Container>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
