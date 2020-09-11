import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Posts from "../Posts";

class SinglePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    // got from Post.js (when navigating to here)
    postId: this.props.route.params.postId,
    singlePostData: {},
    recommendedPostsData: [],
    isLoading: true,
    isLoadingRecPosts: true,
  };

  fetchSinglePage = async (postId) => {
    const fetchSinglePageData = await fetch(
      `https://skelet-rest-api.herokuapp.com/posts/post/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await fetchSinglePageData.json();
    this.setState({
      singlePostData: data,
      isLoading: false,
    });
  };

  fetchRecommendedPosts = async () => {
    const fetchRecommendedPostsData = await fetch(
      "https://skelet-rest-api.herokuapp.com/posts/cat/vehicles",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await fetchRecommendedPostsData.json();
    this.setState({
      recommendedPostsData: data,
      isLoadingRecPosts: false,
    });
  };

  arrangePriceAndCurrency = (price, currency) => {
    if (currency == "usd") {
      return "$" + price;
    } else if (currency == "amd") {
      return price + " ֏";
    } else if (currency == "rub") {
      return price + " руб.";
    } else if (currency == "eur") {
      return "€ " + price;
    }
  };

  componentDidMount() {
    this.fetchSinglePage(this.state.postId);
    this.fetchRecommendedPosts();
  }

  render() {
    return (
      <View style={[styles.container, styles.centerFlex]}>
        {this.state.isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <ScrollView style={styles.container_post}>
            <View style={styles.post_images}>
              {/* #task add slider here*/}
              <Image
                style={styles.post_images_image}
                source={{
                  uri: this.state.singlePostData.imgUrl,
                }}
              ></Image>
            </View>

            <View style={styles.post_header}>
              <View style={styles.post_header_title}>
                <Text style={styles.post_header_title_text}>
                  {this.state.singlePostData.title}
                </Text>
              </View>

              <View style={styles.post_header_cat}>
                <Text style={styles.post_header_cat_text}>
                  category / {this.state.singlePostData.cat}
                </Text>
              </View>

              <View style={styles.post_header_price}>
                <Text style={styles.post_header_price_text}>
                  {this.arrangePriceAndCurrency(
                    this.state.singlePostData.price,
                    this.state.singlePostData.currency
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.post_location}>
              <View style={[styles.centerFlex, styles.post_location_other]}>
                <View
                  style={[styles.post_location_other_button, styles.centerFlex]}
                >
                  <Image
                    style={styles.post_location_other_button_image}
                    source={require("../../../../../assets/location.png")}
                  />
                </View>
              </View>
              <View style={styles.post_location_heading}>
                <Text style={styles.post_location_heading_text}>
                  {this.state.singlePostData.region}
                </Text>
              </View>
            </View>

            <View style={styles.post_properties}>
              <View style={styles.post_properties_item}>
                <Text style={styles.post_properties_item_key}>type</Text>
                <Text style={styles.post_properties_item_value}>
                  {this.state.singlePostData.type}
                </Text>
              </View>
              <View style={styles.post_properties_item}>
                <Text style={styles.post_properties_item_key}>date</Text>
                <Text style={styles.post_properties_item_value}>
                  {this.state.singlePostData.date}
                </Text>
              </View>
              <View style={styles.post_properties_item}>
                <Text style={styles.post_properties_item_key}>state</Text>
                <Text style={styles.post_properties_item_value}>
                  {this.state.singlePostData.state}
                </Text>
              </View>
            </View>

            <View style={styles.post_desc}>
              <Text style={styles.post_desc_text}>
                {this.state.singlePostData.desc}
              </Text>
            </View>

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
                <Text style={styles.post_owner_date_text}>
                  On Skelet since Date
                </Text>
              </View>
            </View>

            <View style={styles.post_similarPosts}>
              <View style={styles.post_similarPosts_heading}>
                <Text style={styles.post_similarPosts_heading_text}>
                  Recommended Posts
                </Text>
              </View>
              <View style={[styles.post_similarPosts_posts, styles.centerFlex]}>
                {this.state.isLoadingRecPosts ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  <Posts
                    data={this.state.recommendedPostsData}
                    navigation={this.props.navigation}
                  ></Posts>
                )}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

export default SinglePage;

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
  },

  container_post: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ebecec",
  },

  post_images: {
    width: "100%",
    height: 250,
  },
  post_images_image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  post_header: {
    width: "100%",
    height: 125,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  post_header_title: {
    flex: 3,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingTop: 15,
  },
  post_header_title_text: {
    flex: 1,
    fontSize: 20,
    textAlignVertical: "center",
  },
  post_header_cat: {
    flex: 2,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  post_header_cat_text: {
    flex: 1,
    fontSize: 14,
    textAlignVertical: "center",
    color: "grey",
    textTransform: "capitalize",
  },
  post_header_price: {
    flex: 3,
    fontSize: 20,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  post_header_price_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
  },

  post_location: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  post_location_other: {
    width: "10%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  post_location_other_button: {
    width: "75%",
    height: "100%",
  },
  post_location_other_button_image: {
    width: "100%",
    height: "35%",
    resizeMode: "contain",
  },
  post_location_heading: {
    width: "90%",
    height: "100%",
  },
  post_location_heading_text: {
    flex: 1,
    fontSize: 17,
    marginLeft: "1%",
    textAlignVertical: "center",
  },

  post_properties: {
    width: "100%",
  },
  post_properties_item: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 0.5,
  },
  post_properties_item_key: {
    fontSize: 16,
    textAlignVertical: "center",
    textTransform: "capitalize",
  },
  post_properties_item_value: {
    fontSize: 16,
    fontWeight: "bold",
    textAlignVertical: "center",
    textTransform: "capitalize",
  },

  post_desc: {
    width: "100%",
    minHeight: 150,
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
  },
  post_desc_text: {
    flex: 1,
    fontSize: 16,
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

  post_similarPosts: {
    width: "100%",
    marginTop: 10,
    minHeight: 200,
    backgroundColor: "#fff",
  },
  post_similarPosts_heading: {
    width: "100%",
    height: 50,
  },
  post_similarPosts_heading_text: {
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
  },
  post_similarPosts_posts: {
    width: "100%",
    minHeight: 150,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
