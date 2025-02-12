// assignments\assignment-04-shopping-list\shopping-list\components\ShoppingList.js

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Alert,
} from "react-native";

import { useState } from "react";

export default function ShoppingList() {
  const [shoppingItem, setShoppingItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const handleAdd = () => {
    if (!shoppingItem) {
      Alert.alert("Please add a valid item!");
      return;
    }
    setShoppingList([
      { key: Date.now().toString(), name: shoppingItem },
      ...shoppingList,
    ]);
    setShoppingItem("");
  };
  const handleClear = () => {
    setShoppingList([]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add to shopping list..."
        onChangeText={(shoppingItem) => setShoppingItem(shoppingItem)}
        value={shoppingItem}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="ADD"
          color={"green"}
          onPress={handleAdd}
          accessibilityLabel="Add item to the shopping list."
        />
        <Button
          title="CLEAR"
          color={"red"}
          onPress={handleClear}
          accessibilityLabel="Clear the shopping list."
        />
      </View>
      <FlatList
        style={styles.list}
        data={shoppingList}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf5ed",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: "#f2f2f2",
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 20,
  },
  list: {
    width: "100%",
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
