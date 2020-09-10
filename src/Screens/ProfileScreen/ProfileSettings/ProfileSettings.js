import React from "react";
import { View, Button, Text, AsyncStorage } from "react-native";

const ProfileSettings = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => {
            // navigation.popToTop('Login');
            // navigation.popToTop("Login");
            AsyncStorage.removeItem("auth-token");
            navigation.replace('Login');
          }}
          title={"log out"}
        ></Button>
      </View>
    </View>
  );
};

export default ProfileSettings;
