/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from 'react-native';
import Header from './componets/Header';
import ListItem from './componets/ListItem';
import AddItem from './componets/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.floor(Math.random() * 10000) + 1,
      text: 'Milk'
    },
    {
      id: Math.floor(Math.random() * 10000) + 1,
      text: 'Eggs'
    },
    {
      id: Math.floor(Math.random() * 10000) + 1,
      text: 'Bread'
    },
    {
      id: Math.floor(Math.random() * 10000) + 1,
      text: 'Juice'
    }
  ])

const deleteItem = (id) => {
  setItems(items.filter((item) => item.id !== id));
}
const addItem = (text) => {

  if (text === ''){
    Alert.alert("Error", "Please enter an item", {text: 'Ok'});
    return
  }
  setItems([...items, {text, id: Math.floor(Math.random() * 10000) + 1,}]);
}
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <AddItem onAdd={addItem}/>
      <FlatList
       data={items} 
       renderItem={(data) => 
        <ListItem item={data.item} 
        deleteItem={deleteItem}
        />
      }/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

export default App;
