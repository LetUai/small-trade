import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from '@expo/vector-icons/Feather';

import Intro from './pages/Intro';
import Home from './pages/Home';
import Warning from './pages/Warning';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Details from './pages/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Register" // prop for development env
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen name="Intro" component={Intro}/>
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
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Detalhes",
            headerShown: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#009688",
        inactiveTintColor: "gray",
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,
        }}
      />

      <Tab.Screen name="Profile" component={Drawers}
      options={{
        tabBarIcon: ({color, size}) =>  <Icon name="user" color={color} size={size} />,
      }}/>
    </Tab.Navigator>
  )
}
function Drawers() {
  return(
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      overlayColor="transparent"
      initialRouteName="ProfileDrawer"
      drawerStyle={{width: '65%'}}
      drawerContentOptions={{
        activeTintColor: "#009688",
        inactiveTintColor: "gray",
      }}
    >
      <Drawer.Screen
        name="ProfileDrawer"
        component={Profile}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: ({color, size}) =>  <Icon name="user" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  )
}