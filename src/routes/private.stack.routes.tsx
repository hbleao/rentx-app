import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
  Home,
  CarDetails,
  Scheduling,
  Complete,
  SchedulingDetails,
  MyCars,
} from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const PrivateStackRoutes = () => {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="Complete"
        component={Complete}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  )
}
