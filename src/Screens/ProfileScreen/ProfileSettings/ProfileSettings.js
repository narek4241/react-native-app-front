import React from "react";
import { View, Button, Text, AsyncStorage } from "react-native";

const ProfileSettings = ({navigation}) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => {
            AsyncStorage.removeItem("auth-token");
            navigation.navigate('Login');
          }}
          title={"log out"}
        ></Button>
      </View>
    </View>
  );
};

export default ProfileSettings;
