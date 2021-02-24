import React, { Component } from 'react'
import { View ,StyleSheet,Dimensions, ScrollView,Image} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height

export default class Splesh extends Component{
    render(){
        return(
            
                <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                    <View style={styles.logo}>
                        <Image source={require('../assets/images/splesh-logo-main.gif')} style={styles.banner}/>
                    </View>
                </LinearGradient>
           
        )
    }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
    },
    logo:{
        flex:1,
        justifyContent:'center',   
    },
    banner:{
        alignSelf:'center'
    }

})