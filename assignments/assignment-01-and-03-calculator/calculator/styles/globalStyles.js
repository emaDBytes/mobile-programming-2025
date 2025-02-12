// assignments\assignment-01-and-03-calculator\calculator\styles\globalStyles.js

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainAppContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#faf5ed",
    alignItems: "center",
    padding: 20,
  },
  inputField: {
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
    margin: 7,
  },
  resultText: {
    padding: 8,
    fontSize: 13,
    fontWeight: "bold",
  },
  list: {
    width: "100%",
  },
  listItem: {
    padding: 7,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    width: "95%",
    // Shadow styling for list items
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
