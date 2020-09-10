// #task (like in ProfileMenu) turn 'class component back to 'function component (for mastering)
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import Posts from "../../HomeScreen/Posts/Posts";

class ProfilePosts extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    profilePostsData: [],
    isLoading: true,
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
      isLoading: false,
    });
  };

  componentDidMount() {
    this.fetchProfilePosts();
  }

  render() {
    return (
      <View style={[styles.container, styles.centerFlex]}>
        {this.state.isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Posts
            data={this.state.profilePostsData}
            navigation={this.props.navigation}
          ></Posts>
        )}
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
