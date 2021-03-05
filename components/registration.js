import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, CheckBox, Picker, TouchableOpacity,} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';


export default class Regestration extends Component {
    constructor(){
        super()
        this.state={
            studentId:12,
            userName:'test',
            email:'test@gmail.com',
            phoneNumber:123456,
            password:1234,
            confirmPassword:1234,
            address:'test',
            city:'test',
            country:91,
            zip:111111,
            data:null

        }
    }
   async registerUser(){
       const userInfo={
                    student_Id:12,
                    name:this.state.userName,
                    email:this.state.email,
                    password:this.state.password,
                    password_confirmation:this.state.confirmPassword,
                    mobile_no:this.state.phoneNumber,
                    address:this.state.address,
                    city:this.state.city,
                    country:this.state.country,
                    zip:this.state.zip,}
        this.setState({data:userInfo})
        fetch('https://feotlotto.creatorshadow.com/api/register',{
            method:'POST',
            headers:{ 
                Accept:'application/json',
                },
            body:JSON.stringify(this.state.data)
               })
            .then(res=>res.json())
            .then(result=>console.log(result))
            .catch(err=>console.log(err+'error'))
            }
//        const Token= await AsyncStorage.getItem('token')                
//         var url = new URL("https://feotlotto.creatorshadow.com/api/register"),
//         userInfo={
//             name:this.state.userName,
//             email:this.state.email,
//             password:this.state.password,
//             password_confirmation:this.state.confirmPassword,
//             phone:this.state.phoneNumber,
//             address:this.state.address,
//             city:this.state.city,
//             country:this.state.country,
//             zip:this.state.zip,
//         }
// Object.keys(userInfo).forEach(key => url.searchParams.append(key, userInfo[key]))
// fetch(url,{headers:{ 
//         'Authorization':'Bearer '+Token,
//         Accept:'application/json',
//         }})

        
//         .then(res=>res.json())
//         .then(result=>console.log(result))
//         .catch(err=>console.log(err))
//     }
//     {
//         headers:{  
//         'Content-Type': 'application/json',
//         Accept:'application/json'
//         },
//        method:'POST',
//        body:JSON.stringify(data)
//    }
//     Url: https://feotlotto.creatorshadow.com/api/register
// Method: POST
// Parameters: 
// name:dhiruanup
// email:dhiru123@example.com
// password:123456789
// password_confirmation:123456789
// phone:0000000000
// address:test
// city:test
// country:GB
// zip:12345

    render(){
        return(
            <ScrollView>
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                    <View style={styles.logo}>
                        <Text style={styles.main}>ACIL</Text>
                    </View>
                    <Text style={styles.heading}>Create new account</Text>
                <View style={styles.formWrapper}>
                    <TextInput style={styles.input} placeholder='User Name' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({userName:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({email:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Phone Number' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({phoneNumber:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({password:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({confirmPassword:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Address' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({address:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='City' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({city:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Country' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({country:e.target.value})}/>
                    <TextInput style={styles.input} placeholder='Zip Code' placeholderTextColor='rgba(255, 255, 255, 0.6)' onChange={(e)=>this.setState({zip:e.target.value})}/>

                </View>
                <View style={styles.note}>
                    <CheckBox style={styles.checkbox}/>
                    <Text style={styles.notetext}> I wish to receive newsletter, Promotion and news from</Text>
                </View>
                
                <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <TouchableOpacity style={styles.submitbutton} onPress={()=>this.registerUser()}>
                        <Text style={styles.submittext}>Submit</Text>
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
        fontSize:20,
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