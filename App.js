import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import Settings from './components/Settings';
import colors from './assets/colors/colors';
import DrawerContent from './components/Drawer';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.white,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => <Entypo name='home' size={32} color={color} />, headerShown: false
      }} />
      <Tab.Screen name="Liked" component={Liked} options={{
        tabBarIcon: ({ color }) => <Entypo name='heart' size={32} color={color} />, headerShown: false
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' size={32} color={color} />, headerShown: false
      }} />
    </Tab.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  tabBar: {
    backgroundColor: colors.yellow,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
};
