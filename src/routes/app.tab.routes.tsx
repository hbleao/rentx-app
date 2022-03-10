import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { 
  MyCars,
  Profile
} from '../screens';

import { PrivateStackRoutes } from './private.stack.routes';

import { useTheme } from 'styled-components';

import HomeSvg from '../assets/home.svg';
import PeopleSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabPrivateRoutes = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 50,
          backgroundColor: colors.backgroundPrimary
        }
      }}
      initialRouteName="PrivateStackRoutes"
    >
      <Screen
        name="PrivateStackRoutes"
        component={PrivateStackRoutes}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg 
              fill={color}
              width={24} 
              height={24} 
            />
          ))
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: (({ color }) => (
            <CarSvg 
              fill={color}
              width={24} 
              height={24} 
            />
          ))
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (({ color }) => (
            <PeopleSvg 
              fill={color}
              width={24} 
              height={24} 
            />
          ))
        }}
      />
    </Navigator>
  )
}
