import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigate }) {
  return (
    <View style={styles.container}>
      <Button title="Text Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
