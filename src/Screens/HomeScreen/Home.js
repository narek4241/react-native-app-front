import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Search from "./Search/Search";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, styles.centerFlex]}>
        <Search navigation={this.props.navigation}></Search>
      </View>
    );
  }
}

export default Home;

// PROVIDE HIGH CODE ACCURANCY (css)
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
