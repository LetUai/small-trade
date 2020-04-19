import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from '@expo/vector-icons/FontAwesome5'

import Intro from './pages/Intro';
import Home from './pages/Home';
import Warning from './pages/Warning';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        
        <Stack.Screen
          name="Warning"
          component={Warning}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#009688",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,
        }}
      />

      <Tab.Screen name="ProfileDrawer" component={Drawers}
      options={{
        tabBarLabel: "Eu",
        tabBarIcon: ({color, size}) =>  <Icon name="user-alt" color={color} size={size} />,
      }}/>
    </Tab.Navigator>
  )
}

function Drawers() {
  return(
    <Drawer.Navigator
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: "#009688",
        inactiveTintColor: "gray",
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Eu",
          drawerIcon: ({color}) =>  <Icon name="user-alt" color={color} size={18} />,
        }}
      />
    </Drawer.Navigator>
  )
}