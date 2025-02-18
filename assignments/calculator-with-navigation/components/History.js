// assignments\calculator-with-navigation\calculator\components\History.js

/**
 * History component that displays a list of past calculations.
 *
 * Features:
 * - Displays calculation history using FlatList for efficient scrolling
 * - Each history item shows the complete calculation formula and result
 * - Receives history data through route parameters
 *
 * @component
 * @param {Object} route - React Navigation route object
 * @param {Object} route.params - Parameters passed through navigation
 * @param {Array} route.params.history - Array of calculation history items
 */

import { View, Text, FlatList } from "react-native";

import { globalStyles } from "../styles/globalStyles";

function History({ route }) {
  // Extract history data from navigation parameters
  const { history } = route.params;

  return (
    <View style={globalStyles.container}>
      <FlatList
        style={globalStyles.list}
        data={history}
        renderItem={({ item }) => (
          <Text style={globalStyles.listItem}>{item.calculation}</Text>
        )}
        // Each history item already has a unique key from Date.now()
      />
    </View>
  );
}

export default History;
