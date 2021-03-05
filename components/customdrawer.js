import React, { Component } from 'react'
import { useContext } from 'react';
import { View ,StyleSheet,Text, TextInput, ScrollView, TouchableOpacity,Dimensions, Image} from 'react-native'
import LoginLogout from '../services/contextLoginLogout'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width


export default function Customdrawer({navigation},props){
    
    const {signOut}=useContext(LoginLogout)
    
        return(
            
                <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                    <ScrollView contentContainerStyle={styles.outer}> 
                        <View style={styles.drawerwrapper}>
                            <View style={styles.head}>
                                <TouchableOpacity style={styles.closebuttonbox} onPress={() => navigation.toggleDrawer()}>
                                    <Image style={styles.closebutton} source={require('../assets/images/closebutton.gif')}/>
                                </TouchableOpacity>
                                <View style={styles.profileImagebox}>
                                    <Image style={styles.profileImage} source={require('../assets/images/profileimage.gif')}/>
                                    <Text style={styles.customerName}>Jack Maris</Text>
                                    <Text style={styles.customerid}>@jack.maris90</Text>

                                </View>
                                <TouchableOpacity style={styles.editbuttonbox} onPress={()=>navigation.navigate('profileUpdate')}>
                                    <Image style={styles.editbutton} source={require('../assets/images/editbutton.gif')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <TouchableOpacity style={styles.menubar}>
                            <Text style={styles.menuName}>Dashboard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menubar}>
                            <Text style={styles.menuName}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menubar}>
                            <Text style={styles.menuName}>Deposite Funds</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menubar}>
                            <Text style={styles.menuName}>Choose Your Number</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menubar} onPress={signOut()}>
                            <Text style={styles.menuName} onPress={()=>navigation.navigate('login')}>Logout</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </LinearGradient>
        )
    }

const styles = StyleSheet.create({
    outer:{
        flex:1,
    },
    wrapper:{
        flex:1,
        
        width:'100%',
    },
    drawerwrapper:{
        
        alignSelf:'flex-start',
        padding:15,
    },
    head:{
        flexDirection:'row'
    },
    closebuttonbox:{
        width:'15%'
    },
    closebutton:{
        justifyContent:"flex-start",
        alignSelf:'flex-start'
    },
    profileImagebox:{
        width:"70%",
        
    },
    profileImage:{
        justifyContent:'center',
        alignSelf:'center'
    },
    editbuttonbox:{
        width:'15%'
    },editbutton:{
        justifyContent:"flex-start",
        alignSelf:'flex-end'
    },
    customerName:{
        alignSelf:'center',
        fontSize:30,
        color:'#ffffff',
        fontWeight:"700",
    },
    customerid:{
        alignSelf:'center',
        fontSize:24,
        color:'#ffffff'
    },
    line:{
        backgroundColor:'#ffffff',
        height:1,
        marginTop:30,
        marginBottom:30,
    },
    menubar:{
        height:55,
        backgroundColor:'#ffffff',
        padding:11,
        marginBottom:8,
        paddingLeft:20
    },
    menuName:{
        color:'red',
        fontSize:22,
        justifyContent:'center'
    }
})