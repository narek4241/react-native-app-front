import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
// use 'imp' tricky shorthand

const Post = () => {
  return (
    <View style={styles.post}>
      <TouchableOpacity>
        <View style={[styles.imgView, styles.centerFlex]}>
          <Image
            style={styles.imgView_img}
            source={{
              uri:
                "https://cdn.motor1.com/images/mgl/AMQl6/s1/2021-mercedes-benz-s-class-rendering.jpg",
            }}
          />
        </View>
        <View style={styles.price}>
          <Text style={styles.price_text}>$90000</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.title_text}>Mercedes-Benz S-class w223</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Post;

// PROVIDED
const post_bg = "#ffffff";

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  post: {
    minWidth: 175,
    width: 200,
    height: 275,
    paddingHorizontal: 10,
    overflow: "hidden",
    backgroundColor: post_bg,
  },

  imgView: {
    height: "75%",
    resizeMode: "contain",
  },
  imgView_img: {
    width: 174,
    height: 165,
    borderRadius: 6,
    resizeMode: "cover",
  },

  price: {
    height: "10%",
  },
  price_text: {
    width: "100%",
    paddingVertical: 6,
    paddingLeft: 8,
    color: "#222",
    // #trash centerFlex+fs // isNorm ? rmComment
    fontSize: 16,
    fontWeight: "700",
  },

  title: {
    height: "15%",
  },
  title_text: {
    width: 174,
    paddingVertical: 6,
    paddingLeft: 6,
    // #trash needs centerFlex+fs // isNorm ? rmComment
  },
});
