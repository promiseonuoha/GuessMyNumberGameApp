// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState("Home");

  return (
    <View style={styles.container}>
      {selectedScreen === "Home" && (
        <HomeScreen navigate={(value) => setSelectedScreen(value)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
