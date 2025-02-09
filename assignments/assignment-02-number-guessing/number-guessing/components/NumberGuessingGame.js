// assignment-02-number-guessing\number-guessing\components\NumberGuessingGame.js

/**
 * A React Native component for a number guessing game.
 * Users guess a randomly generated number between 1 and 100.
 * Provides feedback on each guess and tracks the number of attempts.
 */

import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function NumberGuessingGame() {
  // State management for game variables
  const [textToShow, setTextToShow] = useState("Guess a number between 1-100");
  const [secretNumber, setSecretNumber] = useState(); // Message displayed to the user;
  const [guessedValue, setGuessedValue] = useState(); // The user's current guess
  const [counter, setCounter] = useState(0); // Number of attempts made by the user

  // Generate a random number between 1 and 100 when the component mounts
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setSecretNumber(randomNumber);
  }, []); // Empty dependency array ensures this runs only once

  /**
   * Handles user input validation and game logic.
   * - Validates if the input is a number.
   * - Compares the guessed number to the secret number.
   * - Provides feedback (too high, too low, or correct guess).
   * - Resets the input field after each guess.
   */
  const handleInput = () => {
    setCounter(counter + 1); // Increment guess counter
    const guessedNumber = Number(guessedValue);
    if (isNaN(guessedNumber)) {
      setTextToShow("Insert a valid number, please"); // Handle invalid input
      return;
    } else if (guessedNumber === secretNumber) {
      Alert.alert(`You guessed the number in ${counter} guesses`); // Correct guess
    } else if (guessedNumber > secretNumber) {
      setTextToShow(`Your guess, ${guessedNumber}, is too high`);
      setGuessedValue(""); // Reset input field
      return;
    } else {
      setTextToShow(`Your guess, ${guessedNumber}, is too low`);
      setGuessedValue(""); // Reset input field
    }
  };

  return (
    <View style={styles.container}>
      {/* Display game messages and feedback to the user */}
      <Text style={styles.resultText}>{textToShow}</Text>

      {/* Input field for the user to enter their guess */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="...a number between 1 and 100"
        onChangeText={(userInput) => setGuessedValue(userInput)}
        value={guessedValue}
      />

      {/* Button to submit the user's guess and trigger game logic */}
      <View style={styles.buttonContainer}>
        <Button onPress={handleInput} title="MAKE GUESS" />
      </View>
    </View>
  );
}

// Styles for the game interface components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6d6ba", // Background color for the game screen
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 5, // Rounded corners for the input field
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold", // Bold text for game messages
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10, // Spacing between buttons (if multiple are added later)
  },
});
