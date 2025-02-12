// assignment-01-calculator\calculator\components\AddAndSubCalculator.js

/**
 * A simple calculator component that performs addition and subtraction.
 * It takes two numeric inputs from the user, calculates the result, and maintains a history of calculations.
 */

import { Text, View, TextInput, Button, FlatList } from "react-native";

import { useState, useRef } from "react";

import { globalStyles } from "../styles/globalStyles";

export default function AddAndSubCalculator() {
  // State variables for input values, result, and calculation history
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  // Reference to implement focus on the first TextInput after each operation
  const firstInputRef = useRef();

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
        return; // Exit the function if the operator is invalid
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

    // Focus on the first input field
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  };

  return (
    <View style={globalStyles.container}>
      {/* Display the result */}
      <Text style={globalStyles.resultText}>Result: {result}</Text>

      {/* Input fields for numbers */}
      <TextInput
        ref={firstInputRef} // Attach the reference to the first TextInput
        style={globalStyles.inputField}
        keyboardType="numeric"
        placeholder="Enter the first number"
        onChangeText={(firstValue) => setFirstValue(firstValue)}
        value={firstValue}
      />
      <TextInput
        style={globalStyles.inputField}
        keyboardType="numeric"
        placeholder="Enter the second number"
        onChangeText={(secondValue) => setSecondValue(secondValue)}
        value={secondValue}
      />

      {/* Buttons for addition and subtraction */}
      <View style={globalStyles.buttonContainer}>
        <Button onPress={() => calculate("+")} title="+" />
        <Button onPress={() => calculate("-")} title="-" />
      </View>

      {/* Display calculation history */}
      <FlatList
        style={globalStyles.list}
        data={history}
        renderItem={({ item }) => (
          <Text style={globalStyles.listItem}>{item.calculation}</Text>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
