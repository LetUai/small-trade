import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from '@expo/vector-icons/Feather';

import Home from '../pages/Home';
import Map from '../pages/Map';
import Profile from '../pages/Profile';
import Details from '../pages/Details';

import { useAuth } from '../contexts/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function AppRoutes() {
  return (
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
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

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({color, size}) => <Icon name="map" color={color} size={size} />,
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
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerPosition="right"
      drawerType="slide"
      overlayColor="transparent"
      initialRouteName="ProfileDrawer"
      drawerStyle={{
        width: '65%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
      }}
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

function CustomDrawerContent(props) {

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        icon={({color, size}) => (
          <Icon name="log-out" color={color} size={size} />
        )}
        onPress={handleSignOut}
      />
    </DrawerContentScrollView>
  );
}