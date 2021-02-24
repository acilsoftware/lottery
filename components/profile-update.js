import React, {Component} from 'react'
import { View ,StyleSheet,Dimensions, ScrollView,Image,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width

export default class ProfileUpdate extends Component{
    render(){
        return(
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                <ScrollView>
                <View style={styles.logo}>
                    <Image style={styles.main} source={require('../assets/images/profile-screen_03.gif')}/>
                    <Text style={styles.heading}>Profile</Text>
                    <Image style={styles.prevButton} source={require('../assets/images/prevButton.gif')}/>
                </View>
                </ScrollView>
            </LinearGradient>
            )
    }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        padding:15
    },
    logo:{
        flexDirection:'row',
        width:Width,
        
        
    },
    main:{
        alignSelf:"flex-start",
    },
    heading:{
        alignSelf:'center'
    },
    prevButton:{
        alignSelf:'flex-end',
        
        
    }
})