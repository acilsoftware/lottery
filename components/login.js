import React, { Component } from 'react'
import { View ,StyleSheet,Text, TextInput, ScrollView, TouchableOpacity,Dimensions,} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'



import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';
const { Height } = Dimensions.get('window').height
const { Width } = Dimensions.get('window').width


export default class Login extends Component{
    constructor({navigation}){
        super()
        
        this.state={
            userEmail:'',
            password:'',
            data:null,
            buttonDisable:false
        }
    };
    // koolswans@gmail.com SwAn@007
    //valueChange=(a)=>{
    //     this.setState({[a.target.name]:a.target.value})
        
    //     console.log(a.value)
    // };
    
    getMoviesFromApiAsync = async () => {
        if(this.state.userEmail==''||this.state.password==''){
            alert('Please put your User or Password')
        }else{
            this.setState({buttonDisable:true})
        this.state.data={
           email:this.state.userEmail,
           password:this.state.password
        }
    
        console.log(this.state.data)

        try{ 
           
         fetch('https://feotlotto.creatorshadow.com/api/login',
         {
            headers:{  
            'Content-Type': 'application/json',
            Accept:'application/json'
            },
           method:'POST',
           body:JSON.stringify(this.state.data)
       })
         .then(res=>res.json())
         .then(result=>{
            if(result.status==200){
                
                AsyncStorage.setItem('token',result.access_token)
                console.log(AsyncStorage.getItem('token'))

                this.setState({buttonDisable:false})
            }else{
                alert(result.message)
                this.setState({buttonDisable:false})
            }})
         .catch(error=>
            {
                alert(error)
                this.setState({buttonDisable:false})
            })
       }
       catch(error){
        alert(error)
        this.setState({buttonDisable:false})
       }
    }
    }
       
     
     
    render(){
        return(
            <LinearGradient colors={['#150448','#DC0000']} style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.outer}> 
                <View style={styles.logo}>
                    <Text style={styles.main}>ACIL</Text>
                </View>
                <Text style={styles.heading}>Please login to play Online games</Text>
                <View style={styles.formWrapper}>
                    <TextInput 
                        textContentType='emailAddress' 
                        style={styles.input} 
                        placeholder='User Name' 
                        placeholderTextColor='rgba(255, 255, 255, 0.6)' 
                        value={this.state.userEmail} 
                        onChangeText={e=>this.setState({userEmail:e})}
                    />
                    <TextInput 
                        textContentType='password' 
                        secureTextEntry={true} 
                        style={styles.input} 
                        placeholder='Password' 
                        placeholderTextColor='rgba(255, 255, 255, 0.6)' 
                        value={this.state.password} 
                        onChangeText={e=>this.setState({password:e})}
                    />
                </View>
                <View style={styles.loginrow}>
                    <View style={styles.left}>
                    <TouchableOpacity disabled={this.state.buttonDisable}><Text style={styles.forgotbutton} onPress={()=>this.props.navigation.navigate('forget-password')}>Forgot Password?</Text></TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                    <LinearGradient colors={['#D01729','#F55150','#D01729',]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <TouchableOpacity style={styles.submitbutton} onPress={this.getMoviesFromApiAsync} disabled={this.state.buttonDisable}>
                            <Text style={styles.submittext} 
                            //onPress={()=>this.props.navigation.navigate('dashboard')}
                            >Login</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
                </View>
                <TouchableOpacity style={styles.lastnote} disabled={this.state.buttonDisable}>
                    <Text style={styles.lastnotetext} onPress={()=>this.props.navigation.navigate('registration') }>Don't have any account? Sign up now</Text>
                </TouchableOpacity>
                
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
        color:'#ffffff',
        borderWidth:1,
        margin:8,
        fontSize:20,
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
        fontSize:20,
        color:'#ffffff',
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
        alignContent:'flex-start',
        height:50,
        justifyContent:'center'
    },right:{
        width:'50%',
        alignContent:'flex-end'
    }
})