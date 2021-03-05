import AsyncStorage from '@react-native-community/async-storage'
import React, {Component} from 'react'
import { useState } from 'react'
import { View ,StyleSheet,Dimensions, ScrollView,Image,Text,TextInput,Picker,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width

export default function ProfileUpdate({navigation}){ 
    const[authToken,setauthToken] =useState(null) 
    React.useEffect(()=>{
        const fetchdata=async()=>{
            console.log('dafdasfasdf///////////////////////////adfasdfa/s////////////--------------------')
            const userToken= await AsyncStorage.getItem('token')
            console.log(userToken)
           setauthToken(userToken) 
        try{
            fetch('https://feotlotto.creatorshadow.com/api/user-detail',{
                method:'POST',
                headers:{
                    'Authorization':authToken
                }
            })
            .then(res=>res.json())
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
        }catch(error){
            console.log(error)
        }
    }
    fetchdata()
},[])
    
    const updateUserData=()=>{
        fetch('https://feotlotto.creatorshadow.com/api/profile-update',{
            method:"POST",
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
        return(
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                <ScrollView>
                <View style={styles.logo}>
                    <View style={styles.logoleft}>
                        <Image style={styles.main} source={require('../assets/images/profile-screen_03.gif')}/>
                    </View>
                    <View style={styles.headingbox}>
                    <Text style={styles.heading}>Edit Your Profile</Text>
                    </View>
                    <View style={styles.rightButton}>
                        <Image style={styles.prevButton} source={require('../assets/images/prevButton.gif')}/>
                    </View>
                </View>
                <View style={styles.formWrapper}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder='Name' placeholderTextColor='grey'/>
                    <Text style={styles.label}>User Name (Email address)</Text>
                    <TextInput style={styles.input} placeholder='User Name' placeholderTextColor='grey'/>
                    <Text style={styles.label}>Student/ Training Number</Text>
                    <TextInput style={styles.input} placeholder='Student/ Training Number' placeholderTextColor='grey'/>
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput style={styles.input} placeholder='dd/mm/yyyy' placeholderTextColor='grey'/>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.input}>
                        <Picker style={styles.gender}>
                            <Picker.Item value='' label='Select Gender'/>        
                            <Picker.Item value='Male' label='Male' name='gender'/>
                            <Picker.Item value='Female' label='Female' name='gender'/>
                        </Picker>
                    </View>                    
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder='Address' placeholderTextColor='grey'/>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={styles.input} placeholder='City' placeholderTextColor='grey'/>
                    <Text style={styles.label}>State</Text>
                    <TextInput style={styles.input} placeholder='State' placeholderTextColor='grey'/>
                    <Text style={styles.label}>Country</Text>
                    <View style={styles.input}>
                        <Picker style={styles.gender}>
                            <Picker.Item value='' label='Select Country'/>        
                            <Picker.Item value='India' label='India' name='country'/>
                            <Picker.Item value='Pakistan' label='Pakistan' name='country'/>
                        </Picker>
                    </View>
                    <Text style={styles.label}>Zip Code</Text>
                    <TextInput style={styles.input} placeholder='Zip Code' placeholderTextColor='grey'/>  
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput style={styles.input} placeholder='Mobile Number' placeholderTextColor='grey'/> 
                    <Text style={styles.label}>Profile Pic</Text>
                    <TextInput style={styles.input} placeholder='Choose File' placeholderTextColor='grey'/> 
                    <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <TouchableOpacity style={styles.submitbutton} onPress={()=>updateUserData()}>
                            <Text style={styles.submittext}>Update Profile</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
                </ScrollView>
            </LinearGradient>
            )
    }

const styles=StyleSheet.create({
    label:{
        color:'#ffffff',
        fontSize:18,
        paddingLeft:13,
        marginTop:13
    },
    wrapper:{
        flex:1,
        padding:15
    },
    logo:{
        flexDirection:'row',
        width:Width,
        
        
    },
    input:{
        height:50,
        borderColor:'rgba(255, 255, 255, 0.6)',
        color:'grey',
        borderWidth:1,
        margin:8,
        fontSize:20,
        paddingRight:20,
        paddingLeft:20,
        backgroundColor:'#ffffff'
        

    },
    formWrapper:{
        marginTop:30,
        
    },
    logoleft:{
        width:'15%',
        alignContent:'flex-start',
        justifyContent:'center'
    },
    main:{
        alignSelf:"center",
    },
    headingbox:{
        justifyContent:'center',
        alignContent:'center',
        width:'80%'
    },
    heading:{
        alignSelf:'center',
        fontSize:25,
        color:'#ffffff'
    },
    rightButton:{
        width:'5%',
        alignContent:'flex-end',
        justifyContent:'center'
        
    },
    prevButton:{
        alignSelf:'center',
        
        
    }
})