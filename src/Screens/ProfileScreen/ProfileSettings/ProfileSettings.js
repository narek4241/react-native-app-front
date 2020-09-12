import React from "react";
import { View, Button, AsyncStorage } from "react-native";

const ProfileSettings = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => {
            AsyncStorage.removeItem("auth-token");
            navigation.replace("Login");
          }}
          title={"log out"}
        ></Button>
      </View>
    </View>
  );
};

export default ProfileSettings;
