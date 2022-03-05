import React from 'react';
import { 
  ScrollView, 
  useWindowDimensions,
  StatusBar
} from 'react-native';

import { 
  Container,
  Content,
  Footer,
  Message,
  Title,
} from './styles';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components';

import { RouteParamsProps } from './types';

export const Complete = ({ route }) => {
  const { width } = useWindowDimensions();
  const {
    title,
    message,
    handleGoToNextScreen
  } = route.params as RouteParamsProps;

  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <ScrollView style={{ flex: 1 }}>
        <LogoSvg width={width} />
        <Content>
          <DoneSvg width={80} height={80} />
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Content>
        <Footer>
          <ConfirmButton 
            title="OK"
            onPress={handleGoToNextScreen} 
          />
        </Footer>
      </ScrollView>
    </Container>
  )
}
