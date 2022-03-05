import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

import { 
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';

import { 
  BackButton,
  Button,
  ImageSlider,
  Accessory,
} from '../../components';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { CarDetailsParamsProps } from './types';

export const CarDetails = ({ navigation, route }: any) => {
  const { car } = route.params as CarDetailsParamsProps;
  const { colors } = useTheme();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => 
    scrollY.value = e.contentOffset.y);

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value, 
        [0, 200], 
        [200, 80], 
        Extrapolate.CLAMP
      )
    }
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value, 
        [0, 150], 
        [1, 0], 
        Extrapolate.CLAMP
      )
    }
  });

  function handleGoBack() {
    navigation.goBack(); 
  }

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {
      car,
    });
  }

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />
      <Animated.View style={[
        headerStyleAnimation,
        styles.header,
        { backgroundColor: colors.backgroundSecondary }
      ]}>
        <Header style={styles.back}>
          <BackButton onPress={handleGoBack} />
        </Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <CarImages>
            <ImageSlider 
              imageUrls={car.photos}
            />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory 
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Animated.ScrollView> 

      <Footer>
        <Button
          title='Escolher periodo do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
  back: {
    position: 'absolute',
    zIndex: 2
  }
})