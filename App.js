// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

// Screens
import HomeScreen from "./screens/HomeScreen";

// Linear Gradient
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState("Home");
  const [enteredNumber, setEnteredNumber] = useState(null);

  return (
    <LinearGradient colors={["#5a045a", "violet"]} style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.avif")}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
      >
        {selectedScreen === "Home" && (
          <HomeScreen
            navigate={(value) => {
              setEnteredNumber(value);
              setSelectedScreen("Game");
            }}
          />
        )}
        {selectedScreen === "Game" && (
          <GameScreen enteredNumber={enteredNumber} />
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.1,
  },
});
