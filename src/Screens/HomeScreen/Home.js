import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import Posts from "./Posts/Posts";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    postsData: [],
    isLoading: true,
  };

  fetchPosts = async () => {
    try {
      const fetchPostsData = await fetch(
        "http://skelet-rest-api.herokuapp.com/posts"
      );

      const data = await fetchPostsData.json();

      this.setState({
        postsData: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }
  render() {
    return (
      <View style={[styles.container, styles.centerFlex]}>
        {this.state.isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Posts data={this.state.postsData}></Posts>
        )}
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
