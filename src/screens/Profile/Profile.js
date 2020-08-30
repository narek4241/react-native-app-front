import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Settings,
} from "react-native";

import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";

import Home from "../Home/Home";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Profile() {
  const [IsLogged, SetIsLogged] = useState(false);

  return (
    <View style={[styles.container, styles.centerFlex]}>
      {!IsLogged ? <Login></Login> : <Register></Register>}
      {/* <TouchableOpacity onPress={() => SetIsLogged(!IsLogged)}>
        <Text>Press</Text>
      </TouchableOpacity> */}
    </View>
  );

  //   const Stack = createStackNavigator();

  // function MyStack() {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //       <Stack.Screen name="Notifications" component={NotificationsScreen} />
  //       <Stack.Screen name="Profile" component={ProfileScreen} />
  //       <Stack.Screen name="Settings" component={SettingsScreen} />
  //     </Stack.Navigator>
  //   );

  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Notifications" component={Home} />
  //       <Stack.Screen name="Profile" component={Home} />
  //       <Stack.Screen name="Settings" component={Home} />
  //     </Stack.Navigator>
  //   );
}

// PROVIDE HIGH ACCURANCY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#1e1e2c",
  },
});
