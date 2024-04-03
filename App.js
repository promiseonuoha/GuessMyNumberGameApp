// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

// Screens
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import LoadingScreen from "./screens/LoadingScreen";

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState("Home");
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [computerLogs, setComputerLogs] = useState([]);

  const [fontsLoaded] = useFonts({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <LinearGradient colors={["#5a045a", "violet"]} style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.avif")}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.container}>
          {selectedScreen === "Home" && (
            <HomeScreen
              navigate={(value) => {
                setEnteredNumber(value);
                setSelectedScreen("Game");
              }}
            />
          )}
          {selectedScreen === "Game" && (
            <GameScreen
              enteredNumber={enteredNumber}
              navigate={(logs) => {
                setComputerLogs(logs);
                setSelectedScreen("GameOver");
              }}
            />
          )}
          {selectedScreen === "GameOver" && (
            <GameOverScreen
              totalRounds={computerLogs.length + 1}
              enteredNumber={enteredNumber}
              handleStartNewGame={() => setSelectedScreen("Game")}
            />
          )}
        </SafeAreaView>
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
