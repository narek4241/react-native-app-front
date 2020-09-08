import React, { useState } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
// ok?rm
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoggedIn: false,
  };

  getToken = async () => {
    // const delToken = await AsyncStorage.removeItem("auth-token");
    const token = await AsyncStorage.getItem("auth-token");

    if (token) {
      // SetIsLoggedIn{}
      console.log(`tokenizeeeeeee`);
      console.log(token);

      this.setState({
        isLoggedIn: "true",
      });
    }
    return <View></View>;
  };

  componentDidMount() {
    this.getToken();
  }

  render() {
    return (
      <View style={styles.container}>
        {console.log(`this.state.isLoggedIn ${this.state.isLoggedIn}`)}

        {this.state.isLoggedIn ? <ProfileMenu></ProfileMenu> : <Login></Login>}
      </View>
    );
  }
}

export default Profile;

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
