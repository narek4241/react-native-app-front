import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
// use 'imp' tricky shorthand

const Post = ({ id, imgUrl, price, currency, title }) => {
  let priceAndCurrency;
  if (currency == "usd") {
    priceAndCurrency = "$" + price;
  } else if (currency == "amd") {
    priceAndCurrency = price + " ֏";
  } else if (currency == "rub") {
    priceAndCurrency = price + " руб.";
  } else if (currency == "eur") {
    priceAndCurrency = "€" + price;
  }

  return (
    <View style={styles.post}>
      <TouchableOpacity>
        <View style={[styles.imgView, styles.centerFlex]}>
          {imgUrl ? (
            <Image
              style={styles.imgView_img}
              source={{
                uri: imgUrl,
              }}
            />
          ) : (
            <Image
              style={styles.imgView_img}
              source={{
                uri:
                  "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1597252820/picture-icon_hq0jhe.png",
              }}
            />
          )}
        </View>
        <View style={styles.price}>
          <Text style={styles.price_text}>{priceAndCurrency}</Text>
        </View>
        <View style={styles.title}>
          <Text numberOfLines={2} style={styles.title_text}>
            {title}
          </Text>
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
    // width: 200, // tablet?this
    width: "49%", // default?this
    height: 275,
    paddingHorizontal: 10,
    overflow: "hidden",
    backgroundColor: post_bg,
  },

  imgView: {
    height: "75%",
    // resizeMode: "contain", // ok?rm
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
    width: "100%",
  },
  title_text: {
    width: 154,
    paddingVertical: 6,
    paddingLeft: 6,
    // #trash needs centerFlex+fs // isNorm ? rmComment
  },
});