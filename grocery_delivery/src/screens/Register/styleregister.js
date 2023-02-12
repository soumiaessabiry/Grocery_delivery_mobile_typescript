import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const styles = StyleSheet.create({
    vieuhome: {
        flex: 1,
    },
      image: {
        flex: 1,
        justifyContent: 'center',
      
      },
      btnContainerStyle: {
        width:265,
        backgroundColor: '#6b8e23',
        paddingVertical: 15,
        borderRadius: 30,
        marginHorizontal:75,
        display:'flex',
        marginTop:520,
      },
      btnTextStyle: {
        fontWeight:'bold',
        color: '#ffffff',
        fontSize: 37,
        textAlign: 'center',
        fontFamily: 'Quicksand-Medium',
        fontStyle:'italic'

      },
      input: {
        width: '80%',
        height: 50,
        fontSize: 22,
        borderBottomColor:'white',
        borderBottomWidth: 8,
        marginTop:30,
        alignSelf:'center',
    


    },
    textregister:{
        alignSelf: 'center',
        fontSize:33,
        fontWeight:'bold',
        color:'white',
        fontStyle:'italic',
        backgroundColor:'blue'
    },
    formregister:{
        marginTop:20,
        backgroundColor: '#ffdab9',
        height:350,
        borderRadius:20,
       


    },
    
})
export default styles