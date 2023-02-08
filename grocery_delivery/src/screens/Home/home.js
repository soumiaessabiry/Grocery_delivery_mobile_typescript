import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity,SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import styles from './stylehome'
import Icon from 'react-native-vector-icons/AntDesign';
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor:'#6b8e23',flex:1}}>
    <View>
        <Image style={{
          width:450,
          height:400,
          alignSelf:'center',
          marginTop:30
        }} 
        resizeMode="contain"
        source={require('../../images/Grocery.png')}
        />
        <View style={{paddingHorizontal:1}}>
            <Text style={{
                color:'white',
                fontSize:30,
                fontWeight:'bold',
                textAlign:'center',
                fontStyle:'italic'
                }}>
                Welcom to Easy Grocery
            </Text>
        </View>
        <View style={{paddingHorizontal:10, 
            flexDirection:'row',
            justifyContent:'space-evenly',
            marginVertical:20

        
        }}>
           <TouchableOpacity style={{
            paddingVertical:20,
            width:100,
            }}>
            <Text style={{
                fontWeight:'bold',
                textAlign:'center',
                color:'black',
             
            }}
            onPress={() => navigation.navigate('Login')}
            >
            <Icon name="rightcircle"style={{
            fontSize:85,
            fontWeight:'bold',
            textAlign:'center',
            color:'black',
            }}></Icon>
            </Text>
           </TouchableOpacity>
           
        </View>


    </View>
</SafeAreaView>
  )
  
}

export default Home
