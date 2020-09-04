import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {


const[random , setCounter] = useState(0);

 




  return (
    <View style={styles.container}>

       <Text style = {{paddingTop: 20 }}>{random}</Text>

      <Button
      title = "Random Number Generator"

      onPress = { () => {

        setCounter(Math.random);
      }}

      ///onPress = {() => { setCounter(counter + 1);}}
      />



      {/* <Button
      
      title = "Decrease"    onPress = {() => {setCounter(counter - 1);}}
      
      
      /> */}
      

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },

  buttonStyle:{
    flex:1,

  justifyContent:"center",
    padding: 20
},
});
