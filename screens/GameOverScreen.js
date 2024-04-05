import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";

// Components
import Title from "../components/Title";
import Button from "../components/Button";

export default function GameOverScreen({
  totalRounds,
  enteredNumber,
  handleStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 360) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.text}>
          Your Phone needed{" "}
          <Text style={styles.textHighlight}>{totalRounds}</Text> rounds to
          guess the number{" "}
          <Text style={styles.textHighlight}>{enteredNumber}</Text>
        </Text>
        <Button
          onClick={handleStartNewGame}
          style={styles.buttonStyle}
          title={"Start New Game"}
        />
      </View>
    </ScrollView>
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
    width: 180,
  },
});
