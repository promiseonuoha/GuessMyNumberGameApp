import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import Button from "../components/Button";

// Icons
import { Ionicons } from "@expo/vector-icons";

let minBoundry = 1;
let maxBoundry = 100;

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

export default function GameScreen({ enteredNumber }) {
  const initialGuess = generateRandomNumber(1, 100, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [computerGuesses, setComputerGuesses] = useState([]);

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

  useEffect(() => {
    setComputerGuesses((prev) => {
      return [currentGuess, ...prev];
    });
    if (currentGuess === enteredNumber) {
      Alert.alert("Game Over!", "The computer guessed your number", [
        { text: "Just Close It!", style: "cancel" },
      ]);
    }
  }, [currentGuess]);

  return (
    <View style={styles.container}>
      <Title boxStyle={{ marginBottom: 25, marginTop: 40 }}>
        Oponent's Guess
      </Title>
      <Title boxStyle={styles.numberBox} textStyling={{ fontSize: 32 }}>
        {currentGuess}
      </Title>
      <Text style={{ marginBottom: 10, color: "white" }}>Higher or Lower?</Text>
      <View style={styles.buttonBox}>
        <Button
          onClick={() => nextGuessHandler("lower")}
          style={styles.buttonStyle}
          title={<Ionicons name="md-remove" size={24} />}
        />
        <Button
          onClick={() => nextGuessHandler("greater")}
          style={styles.buttonStyle}
          title={<Ionicons name="md-add" size={24} />}
        />
      </View>

      <FlatList
        style={styles.scrollView}
        data={computerGuesses}
        renderItem={(item) => {
          return (
            <View style={styles.guessItemBox} key={Math.random() * item.item}>
              <Text style={styles.guessItemText}>#{item.index + 1}</Text>
              <Text style={styles.guessItemText}>{item.item}</Text>
            </View>
          );
        }}
      />
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
  scrollView: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: "column",
  },
  guessItemBox: {
    width: "100%",
    height: 50,
    backgroundColor: "#5a045a",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  guessItemText: {
    color: "white",
  },
});
