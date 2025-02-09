//assignment-02-number-guessing\number-guessing\App.js

/**
 * Main application component for the Number Guessing Game.
 * Serves as the root component and container for the game interface.
 */

import { View, StyleSheet } from "react-native";

import NumberGuessingGame from "./components/NumberGuessingGame";

export default function App() {
  return (
    <View style={styles.container}>
      <NumberGuessingGame />
    </View>
  );
}

// Styles for the root container
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up full screen space
  },
});
