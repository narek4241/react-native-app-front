// #task (like in ProfileMenu) turn 'class component back to 'function component (for mastering)
import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import Posts from "../../HomeScreen/Posts/Posts";

class ProfilePosts extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    profilePostsData: [],
  };

  fetchProfilePosts = async () => {
    const fetchProfilePostsData = await fetch(
      "https://skelet-rest-api.herokuapp.com/posts/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("auth-token"),
        },
      }
    );

    const data = await fetchProfilePostsData.json();

    this.setState({
      profilePostsData: data,
    });
  };

  componentDidMount() {
    this.fetchProfilePosts();
  }

  render() {
    return (
      <View style={styles.container}>
        <Posts data={this.state.profilePostsData}></Posts>
      </View>
    );
  }
}

export default ProfilePosts;

// PROVIDE HIGH ACCURANCY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ebecec",
    display: "flex",
  },
});
