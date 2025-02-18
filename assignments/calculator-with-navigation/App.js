// assignments\calculator-with-navigation\calculator\App.js

/**
 * Main application component that sets up the navigation and screen layout.
 *
 * Key features:
 * - Uses React Navigation for screen management
 * - Implements a stack-based navigation system
 * - Provides safe area handling for different device types
 *
 * Navigation Structure:
 * - Calculator: Main screen with calculation functionality
 * - History: Screen showing past calculations
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import History from "./components/History";
import Calculator from "./components/Calculator";
import { globalStyles } from "./styles/globalStyles";

// Initialize the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="History" component={History} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
