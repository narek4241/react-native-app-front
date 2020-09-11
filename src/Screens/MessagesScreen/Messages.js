import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Messages = () => (
  <View style={[styles.container, styles.centerFlex]}>
    <Text>Messages (soon)</Text>
  </View>
);

export default Messages;

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
});
