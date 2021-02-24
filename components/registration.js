import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, CheckBox, Picker, Touchable, TouchableOpacity,} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';


export default class Regestration extends Component {
    render(){
        return(
            <ScrollView>
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                    <View style={styles.logo}>
                        <Text style={styles.main}>ACIL</Text>
                    </View>
                    <Text style={styles.heading}>Create new account</Text>
                <View style={styles.formWrapper}>
                    <TextInput style={styles.input} placeholder='User Name' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <TextInput style={styles.input} placeholder='Phone Number' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <TextInput style={styles.input} placeholder='Gender' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <View style={styles.input}>
                    <Picker style={styles.gender}>
                        <Picker.Item value='' label='Select Gender'/>        
                        <Picker.Item value='Male' label='Male'/>
                        <Picker.Item value='Male' label='Male'/>
                    </Picker>
                    </View>
                    <TextInput style={styles.input} placeholder='Date Of Birth' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                    <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor='rgba(255, 255, 255, 0.6)'/>
                </View>
                <View style={styles.note}>
                    <CheckBox style={styles.checkbox}/>
                    <Text style={styles.notetext}> I wish to receive newsletter, Promotion and news from</Text>
                </View>
                
                <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <TouchableOpacity style={styles.submitbutton}>
                        <Text style={styles.submittext}>Sign Up</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.lastnote}>
                    <Text style={styles.lastnotetext}>Already have an account? Sign in now</Text>
                </View>
            </LinearGradient>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        padding:15
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
    gender:{
        borderColor:'rgba(255, 255, 255, 0.6)',
        color:'rgba(255, 255, 255, 0.6)',
        borderWidth:1,
        fontSize:14,

    },
    formWrapper:{
        marginTop:30,
        
    },
    checkbox:{
        color:'#ffffff',
        
        

        
    },
    note:{
        flexDirection:'row',
        marginTop:8,
        marginBottom:45
    },
    notetext:{
        color:'#ffffff',
        fontSize:18
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
        marginTop:45,
        alignItems:'center'
    },
    lastnotetext:{
        color:'#ffffff',
        fontSize:18,
        textAlign:'center'
    }

});