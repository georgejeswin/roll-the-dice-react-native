import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const dice={
  1:require('./assets/1.png'),
  2:require('./assets/2.png'),
  3:require('./assets/3.png'),
  4:require('./assets/5.png'),
  5:require('./assets/6.png'),
  6:require('./assets/6.png')
}



export default function App() {
  const [numDice,setNumDice] = useState(true);
  const [diceVal,setDiceVal]=useState({
    dice1:'1',
    dice2:'1'
  });

  const rollDice=()=>{
    const dice1=Math.floor(Math.random()*6+1).toString();
    const dice2=Math.floor(Math.random()*6+1).toString();
    setDiceVal({...diceVal,dice1:dice1,dice2:dice2}); 
  }
  const changeNumOfDices=()=>{
    setNumDice(!numDice);
  }

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        {numDice? (
          <View style={styles.diceContainer}>
            <Image style={styles.image} source={dice[diceVal.dice1]}/>
            <Image style={styles.image} source={dice[diceVal.dice2]}/>
          </View>
        ):(
          <Image style={styles.image} source={dice[diceVal.dice1]}/>
        )}
      </View>
      <View style={styles.diceContainer}>
      <TouchableOpacity onPress={rollDice}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Roll Dice</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeNumOfDices}>
          <View style={styles.diceButton}>
            <Text style={styles.buttonText}>{`${numDice? '1 Dice' : '2 Dice' }`}</Text>
          </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    margin:20
  },
  button:{
    backgroundColor:'gray',
    paddingVertical:15,
    paddingHorizontal:20,
    color:'white',
    borderRadius:10,
    marginVertical:30,
    marginHorizontal:20
  },
  buttonText:{
    fontWeight:'bold'
  },
  diceButton:{
    backgroundColor:'coral',
    paddingVertical:15,
    paddingHorizontal:20,
    color:'white',
    borderRadius:10,
  }
});
