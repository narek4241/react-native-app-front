// RESEARCH make "inet to 'my;
import React from "react";
import { StyleSheet } from "react-native";
// nav
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// screens
import Home from "../screens/Home/Home";
import AddPost from "../screens/AddPost/AddPost";
import Profile from "../screens/Profile/Profile";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigation() {
  const color = "green";

  return (
    <NavigationContainer>
      <Tab.Navigator
        style={[styles.container]}
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: "#e91e63",
          activeTintColor: "orange",
        }}
      >
        <Tab.Screen
          name="HomeName"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={AddPost}
          options={{
            tabBarLabel: "AddPost",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            tabBarBadge: 15,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// PROVIDE HIGH ACCURACY (CSS)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // given to Tab.Nav i.o Nav.Cont //
  container: {
    width: "100%",
  },
});
