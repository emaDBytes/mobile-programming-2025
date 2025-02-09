// assignment-02-number-guessing\number-guessing\components\NumberGuessingGame.js

import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function NumberGuessingGame() {
  const [textToShow, setTextToShow] = useState("Guess a number between 1-100");
  const [secretNumber, setSecretNumber] = useState();
  const [guessedValue, setGuessedValue] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setSecretNumber(randomNumber);
  }, []);

  const handleInput = () => {
    setCounter(counter + 1);
    const guessedNumber = Number(guessedValue);
    if (isNaN(guessedNumber)) {
      setTextToShow("Insert a valid number, please");
      return;
    } else if (guessedNumber === secretNumber) {
      Alert.alert(`You guessed the number in ${counter} guesses`);
    } else if (guessedNumber > secretNumber) {
      setTextToShow(`Your guess, ${guessedNumber}, is too high`);
      setGuessedValue("");
      return;
    } else {
      setTextToShow(`Your guess, ${guessedNumber}, is too low`);
      setGuessedValue("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{textToShow}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="...a number between 1 and 100"
        onChangeText={(userInput) => setGuessedValue(userInput)}
        value={guessedValue}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={handleInput} title="MAKE GUESS" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6d6ba",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
