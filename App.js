/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './components/registration'
import ForgetPassword from './components/forget-Password'
import Login from './components/login'
import ChooseNumber from './components/choose-number'
import EmailVerification from './components/emailverification'
import Customdrawer from './components/customdrawer'
import Splesh from './components/splesh'
import ProfileUpdate from './components/profile-update'

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='profileUpdate'>
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="forget-password" component={ForgetPassword} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="choose-number" component={ChooseNumber} />
        <Stack.Screen name="emailverifcation" component={EmailVerification} />
        <Stack.Screen name="customdrawer" component={Customdrawer}/>
        <Stack.Screen name="splesh" component={Splesh}/>
        <Stack.Screen name="profileUpdate" component={ProfileUpdate}/>


      </Stack.Navigator>
    </NavigationContainer>
  )}
};

const styles = StyleSheet.create({
});

