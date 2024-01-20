import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ title, onClick }) {
  return (
    <Pressable
      android_ripple={{ color: "rgba(0,0,0,0.5)" }}
      style={({ pressed }) => {
        return pressed ? { ...styles.overlay, opacity: 0.5 } : styles.overlay;
      }}
      onPress={onClick}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 25,
    backgroundColor: "violet",
  },
});
