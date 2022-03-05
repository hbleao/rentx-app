import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated';

import { styles } from './styles';

import { DragButtonProps } from "./types";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export const DragButton = ({
  onPress,
  colorButton   
}: DragButtonProps) => {
  const { colors } = useTheme();
  const buttonMyCarsPositionX = useSharedValue(0);
  const buttonMyCarsPositionY = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: buttonMyCarsPositionX.value},
        { translateY: buttonMyCarsPositionY.value},
      ]
    }
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = buttonMyCarsPositionX.value;
      ctx.positionY = buttonMyCarsPositionY.value;
    },
    onActive(event, ctx: any) {
      buttonMyCarsPositionX.value = ctx.positionX + event.translationX;
      buttonMyCarsPositionY.value = ctx.positionY + event.translationY;
    },
    onEnd(event) {
      buttonMyCarsPositionX.value = withSpring(0);
      buttonMyCarsPositionY.value = withSpring(0);
    }
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[
        styles.animatedContainer,
        myCarsButtonStyle,
      ]}>
        <ButtonAnimated
          style={[
            styles.button,
            {
              backgroundColor: colorButton ? colorButton : colors.main
            }
          ]}
          onPress={onPress}
        >
          <Ionicons
            name="ios-car-sport" 
            size={32}
            color={colors.shape}
          />
        </ButtonAnimated>
      </Animated.View>
    </PanGestureHandler>

  )
}
