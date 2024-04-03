import { Image, StyleSheet, Text, View } from "react-native";

// Components
import Title from "../components/Title";
import Button from "../components/Button";

export default function GameOverScreen({
  totalRounds,
  enteredNumber,
  handleStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.text}>
        Your Phone needed{" "}
        <Text style={styles.textHighlight}>{totalRounds}</Text> rounds to guess
        the number <Text style={styles.textHighlight}>{enteredNumber}</Text>
      </Text>
      <Button
        onClick={handleStartNewGame}
        style={styles.buttonStyle}
        title={"Start New Game"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "90%",
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    marginVertical: 30,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 22,
    color: "#5a045a",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    marginBottom: 30,
  },
  textHighlight: {
    fontFamily: "open-sans-bold",
    color: "#500450",
  },
  buttonStyle: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
