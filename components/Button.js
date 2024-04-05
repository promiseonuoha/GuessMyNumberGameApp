import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ title, onClick, style }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        android_ripple={{ color: "rgba(0,0,0,0.5)" }}
        style={({ pressed }) =>
          pressed ? [styles.overlay, styles.pressed] : [styles.overlay]
        }
        onPress={onClick}
      >
        <Text style={styles.textStyle}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { overflow: "hidden", borderRadius: 25, height: 50, width: 130 },

  overlay: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "open-sans-regular",
  },
});
