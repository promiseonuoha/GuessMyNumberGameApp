import { StyleSheet, Text, View } from "react-native";

export default function Title({ children, boxStyle, textStyling }) {
  return (
    <View style={[styles.container, boxStyle]}>
      <Text style={[styles.textStyle, textStyling]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 13,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
