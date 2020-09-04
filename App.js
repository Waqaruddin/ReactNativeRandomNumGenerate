import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {


const[random , setCounter] = useState(0);

return (
    <View style={styles.container}>

      <View >

       <Text style = {styles.textStyle}>{random}</Text>

       </View>

       <View style = {styles.buttonStyle}>

          <Button style ={styles.buttonStyle}
      title = "Random Number Generator"

      onPress = { () => {

        setCounter(Math.floor(Math.random() * 100) + 1 );
      }}

      />

       </View>
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

  textStyle:{
    fontSize:40
},

  buttonStyle:{
  justifyContent:"center",
    marginTop: 40,
    fontWeight: 'bold',
    backgroundColor:'#FFA500'
},
});
