import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const Menu = () => {
    const navigation = useNavigation();
  return (
   <View >
       <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#f0f8ff',paddingVertical:10}} >
        <View >
            <TouchableOpacity >
                <Text style={styles.sizeicon}
                onPress={() => navigation.navigate('HomeProduct')}>
                    <Icon name="home" style={styles.sizeicon}></Icon>
                </Text>    
            </TouchableOpacity>
        </View>
        {/* <View >
            <TouchableOpacity >
                <Text style={styles.sizeicon}
                onPress={() => navigation.navigate('Login')}>
                     <MaterialIcons name="favorite" style={styles.sizeicon}></MaterialIcons>
                </Text>    
            </TouchableOpacity>
        </View> */}
        <View >
            <TouchableOpacity >
                <Text style={styles.sizeicon}
                onPress={() => navigation.navigate('Register')}>
                <Ionicons name="ios-notifications-sharp" style={styles.sizeicon}></Ionicons>
                </Text>    
            </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity >
            <Text style={styles.sizeicon}
            onPress={() => navigation.navigate('Product')}>
            <AntDesign name="user" style={styles.sizeicon}></AntDesign>
            </Text>    
            </TouchableOpacity>
        </View>
      
     
       </View>
   </View>

  )
}

export default Menu

const styles = StyleSheet.create({
    sizeicon:{
        fontSize:35,
        color:'#6b8e23'
    }
})