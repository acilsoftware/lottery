import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, TouchableOpacity,Dimensions, Image} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width

export default class EmailVerification extends Component{
    render(){
        return(
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.outer}> 
                <View style={styles.logo}>
                    <Image style={styles.main} source={require('../assets/images/splesh-logo-main.gif')}/>
                </View>
                <Text style={styles.heading}>Email Verification</Text>
                <Text style={styles.info}>Please enter your email so we can help you recover your password</Text>
                <View style={styles.codewrapper}>
                    <View style={styles.codebox}>
                        <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <TextInput style={styles.code}/>
                        </LinearGradient>
                    </View>
                    <View style={styles.codebox}>
                        <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <TextInput style={styles.code}/>
                        </LinearGradient>
                    </View>
                    <View style={styles.codebox}>
                        <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <TextInput style={styles.code}/>
                        </LinearGradient>
                    </View>
                    <View style={styles.codebox}>
                        <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <TextInput style={styles.code}/>
                        </LinearGradient>
                    </View>
                    <View style={styles.codebox}>
                        <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <TextInput style={styles.code}/>
                        </LinearGradient>
                    </View>
                    <View style={styles.codebox}>
                        <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <TextInput style={styles.code}/>
                        </LinearGradient>
                    </View>
                </View>
                <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <TouchableOpacity style={styles.submitbutton}>
                        <Text style={styles.submittext}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
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
        alignSelf:'center',
    },
    heading:{
        color:'#ffffff',
        alignSelf:'center',
        fontSize:35,
        fontWeight:"700"
    },
    info:{
        color:'#ffffff',
        fontSize:20,
        marginTop:30,
        textAlign:'center'

    },
    submitbutton:{
        height:50,
        justifyContent:'center',
        //shadowColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius:5,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 5
        
    },
    submittext:{
        alignSelf:'center',
        fontSize:20,
        color:'#ffffff'

    },
    codewrapper:{
        flexDirection:'row',
        width:'100%',
        marginTop:20,
        marginBottom:20,
        justifyContent:'space-between',
    },
    code:{
        
        color:'#ffffff',
        fontSize:20,
        alignSelf:'center',
        borderRadius:30,

    },
    codebox:{
        width:'15%',
        borderRadius:30,
        height:50,

    }
})