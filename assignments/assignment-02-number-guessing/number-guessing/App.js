//assignment-02-number-guessing\number-guessing\App.js

import { View, StyleSheet } from "react-native";

import NumberGuessingGame from "./components/NumberGuessingGame";

export default function App() {
  return (
    <View style={styles.container}>
      <NumberGuessingGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
