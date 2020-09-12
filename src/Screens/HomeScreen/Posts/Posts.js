import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Post from "./Post/Post";

// #task scrollview to flatlist (for scroll load nuance, has special syntax)
const Posts = ({ data, navigation }) => {
  const posts = data.map((prod) => {
    return (
      <Post
        // line below is 'opt' (avoids)
        key={prod._id}
        id={prod._id}
        imgUrl={prod.imgUrl}
        price={prod.price}
        title={prod.title}
        currency={prod.currency}
        navigation={navigation}
        userId={prod.userId}
      ></Post>
    );
  });

  return (
    <ScrollView>
      <View style={[styles.centerFlex, styles.posts]}>
        {/* {posts ? posts : <Text>No Posts</Text>} */}
        {posts}
      </View>
    </ScrollView>
  );
};

export default Posts;

// PROVIDE HIGH CODE ACCURANCY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  posts: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
