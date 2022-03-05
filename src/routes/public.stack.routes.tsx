import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
  Complete,
  Splash,
  SignIn,
  SignUp,
} from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const PublicStackRoutes = () => {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Splash"
    >
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />
      <Screen
        name="Complete"
        component={Complete}
      />
    </Navigator>
  )
}
