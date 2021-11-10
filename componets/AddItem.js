/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity
 } from 'react-native';
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
 
 
 const AddItem = ({title, onAdd}) => {
   const [text, setText] = useState("");
 
   return (
     <View>
         <TextInput value={text} onChangeText={setText} placeholder="Add Item..." style={styles.input}/>
         <TouchableOpacity style={styles.btn} onPress={()=> {
             console.log(text)
             onAdd(text)
             setText('')
             }}>
                <Text style={styles.btnText}><FontAwesome name="plus" size={20}/> Add item</Text>
         </TouchableOpacity>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
     input: {
         height:60,
         padding:8,
         fontSize:16
     },
     btn: {
         backgroundColor: "#c2bad8",
         padding:9,
         margin:5
     },
     btnText:{
         color:'darkslateblue',
         fontSize: 20,
         textAlign:'center'
     }
 })
 export default AddItem;
 