import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <View style={[globalStyles.container, globalStyles.centerFlex]}>
      <StatusBar backgroundColor="#ebecec" barStyle="light-content" />
      <Navigation></Navigation>
    </View>
  );
}

const globalStyles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
});
