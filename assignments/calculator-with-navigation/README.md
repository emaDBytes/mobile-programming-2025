<!-- assignments\assignment-01-and-03-calculator\README.md -->

# Calculator App with History

A React Native calculator app that performs basic arithmetic operations and maintains calculation history.

## Features

- Input two numbers and perform addition or subtraction
- View complete calculation history
- Input validation to handle non-numeric values
- Clean and intuitive user interface
- SafeAreaView implementation for proper display on modern devices

## Screenshots

| Basic Calculator                                 | With History                                         |
| ------------------------------------------------ | ---------------------------------------------------- |
| ![Basic Calculator](assets/calculator-basic.png) | ![Calculator History](assets/calculator-history.png) |

## How to Run

1. Clone this repository
2. Navigate to the calculator directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npx expo start
   ```

## Technologies Used

- React Native
- Expo
- JavaScript
- React Native's core components (SafeAreaView, FlatList)

## Project Structure

```
calculator-with-navigation
├── App.js
├── assets
│   ├── calculator-basic.png
│   └── calculator-history.png
├── components
│   ├── Calculator.js
│   └── History.js
├── index.js
├── package-lock.json
├── package.json
├── README.md
└── styles
    └── globalStyles.js
```

## Development Journey

This app was developed in two phases:

1. Basic calculator functionality (Assignment 1)
2. Addition of calculation history feature (Assignment 3)
3. Implementation of navigation between calculator and history screens (Assignment 5)
