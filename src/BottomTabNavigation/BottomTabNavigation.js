// RESEARCH make "inet to 'my;
import React from "react";
import { StyleSheet } from "react-native";
// nav
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// stack
import { createStackNavigator } from "@react-navigation/stack";
// screens
import Home from "../screens/Home/Home";
import AddPost from "../screens/AddPost/AddPost";
// import Profile from "../screens/Profile/Profile";
// comps
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Profile from "../screens/Profile/Profile";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigation() {
  const color = "green";

  return (
    <NavigationContainer>
      <Tab.Navigator
        style={[styles.container]}
        initialRouteName="Home" //
        activeColor="blue"
        inactiveColor="grey"
        barStyle={{ backgroundColor: "#ebecec" }}
        labeled={false}
      >
        <Tab.Screen
          name="HomeName"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        {/* opt */}
        <Tab.Screen
          name="opt1"
          component={AddPost}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cards-heart"
                color={color}
                size={26}
              />
            ),
            tabBarBadge: 15,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={AddPost}
          options={{
            tabBarLabel: "AddPost",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
        {/* opt */}
        <Tab.Screen
          name="opt2"
          component={AddPost}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chat-processing"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            // tabBarOptions: { showLabel: false }
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
