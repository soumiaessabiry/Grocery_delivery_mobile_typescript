import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../screens/Allstyle';
import React from 'react';

const Header = () => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <AntDesign
          name="menu-fold"
          style={{
            fontSize: 28,
            paddingHorizontal: 10,
            color: '#6b8e23',
          }}></AntDesign>
        <AntDesign
          name="shoppingcart"
          style={{
            fontSize: 28,
            paddingHorizontal: 10,
            color: '#6b8e23',
          }}></AntDesign>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          backgroundColor: '#d3d3d3',
          borderRadius: 7,
          width: '90%',
          alignSelf: 'center',
        }}>
        <FontAwesome
          name="search"
          style={{
            paddingTop: 12,
            fontSize: 18,
            paddingHorizontal: 10,
          }}></FontAwesome>
        <TextInput
          placeholder="search"
          style={{fontSize: 18, paddingHorizontal: 5}}></TextInput>
      </View>
    </ScrollView>
  );
};

export default Header;
