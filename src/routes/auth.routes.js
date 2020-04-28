import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Warning from '../pages/Warning';
import Register from '../pages/Register';
import Login from '../pages/Login';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
      <AuthStack.Navigator 
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <AuthStack.Screen
          name="Warning"
          component={Warning}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        <AuthStack.Screen name="Register" component={Register}/>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
          }}
        />
      </AuthStack.Navigator>
  );
}