import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const generateRandomNumber = (min, max, exclude) => {
  let number = Math.floor(Math.random() * (max - min)) + 1;
  if (number === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return number;
  }
};

export default function GameScreen({ enteredNumber }) {
  const initialGuess = generateRandomNumber(1, 100, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.container}>
      <Text>Game Screen {enteredNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
