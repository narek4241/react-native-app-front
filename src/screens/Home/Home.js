import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Posts from "../Posts/Posts";

export default function Home() {
  return (
    <View style={[styles.container, styles.centerFlex]}>
      <Posts></Posts>
    </View>
  );
}

// PROVIDE HIGH CODE ACCURANCY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1e2c",
  },
});
