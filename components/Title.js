import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
