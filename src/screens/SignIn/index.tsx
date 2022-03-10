import React, { useState } from "react";
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  StatusBar, 
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { useDispatch } from "react-redux";

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
  asyncLogin,
  asyncOfflineLogin,
} from '../../store/reducers';

import { 
  Button,
  TextInput,
  PasswordInput,
  Separator
} from "../../components";

import { signInSchema } from './schema';
import { errorMessage } from "../../utils/errorMessage";

export const SignIn = ({ navigation }: any) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit() {
    try {
      await signInSchema.validate({ email, password });
      const offlineUser = await dispatch(asyncOfflineLogin());
      if(!!offlineUser && !email && !password) return;
      await dispatch(asyncLogin({ email, password }));
    } catch (error) {
      errorMessage({
        error,
        message: 'Ocorreu um erro na autenticação\n verifique suas credenciais.'
      });
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
      behavior="height"
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
