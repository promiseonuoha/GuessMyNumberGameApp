import { StyleSheet, Text, View } from "react-native";

export default function ComputerLog({ roundNumber, guess }) {
  return (
    <View style={styles.guessItemBox}>
      <Text style={styles.guessItemText}>#{roundNumber}</Text>
      <Text style={styles.guessItemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "open-sans-regular",
  },
});
