

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './components/registration'
import ForgetPassword from './components/forget-Password'
import Login from './components/login'
import ChooseNumber from './components/choose-number'
import EmailVerification from './components/emailverification'
import Splesh from './components/splesh'
import ProfileUpdate from './components/profile-update'
import AsyncStorage from '@react-native-community/async-storage';
import LoginLogout from './services/contextLoginLogout'
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/customdrawer'

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function App(){
  const [userToken,setuserToken]=useState(null)
  
  useEffect(()=>{
    const getToken=async()=>{
    const Token=await AsyncStorage.getItem('token')
    console.log(Token)
    if(Token!=null){
      console.log('sadfsadfasddsgadsfasdgasdfasd')
      setuserToken(Token)
    }else{
      setuserToken(0)
    }
    getToken()
  }
},[userToken])
const authContext=useMemo(()=>{
  return{
  signIn:()=>{
  setuserToken(AsyncStorage.getItem('token'))
  console.log('sadfsadfasddsgadsfasdgasdfasd-------------------')
  },signOut:()=>{
  setuserToken(null)
  AsyncStorage.removeItem('token')
  }
}
},[])


    return(
      
      <LoginLogout.Provider value={authContext}>
        {userToken ?(
      <NavigationContainer>
      <Drawer.Navigator 
      headerMode='none' 
      initialRouteName='profileUpdate' 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 350,
      }}>
        <Drawer.Screen name="choose-number" component={ChooseNumber} />
        <Drawer.Screen name="emailverifcation" component={EmailVerification} />
        <Drawer.Screen name="splesh" component={Splesh}/>
        <Drawer.Screen name="profileUpdate" component={ProfileUpdate}/>
      </Drawer.Navigator>
      </NavigationContainer>
    ):(
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='login'>
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="forget-password" component={ForgetPassword} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="splesh" component={Splesh}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
    
  
  </LoginLogout.Provider>
    )
};

const styles = StyleSheet.create({
});

