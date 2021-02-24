import React,{Component} from 'react'
import {ScrollView, View,Dimensions,StyleSheet,Text, Picker,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const { Height } = Dimensions.get('window').height
const { width } = Dimensions.get('window').width

export default class ChooseNumber extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <ScrollView>
                <View style={styles.logo}>
                    <Text style={styles.main}>ACIL</Text>
                    <Text style={styles.backbutton}>X</Text>
                </View>
                <View style={styles.headingBox}>
                    <Text style={styles.heading}>Choose your Number</Text>
                </View>
                <Text style={styles.balance}>Current balance of your Wallet: 20 GBP.</Text>
                <View style={styles.priceSelection}>
                    <Text style={styles.price}>Ticket Price</Text>
                    <View style={styles.input}>   
                        <Picker  style={styles.ticketPrice}>
                            <Picker.Item label='$ 1' value='1'/>
                            <Picker.Item label='$ 2' value='2'/>
                            <Picker.Item label='$ 3' value='3'/>
                            <Picker.Item label='$ 4' value='4'/>
                            <Picker.Item label='$ 5' value='5'/>
                        </Picker>
                    </View>    
                </View>
                <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <TouchableOpacity style={styles.submitbutton}>
                        <Text style={styles.submittext}>Save</Text>
                    </TouchableOpacity>
                </LinearGradient>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        padding:15,
        backgroundColor:'#000000'
    },
    logo:{
        
        flexDirection:'row',
        width:width,
        
    },
    main:{
        fontSize:35,
        fontWeight:"700",
        alignSelf:'flex-start',
        color:"#ffffff"
    },
    backbutton:{
        fontSize:35,
        fontWeight:"700",
        alignSelf:'flex-end',
        color:"#ffffff"
    },
    headingBox:{
        marginBottom:30,
        marginTop:30
    },
    heading:{
        fontSize:30,
        color:'#ffffff',
        fontWeight:"700"

    },
    balance:{
        color:'red',
        fontSize:20,
        fontWeight:"400",
    },
    ticketPrice:{
        borderColor:'rgba(255, 255, 255, 0.8)',
        color:'rgba(255, 255, 255, 0.8)',
        borderWidth:3,
        fontSize:24,

    },
    submittext:{
        alignSelf:'center',
        fontSize:20,
        color:'#ffffff'

    },
    submitbutton:{
        width:'100%',
        height:50,
        justifyContent:'center',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 3,
        //shadowRadius: 15 ,
        shadowOffset : { width: 5, height: 5},
        borderRadius:5,
        
        
    },
    priceSelection:{
        marginBottom:35,
        marginTop:35
    },
    price:{
        color:'#ffffff',
        fontSize:20
    },
    input:{
        height:50,
        borderColor:'rgba(255, 255, 255, 0.6)',
        color:'rgba(255, 255, 255, 0.6)',
        borderWidth:1,
        marginTop:11,
        marginBottom:11,
        fontSize:20,
        paddingRight:15,
        paddingLeft:15,
        borderRadius:5


    },
})