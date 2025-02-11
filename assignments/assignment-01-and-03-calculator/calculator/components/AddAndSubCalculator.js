// assignment-01-calculator\calculator\components\AddAndSubCalculator.js

/**
 * A simple calculator component that performs addition and subtraction.
 * It takes two numeric inputs from the user, calculates the result, and maintains a history of calculations.
 */

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import { useState } from "react";

export default function AddAndSubCalculator() {
  // State variables for input values, result, and calculation history
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  // Function to perform calculations based on the operator
  /**
   * Performs calculation and updates history.
   * Uses newResult instead of result state in history calculation
   * because state updates are asynchronous - result state wouldn't
   * have the new value when creating history entry.
   * @param {string} operator - The mathematical operator (+ or -)
   */
  const calculate = (operator) => {
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setResult("Invalid input!");
      return;
    }
    let newResult;
    switch (operator) {
      case "+":
        newResult = firstNumber + secondNumber;
        break;

      case "-":
        newResult = firstNumber - secondNumber;
        break;

      default:
        newResult = "Invalid operator!";
    }

    setResult(newResult);

    // Update calculation history
    setHistory([
      {
        key: Date.now().toString(),
        calculation: `${firstNumber} ${operator} ${secondNumber} = ${newResult}`,
      },
      ...history,
    ]);

    // Clear input fields
    setFirstValue("");
    setSecondValue("");
  };

  return (
    <View style={styles.container}>
      {/* Display the result */}
      <Text style={styles.resultText}>Result: {result}</Text>

      {/* Input fields for numbers */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter the first number"
        onChangeText={(firstValue) => setFirstValue(firstValue)}
        value={firstValue}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter the second number"
        onChangeText={(secondValue) => setSecondValue(secondValue)}
        value={secondValue}
      />

      {/* Buttons for addition and subtraction */}
      <View style={styles.buttonContainer}>
        <Button onPress={() => calculate("+")} title="+" />
        <Button onPress={() => calculate("-")} title="-" />
      </View>

      {/* Display calculation history */}
      <FlatList
        style={styles.list}
        data={history}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item.calculation}</Text>
        )}
      />
    </View>
  );
}

// Styles for the component
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
    width: 200,
    borderRadius: 5,
  },
  resultText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  list: {
    marginTop: 10,
    width: "100%",
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
