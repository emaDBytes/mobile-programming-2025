// assignment-01-calculator\calculator\App.js

/**
 * The main App component that serves as the entry point for the application.
 * It wraps the entire app with SafeAreaProvider to ensure proper handling of safe area insets
 * (e.g., notches, status bars) on both iOS and Android.
 * It renders the AddAndSubCalculator component, which provides basic addition and subtraction functionality.
 */

import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import AddAndSubCalculator from "./components/AddAndSubCalculator";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={globalStyles.mainAppContainer}>
          {/* Render the AddAndSubCalculator component */}
          <AddAndSubCalculator />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
