import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Title from "../components/Title";
import Button from "../components/Button";

let minBoundry = 1;
let maxBoundry = 100;

const generateRandomNumber = (min, max, exclude) => {
  let number = Math.floor(Math.random() * (max - min)) + 1;
  if (number === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return number;
  }
};

export default function GameScreen({ enteredNumber }) {
  const initialGuess = generateRandomNumber(
    minBoundry,
    maxBoundry,
    enteredNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < enteredNumber) ||
      (direction !== "lower" && currentGuess > enteredNumber)
    ) {
      Alert.alert("Don't Lie!", "You know that you're wrong.", [
        { text: "Sorry", style: "cancel" },
      ]);

      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess - 1;
    } else {
      minBoundry = currentGuess + 1;
    }
    let newRandomNumber = generateRandomNumber(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.container}>
      <Title boxStyle={{ marginBottom: 25 }}>Oponent's Guess</Title>
      <Title boxStyle={styles.numberBox} textStyling={{ fontSize: 32 }}>
        {currentGuess}
      </Title>
      <Text style={{ marginBottom: 10 }}>Higher or Lower?</Text>
      <View style={styles.buttonBox}>
        <Button
          onClick={() => nextGuessHandler("lower")}
          style={styles.buttonStyle}
          title="-"
        />
        <Button
          onClick={() => nextGuessHandler("greater")}
          style={styles.buttonStyle}
          title="+"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  numberBox: {
    marginBottom: 25,
    paddingVertical: 22,
    paddingHorizontal: 55,
    borderRadius: 6,
  },
  buttonStyle: {
    backgroundColor: "white",
    flex: 1,
    paddingVertical: 15,
  },
  buttonBox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
  },
});
