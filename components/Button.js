import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ title, onClick, style }) {
  return (
    <Pressable
      android_ripple={{ color: "rgba(0,0,0,0.5)" }}
      style={({ pressed }) =>
        pressed
          ? [styles.overlay, styles.pressed, style]
          : [styles.overlay, style]
      }
      onPress={onClick}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  pressed: {
    opacity: 0.6,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "open-sans-regular",
  },
});
