// assignment-01-calculator\calculator\components\AddAndSubCalculator.js

import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

/**
 * A simple calculator component that performs addition and subtraction.
 * It takes two numeric inputs from the user and displays the result.
 */
export default function AddAndSubCalculator() {
  // State variables to store input values and the result
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  /**
   * Handles the addition of the two input values.
   * Validates inputs to ensure they are numeric.
   */
  const handleAdd = () => {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
    } else {
      setResult(num1 + num2);
    }
  };

  /**
   * Handles the subtraction of the second input value from the first.
   * Validates inputs to ensure they are numeric.
   */
  const handleSubtract = () => {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
    } else {
      setResult(num1 - num2);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the result of the calculation */}
      <Text style={styles.resultText}>Result: {result}</Text>

      {/* Input field for the first number */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter the first number"
        onChangeText={(firstValue) => setFirstValue(firstValue)}
        value={firstValue}
      />

      {/* Input field for the second number */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter the second number"
        onChangeText={(secondValue) => setSecondValue(secondValue)}
        value={secondValue}
      />

      {/* Container for the operation buttons */}
      <View style={styles.buttonContainer}>
        <Button onPress={handleAdd} title="+" />
        <Button onPress={handleSubtract} title="-" />
      </View>
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
