import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, CheckBox, Picker, Touchable, TouchableOpacity,Dimensions} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height

export default class ForgetPassword extends Component{
    constructor({navigation}){
        super({navigation})
        this.state={

        }
    }
    render(){
        return(
            
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.outer}> 
                <View style={styles.logo}>
                    <Text style={styles.main}>ACIL</Text>
                </View>
                <Text style={styles.heading}>Forget Password</Text>
                <Text style={styles.info}>Please enter your email so we can help you recover your password</Text>
                <View style={styles.formWrapper}>
                    <TextInput style={styles.input} placeholder='User Name' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                </View>
                <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <TouchableOpacity style={styles.submitbutton}>
                        <Text style={styles.submittext}>Submit</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.lastnote}>
                    <Text style={styles.lastnotetext} onPress={()=>this.props.navigation.navigate('registration')}>Don't have any account? Sign up now</Text>
                </View>
                </ScrollView>

            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    outer:{
        flex:1
    },
    wrapper:{
        flex:1,
        padding:20,
        height:Height,
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
        fontSize:30,
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
    submitbutton:{
        height:50,
        justifyContent:'center',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 3,
        //shadowRadius: 15 ,
        shadowOffset : { width: 5, height: 5},
        borderRadius:5,
        
    },
    submittext:{
        alignSelf:'center',
        fontSize:20,
        color:'#ffffff'

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
    info:{
        color:'#ffffff',
        fontSize:20,
        marginTop:30,
        textAlign:'center'

    },
    formWrapper:{
        marginTop:25,
        marginBottom:25,
    },
})