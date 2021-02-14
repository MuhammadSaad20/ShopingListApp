import React,{useState} from 'react'
import { StyleSheet, View, Text, Image, FlatList, Alert } from 'react-native'
import Header from './components/Header';
//import {uuid} from 'uuidv4';
//import { v1 as uuidv1 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';

import ListItem from './components/ListItem'
import AddItem from './components/AddItem' 



const App = () => {
  //<Image source={{uri:'https://randomuser.me/api/portraits/men/2.jpg'}} style={styles.img}></Image>
const [items, setItems]=useState([
  { id: Math.floor(Math.random() * 100) + 1 , text: 'Milk'},
  { id: Math.floor(Math.random() * 100) + 1 , text: 'Eggs'},
  { id: Math.floor(Math.random() * 100) + 1 , text: 'Bread'},
  { id: Math.floor(Math.random() * 100) + 1 , text: 'Juice'},
])
//delete item
const deleteItem=(id)=>{
  setItems(prevItems=>{
    return prevItems.filter(item=>item.id!=id);
  });
}
//on Add Item
const addItem =(text)=>{
  if(!text){
    Alert.alert(
      'No item entered',
      'Please enter an item when adding to your shopping list',
      [
        {
          text: 'Understood',
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );

  }else{
  setItems(prevItems=>{
    return [{ id: Math.floor(Math.random() * 100) + 1 ,text},...prevItems];
  });
}//else 
}
  return (
    <View style={styles.container}>
     <Header title="Shoping List" />
     <AddItem addItem={addItem}/>
      <FlatList 
      data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem}/> }
      />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
   // justifyContent: 'center',
    //alignItems: 'center',
  },
  /*text: {
    color: 'darkslateblue',
    fontSize: 30,
  },*/
 /* img:{
    width:100,
    height:100,
    borderRadius:100/2,
  }*/
});

export default App;