import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, TouchableOpacity,Dimensions} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width


export default class Login extends Component{
    render(){
        return(
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.outer}> 
                <View style={styles.logo}>
                    <Text style={styles.main}>ACIL</Text>
                </View>
                <Text style={styles.heading}>Please login to play Online games</Text>
                <View style={styles.formWrapper}>
                    <TextInput style={styles.input} placeholder='User Name' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                </View>
                <View style={styles.loginrow}>
                    <View style={styles.left}>
                    <TouchableOpacity><Text style={styles.forgotbutton}>Forgot Password?</Text></TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                    <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <TouchableOpacity style={styles.submitbutton}>
                            <Text style={styles.submittext}>Login</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
                </View>
                <View style={styles.lastnote}>
                    <Text style={styles.lastnotetext}>Don't have any account? Sign in now</Text>
                </View>
                
                </ScrollView>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        padding:15
    },
    outer:{
        flex:1
    },
    main:{
        fontSize:70,
        fontWeight:"700",
        alignSelf:'center',
        color:"#ffffff"
    },
    heading:{
        color:'#ffffff',
        alignSelf:'center',
        fontSize:24,
        fontWeight:"700"
    },
    input:{
        height:50,
        borderColor:'rgba(255, 255, 255, 0.6)',
        color:'rgba(255, 255, 255, 0.6)',
        borderWidth:1,
        margin:8,
        fontSize:14,
        paddingRight:20,
        paddingLeft:20,


    },
    formWrapper:{
        marginTop:25,
        marginBottom:25,
    },
    lastnote:{
        marginBottom:10,
        marginTop:40,
        alignItems:'center'
    },
    lastnotetext:{
        color:'#ffffff',
        fontSize:20,
        textAlign:'center'
    },
    loginrow:{
        width:Width,
        flexDirection:'row',
        
    },
    forgotbutton:{
        //width:'50%',
        fontSize:20,
        color:'#ffffff',
        justifyContent:'center'
        

    },
    submittext:{
        alignSelf:'center',
        fontSize:20,
        color:'#ffffff'

    },
    submitbutton:{
        //width:'50%',
        height:50,
        justifyContent:'center',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 3,
        //shadowRadius: 15 ,
        shadowOffset : { width: 5, height: 5},
        borderRadius:5,
        //alignContent:'flex-end'
    },
    left:{
        width:'50%',
        alignContent:'flex-start'
    },right:{
        width:'50%',
        alignContent:'flex-end'
    }
})