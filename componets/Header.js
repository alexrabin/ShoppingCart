/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 
 
 const Header = ({title}) => {
   
 
   return (
     <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
     </View>
   );
 };
 Header.defaultProps ={
     title: 'Shopping Cart'
 }
 const styles = StyleSheet.create({
     header: {
         height:60,
         padding:15,
         backgroundColor:'darkslateblue'
    },
    text: {
        color:'white',
        fontSize:23,
        textAlign: 'center'
    }
 })
 export default Header;
 