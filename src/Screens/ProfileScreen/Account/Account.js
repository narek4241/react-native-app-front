// #task change styles.NAMES (source: singlePage) (PROVIDE)
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import Posts from "../../HomeScreen/Posts/Posts";

const Account = (props) => {
  const [accountPosts, setAccountPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAccountPosts = async () => {
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
    setAccountPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAccountPosts();
  });

  return (
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
          <Text style={styles.post_owner_firstname_text}>Name</Text>
        </View>
        <View style={[styles.post_owner_date, styles.centerFlex]}>
          <Text style={styles.post_owner_date_text}>On Skelet since Date</Text>
        </View>
      </View>

      <View style={[styles.account_posts, styles.centerFlex]}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Posts data={accountPosts} navigation={props.navigation}></Posts>
        )}
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
