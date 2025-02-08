// assignment-01-calculator\calculator\components\AddAndSubCalculator.js

import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddAndSubCalculator() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = () => {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
    } else {
      setResult(num1 + num2);
    }
  };

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
      <Text style={styles.resultText}>Result: {result}</Text>
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
      <View style={styles.buttonContainer}>
        <Button onPress={handleAdd} title="+" />
        <Button onPress={handleSubtract} title="-" />
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
