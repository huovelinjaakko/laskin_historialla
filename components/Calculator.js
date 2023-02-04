import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Calculator({ navigation }) {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [history, setHistory] = useState([]);
  const [answer, setAnswer] = useState();
  const [operation, setOperation] = useState('');

  const addPressed = () => {
    setAnswer(parseInt(number1) + parseInt(number2));
    setOperation('add')
  }

  const subtractPressed = () => {
    setAnswer(parseInt(number1) - parseInt(number2));
    setOperation('subtract')
  }

  useEffect(()=> {
    if (operation == 'add') {
      setHistory([number1.toString() + " + " + number2.toString() + " = " + answer.toString(), ...history]);
    } else if (operation == 'subtract') {
      setHistory([number1.toString() + " - " + number2.toString() + " = " + answer.toString(), ...history]);
    }
  },[answer]);

  return (
    <View style={styles.container}>
      <Text>Result: {answer}</Text>
      <TextInput keyboardType='numeric' style={styles.input} placeholder='First number' onChangeText={number => setNumber1(number)} value={number1} />
      <TextInput keyboardType='numeric' style={styles.input} placeholder='Second number' onChangeText={number => setNumber2(number)} value={number2} />
      <View style={styles.button}>
        <Button onPress={addPressed} title="+" />
        <View style={styles.space} />
        <Button onPress={subtractPressed} title="-" />
        <View style={styles.space} />
        <Button title="History" onPress={() => navigation.navigate('History', history)} />
      </View>
      <View style={styles.space} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    flexDirection: 'row',
    margin: 20,
  },
  space: {
    width: 20,
    height: 20
  },
});