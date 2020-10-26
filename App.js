import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [kingNumber, setKingNumber] = useState(null);
  const [moves, setMoves] = useState(1);
  const [guessed, setGuessed] = useState(0);
  const resetGameHandler = () => {
    setResultText('');
    setKingNumber(randomizeNumber(1, 50));
    setMoves(1);
  };
  const [resultText, setResultText] = useState('');
  const randomizeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const numberGuessedHandler = (numberAsText) => {
    const parsedGuess = Number(numberAsText);

    setMoves(moves + 1);
    if (parsedGuess === kingNumber) {
      setResultText('Wygrałeś w ' + moves + ' ruchach! Gratulacje!');
    } else {
      setResultText('Niestety nie! Próbuj dalej! To Twój ' + moves + ' ruch!');
    }
  };

  return (
    <View style={styles.container}>
      <Button title={'START'} onPress={resetGameHandler} />
      <TextInput
        onChangeText={(text) => setGuessed(text)}
        style={styles.textInput}
      />
      <Button title={'Zgaduj!'} onPress={() => numberGuessedHandler(guessed)} />
      <Text style={styles.text}>{resultText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  textInput: {
    color: 'white',
    width: 50,
    padding: 10,
    borderBottomWidth: 5,
    borderBottomColor: 'cyan',
  },
});
