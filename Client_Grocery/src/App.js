import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/home';
import Login from './screens/Login/login';
import Register from './screens/Register/register';
import Menu from './compoments/Menu';
import HomeProduct from './screens/Dashbord/HomeProduct';
import Header from './compoments/Header';
import Product from './compoments/Product';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}></Stack.Screen>
        <Stack.Screen
          name="Login"
          // options={{headerShown: false}}
          component={Login}></Stack.Screen>
        <Stack.Screen
          name="Register"
          // options={{headerShown: false}}
          component={Register}></Stack.Screen>
        <Stack.Screen
          name="Menu"
          options={{headerShown: false}}
          component={Menu}></Stack.Screen>
        <Stack.Screen
          name="HomeProduct"
          options={{headerShown: false}}
          component={HomeProduct}></Stack.Screen>
        <Stack.Screen
          name="Header"
          options={{headerShown: false}}
          component={Header}></Stack.Screen>
        <Stack.Screen
          name="Product"
          options={{headerShown: false}}
          component={Product}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
