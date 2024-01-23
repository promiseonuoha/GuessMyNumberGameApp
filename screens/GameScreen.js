import { StyleSheet, Text, View } from "react-native";

export default function GameScreen({ enteredNumber }) {
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
