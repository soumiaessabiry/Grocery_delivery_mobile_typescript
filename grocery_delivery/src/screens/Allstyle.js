import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    viewregisterlogin:{
        flex: 7,
        backgroundColor: '#f8f8ff',
        borderTopStartRadius:30,
        borderTopEndRadius:30
    },
    text:{
        fontSize:35,
        color:'#6b8e23',
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:25
    },
    viewinputs:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#f0f8ff',
        width:"80%",
        borderRadius:10,
        // marginVertical:10,
        alignSelf:'center',
        fontWeight:'bold',
        padding:4,
        borderBottomWidth:5,
        borderBottomColor:'#6b8e23'


    },
    viewicon:{
        fontSize:25,
        borderRadius:10,
        // marginVertical:10,
        alignSelf:'center',
        fontWeight:'bold',
    },
    inputform:{
        fontSize:20,
        width:"80%",
        fontWeight:'bold',
    },
    touchableopacity:{
        width:"60%",
        alignSelf:'center',
        padding:14,
        marginVertical:8,
        borderRadius:15,
        backgroundColor:'#6b8e23',
    },
    texttouchable:{
        color:'white',
        textAlign:"center",
        fontSize:25,
        fontWeight:'bold'
    },
    textdesciption1:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    textdesciption2:{
        paddingVertical:15,
        fontSize:19,
        color:"#2e8b57",
        fontWeight:'bold'
    },
    product:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'black'

        },
    productbtn:{
        fontSize:23,
        fontWeight:'bold',
        fontStyle:'italic',
        borderRadius: 15,
        backgroundColor: '#6b8e23',
        width:40,
        color:'white'
   
    },
    TouchableOpacity: {
        backgroundColor: '#6b8e23',
        width: '80%',
        paddingVertical: 15,
        alignSelf: 'center',
        borderRadius: 25,
      },
    Touchablebtnmp: {
        backgroundColor: '#6b8e23',
        width: 40,
        height:40,
        alignSelf:"flex-end",
        borderRadius: 25,
        marginHorizontal:10
      },
      textTouchableOpacity: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
      },
      imageproduit: {
        width:'100%',
        height: 300,
        resizeMode: 'contain',
      },

})
export default styles