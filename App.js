import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTabNavigation from "./src/BottomTabNavigation/BottomTabNavigation";
// import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={[styles.container, styles.centerFlex]}>
      <BottomTabNavigation></BottomTabNavigation>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    // flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
