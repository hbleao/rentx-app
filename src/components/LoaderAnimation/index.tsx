import React from "react";
import LottieView from 'lottie-react-native';

import { Container } from "./styles";

import LoadCar from '../../assets/carAnimation.json';

export const LoaderAnimation = () => {

  return (
    <Container>
      <LottieView 
        style={{ height: 200 }}
        source={LoadCar}
        autoPlay
        resizeMode="contain"
        loop
      />
    </Container>
  )
}
