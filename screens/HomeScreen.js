import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigate }) {
  const [numberValue, setNumberValue] = useState("");

  const handleNumberInputChange = (enteredText) => {
    setNumberValue(enteredText);
  };

  const handleReset = () => {
    setNumberValue("");
  };

  const handleConfirm = () => {
    let chosenNumber = parseInt(numberValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Value has to be a valid number between 1 and 99",
        [{ text: "Okay", style: "default", onPress: handleReset }]
      );
      return;
    }
    navigate(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          onChangeText={handleNumberInputChange}
          value={numberValue}
          keyboardType="number-pad"
          maxLength={2}
          style={styles.textInput}
        />
        <View style={styles.buttonsContainer}>
          <Button
            onClick={handleReset}
            title="Reset"
            style={styles.buttonStyle}
          />
          <Button
            onClick={handleConfirm}
            title="Confirm"
            style={styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 20,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#5a045a",
    gap: 10,
  },
  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    color: "white",
    fontSize: 32,
    fontWeight: "700",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  buttonStyle: {
    backgroundColor: "white",
    flex: 1,
  },
});
