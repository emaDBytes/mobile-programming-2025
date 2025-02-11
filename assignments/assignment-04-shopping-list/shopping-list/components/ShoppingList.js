// assignments\assignment-04-shopping-list\shopping-list\components\ShoppingList.js

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import { useState } from "react";

export default function ShoppingList() {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf5ed",
    alignItems: "center",
    justifyContent: "center",
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
  },
  list: {
    margin: 10,
    width: 100,
  },
});
