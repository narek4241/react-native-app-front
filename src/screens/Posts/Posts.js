import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Post from "../Posts/Post/Post";

const Posts = () => {
  return (
    <View style={styles.posts}>
      <Post></Post>
    </View>
  );
};

export default Posts;

// PROVIDE HIGH CODE ACCURANCY (css)

const styles = StyleSheet.create({
  posts: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});
