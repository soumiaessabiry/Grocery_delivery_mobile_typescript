import {StyleSheet,Text,View,ScrollView,ImageBackground,Image,TouchableOpacity,
} from 'react-native';
import React from 'react';
import Menu from '../../compoments/Menu';
import Header from '../../compoments/Header';
import styles from './style';
import dataProducts from './DataProduct';
import dataCategorie from './DataCategorie';
const Product = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{marginVertical: 8}}>
        <Header />
        <ScrollView horizontal>
          <View style={styles.viewAllcategorie}>
            {dataCategorie.map((e, i) => (
              <ImageBackground source={e.image} key={i} style={styles.viewcategorie}  resizeMode="cover" >
                <Text style={styles.textBackground}>{e.name}</Text>
              </ImageBackground>
            ))}
          </View>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.viewProduct}>
          {dataProducts.map((e, i) => (
            <View style={styles.viewproduit} key={i}>
              <View style={styles.produit}>
                <Image source={e.image} style={styles.imageproduit} ></Image>
                <View style={{paddingVertical: 6}}>
                  <Text style={[styles.titleproduit, {color: 'black'}]}>
                    {e.name}
                  </Text>

                  <TouchableOpacity
                    style={[
                      styles.TouchableOpacity,
                      {backgroundColor: e.bgColor},
                    ]}>
                    <Text
                      style={styles.textTouchableOpacity}
                      onPress={() => navigation.navigate('Register')}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Product;
