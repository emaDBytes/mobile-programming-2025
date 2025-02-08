// assignment-01-calculator\calculator\App.js

import { View, StyleSheet } from "react-native";

import AddAndSubCalculator from "./components/AddAndSubCalculator";

export default function App() {
  return (
    <View style={styles.container}>
      <AddAndSubCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
