// assignments\assignment-04-shopping-list\shopping-list\App.js

import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ShoppingList from "./components/ShoppingList";

/**
 * Main App Component
 *
 * Provides the root structure for the shopping list application.
 * Implements SafeAreaView for proper display on modern devices with notches.
 */
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ShoppingList />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Base styles for app layout
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
