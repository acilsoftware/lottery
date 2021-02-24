import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, TouchableOpacity,Dimensions, Image} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width

export default class Customdrawer extends Component{
    render(){
        return(
            
                <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                    <ScrollView contentContainerStyle={styles.outer}> 
                        <View style={styles.drawerwrapper}>
                            <View style={styles.head}>
                                <View style={styles.closebuttonbox}>
                                    <Image style={styles.closebutton} source={require('../assets/images/closebutton.gif')}/>
                                </View>
                                <View style={styles.profileImagebox}>
                                    <Image style={styles.profileImage} source={require('../assets/images/profileimage.gif')}/>
                                    <Text style={styles.customerName}>Jack Maris</Text>
                                    <Text style={styles.customerid}>@jack.maris90</Text>

                                </View>
                                <View style={styles.editbuttonbox}>
                                    <Image style={styles.editbutton} source={require('../assets/images/editbutton.gif')}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.menubar}>
                            <Text style={styles.menuName}>Dashboard</Text>
                        </View>
                        <View style={styles.menubar}>
                            <Text style={styles.menuName}>Profile</Text>
                        </View>
                        <View style={styles.menubar}>
                            <Text style={styles.menuName}>Deposite Funds</Text>
                        </View>
                        <View style={styles.menubar}>
                            <Text style={styles.menuName}>Choose Your Number</Text>
                        </View>
                        <View style={styles.menubar}>
                            <Text style={styles.menuName}>Logout</Text>
                        </View>
                    </ScrollView>
                </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    outer:{
        flex:1,
    },
    wrapper:{
        flex:1,
        
        width:'80%',
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