// assignment-01-calculator\calculator\components\Calculator.js

javascriptCopy; // Calculator.js

/**
 * Calculator component with basic arithmetic operations and calculation history.
 *
 * Features:
 * - Addition and subtraction operations
 * - Input validation and error handling
 * - Calculation history tracking
 * - Auto-focus on first input after calculation
 * - Navigation to history view
 *
 * @component
 * @param {Object} navigation - React Navigation prop for screen navigation
 */

import { Text, View, TextInput, Button } from "react-native";

import { useState, useRef } from "react";

import { globalStyles } from "../styles/globalStyles";

function Calculator({ navigation }) {
  // State variables for input values, result, and calculation history
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  // Reference to implement focus on the first TextInput after each operation
  const firstInputRef = useRef();

  /**
   * Performs mathematical calculation and manages calculation state.
   *
   * @param {string} operator - The mathematical operator (+ or -)
   * @returns {void}
   *
   * Flow:
   * 1. Validates input numbers
   * 2. Performs calculation
   * 3. Updates history
   * 4. Resets input fields
   * 5. Refocuses on first input
   */
  const calculate = (operator) => {
    const firstNumber = parseFloat(firstValue);
    const secondNumber = parseFloat(secondValue);

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
        return;
    }

    setResult(newResult);

    // Add new calculation to history
    setHistory([
      {
        key: Date.now().toString(),
        calculation: `${firstNumber} ${operator} ${secondNumber} = ${newResult}`,
      },
      ...history,
    ]);

    // Reset calculator state
    setFirstValue("");
    setSecondValue("");
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

      <View style={globalStyles.buttonContainer}>
        <Button onPress={() => calculate("+")} title="+" />
        <Button onPress={() => calculate("-")} title="-" />
        <Button
          onPress={() => navigation.navigate("History", { history: history })}
          title="Show History"
        />
      </View>
    </View>
  );
}

export default Calculator;
