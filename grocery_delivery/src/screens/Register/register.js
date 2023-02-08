import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity,TextInput, SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import styles from '../Allstyle'
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Register = ({navigation}) => {
  return (
     <ImageBackground  source={require("../../images/Frutas.png")} style={{flex:1, flexDirection: 'column'}}>
        <View  >
            <View>
                <Text style={styles.text}>
                    Register
                </Text>
            </View>
            <View>
            <View style={[styles.viewinputs,{marginVertical:12}]}>
                    <Icon name="user"   
                    style={styles.viewicon}>
                    </Icon> 
                    <TextInput 
                    placeholder='Username'
                    placeholderTextColor={'#808080'}
                        style={[styles.inputform,{paddingVertical:13}]}                    />
                </View>
            <View style={[styles.viewinputs,{marginVertical:12}]}>
                <AntDesign name="mail"   
                  style={styles.viewicon}>
                </AntDesign> 
                <TextInput 
                    placeholder='Email'
                    placeholderTextColor={'#808080'}
                    style={[styles.inputform,{paddingVertical:13}]}
                />
                </View>
            <View style={[styles.viewinputs,{marginVertical:12}]}>
                    <Icon name="user-lock"  
                    style={styles.viewicon}>
                    </Icon>         
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor={'#808080'}
                        style={[styles.inputform,{paddingVertical:13}]}                    />
                </View>
            <View style={[styles.viewinputs,{marginVertical:12}]}>
                    <MaterialIcons name="verified-user"  
                    style={styles.viewicon}>
                    </MaterialIcons>         
                    <TextInput 
                         placeholder='Confirm Password'
                        placeholderTextColor={'#808080'}
                        style={[styles.inputform,{paddingVertical:13}]}                    />
                </View>
        
                <TouchableOpacity style={styles.touchableopacity}>
                    <Text style={styles.texttouchable}
                    onPress={() => navigation.navigate('HomeProduct')}
                    >
                        Sign up
                    </Text>    
                </TouchableOpacity>
              
            </View>
        </View>
    </ImageBackground>

  )
}

export default Register
