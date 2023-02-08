import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Allstyle'
const Login = ({navigation}) => {
  return (
    <ImageBackground  source={require("../../images/Frutas.png")} style={{flex:1, flexDirection: 'column'}}>
  
        <View>
            <Text style={styles.text}>Login</Text>
        </View>
        <View>
            <View style={[styles.viewinputs,{marginVertical:15}]}>
                <AntDesign name="mail"   
                style={styles.viewicon}>
                </AntDesign> 
                <TextInput 
                    placeholder='Email'
                    placeholderTextColor={'#808080'}
                    style={styles.inputform}
                />
            </View>
            <View style={[styles.viewinputs,{marginVertical:10}]}>
                <Icon name="user-lock"  
                style={styles.viewicon}>
                </Icon>         
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor={'#808080'}
                    style={styles.inputform}
                />
            </View>
            <TouchableOpacity style={styles.touchableopacity}
            onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.texttouchable}>
                    Sign up
                </Text>    
            </TouchableOpacity>
            <View style={styles.textdesciption1}>
            <TouchableOpacity style={[styles.touchableopacity,{backgroundColor:'white'}]}>
                <Text style={[styles.texttouchable,{color:"#6b8e23"}]}
                    onPress={() => navigation.navigate('Register')}
                >
                Sign in
                </Text>    
            </TouchableOpacity>
            
            </View>
        </View>
    {/* </View> */}
   </ImageBackground>
  )
}

export default Login

