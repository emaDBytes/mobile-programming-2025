// assignment-01-calculator\calculator\App.js

import { View, StyleSheet } from "react-native";

import AddAndSubCalculator from "./components/AddAndSubCalculator";

/**
 * The main App component that serves as the entry point for the application.
 * It renders the AddAndSubCalculator component, which provides basic addition
 * and subtraction functionality.
 */
export default function App() {
  return (
    // Main container for the app
    <View style={styles.container}>
      {/* Render the AddAndSubCalculator component */}
      <AddAndSubCalculator />
    </View>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen
  },
});
