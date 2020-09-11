import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    profileMenuData: {},
    profilePostsDataLength: 0,
    isLoading: true,
  };

  fetchProfileMenu = async () => {
    const fetchProfileMenuData = await fetch(
      "https://skelet-rest-api.herokuapp.com/auth/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("auth-token"),
        },
      }
    );

    const data = await fetchProfileMenuData.json();

    this.setState({
      profileMenuData: data,
      isLoading: false,
    });
  };

  fetchProfilePostsLength = async () => {
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
      profilePostsDataLength: data.length,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.fetchProfileMenu();
    // #task_like #idea space to reduce (get length directly from backend)
    this.fetchProfilePostsLength();
  }

  render() {
    return (
      <View style={[styles.container_parent, styles.centerFlex]}>
        {this.state.isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.profileHeader}
              onPress={() => this.props.navigation.navigate("Account")}
            >
              <View style={[styles.profileHeader_avatar, styles.centerFlex]}>
                <Image
                  style={styles.profileHeader_avatar_image}
                  source={{
                    uri:
                      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596209154/avatar_oxcztw.png",
                  }}
                />
              </View>
              <View style={[styles.profileHeader_content, styles.centerFlex]}>
                <View
                  style={[
                    styles.centerFlex,
                    styles.profileHeader_content_fullname,
                  ]}
                >
                  <Text
                    numberOfLines={1}
                    style={styles.profileHeader_content_fullname_name}
                  >
                    {this.state.profileMenuData.firstname}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={styles.profileHeader_content_fullname_lastname}
                  >
                    {this.state.profileMenuData.lastname}
                  </Text>
                </View>
                <View style={styles.profileHeader_content_email}>
                  <Text
                    numberOfLines={1}
                    style={styles.profileHeader_content_email_text}
                  >
                    {this.state.profileMenuData.email}
                  </Text>
                </View>
              </View>
              <View style={[styles.profileHeader_button, styles.centerFlex]}>
                <Image
                  style={styles.profileHeader_button_image}
                  source={require("../../../assets/Profile/next.png")}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.profileMenu}>
              <TouchableOpacity
                style={styles.profileMenu_item}
                onPress={() => {
                  this.props.navigation.navigate("My Posts");
                }}
              >
                <View style={styles.profileMenu_item_heading}>
                  <Text style={styles.profileMenu_item_heading_text}>
                    My Posts
                  </Text>
                </View>
                <View
                  style={[styles.profileMenu_item_other, styles.centerFlex]}
                >
                  <View style={styles.profileMenu_item_other_number}>
                    <Text style={styles.profileMenu_item_other_number_text}>
                      {this.state.profilePostsDataLength}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.profileMenu_item_other_button,
                      styles.centerFlex,
                    ]}
                  >
                    <Image
                      style={styles.profileMenu_item_other_button_image}
                      source={require("../../../assets/Profile/next.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.profileMenu_item}
                onPress={async () => {
                  await AsyncStorage.removeItem("auth-token");
                  this.props.navigation.replace("Login");
                }}
              >
                <View style={styles.profileMenu_item_heading}>
                  <Text style={styles.profileMenu_item_heading_text}>
                    Settings {" > "} Log Out
                  </Text>
                </View>
                <View
                  style={[styles.profileMenu_item_other, styles.centerFlex]}
                >
                  <View style={styles.profileMenu_item_other_number}>
                    <Text
                      style={styles.profileMenu_item_other_number_text}
                    ></Text>
                  </View>
                  <View
                    style={[
                      styles.profileMenu_item_other_button,
                      styles.centerFlex,
                    ]}
                  >
                    <Image
                      style={styles.profileMenu_item_other_button_image}
                      source={require("../../../assets/Profile/next.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Profile;

// PROVIDE HIGH ACCURACY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container_parent: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ebecec",
    display: "flex",
  },

  profileHeader: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  profileHeader_avatar: {
    width: "25%",
    height: "100%",
  },
  profileHeader_avatar_image: {
    width: "60%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: "10%",
  },
  profileHeader_content: {
    width: "55%",
    height: "100%",
  },
  profileHeader_content_fullname: {
    width: "100%",
    height: "45%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profileHeader_content_fullname_name: {
    fontSize: 20,
  },
  profileHeader_content_fullname_lastname: {
    fontSize: 20,
    paddingLeft: "2.5%",
  },

  profileHeader_content_email: {
    width: "100%",
    height: "35%",
  },
  profileHeader_content_email_text: {
    fontSize: 14,
    color: "grey",
  },

  profileHeader_button: {
    width: "20%",
    height: "100%",
  },
  profileHeader_button_image: {
    width: "100%",
    height: "25%",
  },

  profileMenu: {
    width: "100%",
    height: "20%",
    marginVertical: 20,
    backgroundColor: "#fff",
  },

  profileMenu_item: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "row",
  },

  profileMenu_item_heading: {
    width: "65%",
    height: "100%",
  },
  profileMenu_item_heading_text: {
    width: "100%",
    height: "100%",
    fontSize: 20,
    marginLeft: "15%",
    textAlignVertical: "center",
  },

  profileMenu_item_other: {
    width: "35%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  profileMenu_item_other_number: {
    width: "65%",
    height: "100%",
  },
  profileMenu_item_other_number_text: {
    width: "100%",
    height: "100%",
    fontSize: 16,
    textAlign: "right",
    textAlignVertical: "center",
  },

  profileMenu_item_other_button: {
    width: "35%",
    height: "100%",
  },
  profileMenu_item_other_button_image: {
    width: "50%",
    height: "25%",
  },
});
