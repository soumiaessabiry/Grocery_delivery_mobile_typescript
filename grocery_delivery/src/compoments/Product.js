import { Image, StyleSheet, Text, View,ImageBackground ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import styles from '../screens/Allstyle'
import { Route } from '@react-navigation/native'
import { useState,useEffect } from 'react'

const Product = ({route, navigation }) => {
    const [Quantiter,setQuantiter]=useState(0)
    const [produit, setProduit] = useState(route.params.produit)
    const [err,seterror]=useState(false)
    const plusquantiter = () => {
        setQuantiter(Quantiter + 1)
    }
    const moinQuantiter = () => {
        if(Quantiter>0){
            setQuantiter(Quantiter - 1)
        }else{
            Alert.alert("Impossible d'affecter cette action car quatiter et inferieur de 0 ")
        }
    }
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
        <View  style={{flex: 0.4,backgroundColor:'white',borderRadius:20}}>
          <Image source={produit.image}  style={styles.imageproduit}></Image>
        </View>
        <View style={{flex: 0.6}}>
            <Text style={{fontSize:35,color:'#6b8e23',fontWeight:'bold',marginHorizontal:30}}>{produit.name}</Text>
            <View >
                <View >
                        <Text style={[styles.product,{color:'black',fontSize:28,alignSelf:'flex-start',marginHorizontal:30}]}>{produit.price} DH</Text>
                        <Text style={[styles.product,{color:'#6b8e23',fontWeight:'bold',fontSize:27,alignSelf:'flex-start',marginHorizontal:30}]}>{produit.price*Quantiter}   DH</Text>
                    </View>
                    <View>
                                
                    <View style={{flexDirection:'row',justifyContent:'center',marginVertical:10}}>
                    <TouchableOpacity
                            style={[
                            styles.Touchablebtnmp,
                            {backgroundColor: "#6b8e23"},
                            ]}>
                            <Text
                            style={styles.textTouchableOpacity}
                            onPress={moinQuantiter}
                              >
                            -
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.product}>{Quantiter} Kg</Text>
                        <TouchableOpacity
                            style={[
                            styles.Touchablebtnmp,
                            {backgroundColor: "#6b8e23"},
                            ]}>
                            <Text
                            style={styles.textTouchableOpacity}
                            onPress={plusquantiter} >
                            +
                            </Text>
                        </TouchableOpacity>
                 </View>
                 </View>

                </View>
           
           <View style={[styles.product,{marginVertical:10}]}>
            <Text style={[styles.product,{alignSelf:'flex-start',marginHorizontal:10}]}>About the Product</Text>
           <Text style={{fontSize:18,justifyContent:'center',paddingVertical:10}}>{produit.description}</Text>
           </View>
           <View>
           <TouchableOpacity
                    style={[
                      styles.TouchableOpacity,
                      {backgroundColor:produit.bgColor},
                    ]}>
                    <Text
                      style={styles.textTouchableOpacity}
                      onPress={() => navigation.navigate('HomeProduct')}>
                      Add To Basket
                    </Text>
            </TouchableOpacity>
           </View>
        </View>

    </View>
  )
}

export default Product
