// #task change styles.NAMES (source: singlePage) (PROVIDE)
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import Posts from "../../HomeScreen/Posts/Posts";

class Account extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    accountDetails: {},
    accountPosts: [],
    isLoading: true,
    isLoadingPosts: true,
  };

  fetchAccountDetails = async () => {
    const fetchAccountDetailsData = await fetch(
      "https://skelet-rest-api.herokuapp.com/auth/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("auth-token"),
        },
      }
    );

    const data = await fetchAccountDetailsData.json();
    this.setState({
      accountDetails: data,
      isLoading: false,
    });
  };

  fetchAccountPosts = async () => {
    const fetchAccountPostsData = await fetch(
      "https://skelet-rest-api.herokuapp.com/posts/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("auth-token"),
        },
      }
    );
    const data = await fetchAccountPostsData.json();
    this.setState({
      accountPosts: data,
      isLoadingPosts: false,
    });
  };

  componentDidMount() {
    this.fetchAccountDetails();
    this.fetchAccountPosts();
  }

  render() {
    return (
      <View style={[styles.centerFlex, styles.container]}>
        {this.state.isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <View style={styles.account_container}>
            <View style={styles.post_owner}>
              <View style={[styles.post_owner_avatar, styles.centerFlex]}>
                <Image
                  style={styles.post_owner_avatar_image}
                  source={{
                    uri:
                      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596209154/avatar_oxcztw.png",
                  }}
                ></Image>
              </View>
              <View style={[styles.post_owner_firstname, styles.centerFlex]}>
                <Text style={styles.post_owner_firstname_text}>
                  {this.state.accountDetails.firstname}
                </Text>
              </View>
              <View style={[styles.post_owner_date, styles.centerFlex]}>
                <Text style={styles.post_owner_date_text}>
                  On Skelet since {this.state.accountDetails.date}
                </Text>
              </View>
            </View>

            <View style={[styles.account_posts, styles.centerFlex]}>
              {this.state.isLoadingPosts ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <Posts
                  data={this.state.accountPosts}
                  navigation={this.props.navigation}
                ></Posts>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Account;

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "100%",
    height: "100%", //
  },

  account_container: {
    width: "100%",
    height: "100%", //
  },

  post_owner: {
    height: 150,
    backgroundColor: "#fff",
  },
  post_owner_avatar: {
    height: "60%",
  },
  post_owner_avatar_image: {
    width: "100%",
    height: "75%",
    resizeMode: "contain",
  },
  post_owner_firstname: {
    height: "15%",
  },
  post_owner_firstname_text: {
    fontSize: 20,
  },
  post_owner_date: {
    height: "25%",
  },
  post_owner_date_text: {
    fontSize: 14,
    color: "grey",
  },

  account_posts: {
    minHeight: 200,
  },
});
