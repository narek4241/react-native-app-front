import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = () => (
  <View style={[styles.container, styles.centerFlex]}>
    <Text>Favorites.js</Text>
  </View>
);

export default Favorites;

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
