import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddPost() {
  return (
    <View style={[styles.container, styles.centerFlex]}>
      <Text>ADDPOST</Text>
    </View>
  );
}

// PROVIDE HIGH ACCURANCY (css)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1e2c",
  },
});
