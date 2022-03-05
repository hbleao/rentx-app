import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS
} from 'react-native-reanimated';

import { Container } from './styles';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

export const Splash = ({ navigation }) => {
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0,50],[1,0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0,50],[0,-50]),
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0,50], [0,1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0,50],[-50, 0]),
        }
      ]
    }
  });

  function startApp() {
    navigation.navigate('SignIn');
  }

  function animationStart() {
    splashAnimation.value = withTiming(
      50, { duration: 1000 },
      () => { 
        'worklet' 
        runOnJS(startApp)(); 
      }
    );
  }

  useEffect(() => {
    animationStart();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg 
          width={80}
          height={50}
        />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg 
          width={120}
          height={20}
        />
      </Animated.View>
    </Container>
  )
}
