import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Intro from './pages/Intro';
import Home from './pages/Home';
import Warning from './pages/Warning';
import Register from './pages/Register';
import Login from './pages/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Warning" component={Warning}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;