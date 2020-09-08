// RESEARCH make 'internet to 'my;
import React from "react";
import { StyleSheet } from "react-native";
// nav
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// stack
import { createStackNavigator } from "@react-navigation/stack";
// screens
import Home from "../Screens/HomeScreen/Home";
import Favorites from "../Screens/FavoritesScreen/Favorites";
import AddPost from "../Screens/AddPostScreen/AddPost";
import Messages from "../Screens/MessagesScreen/Messages";
import Profile from "../Screens/ProfileScreen/Profile";
// comps
import Login from "../Screens/ProfileScreen/Authentication/Login/Login";
import Register from "../Screens/ProfileScreen/Authentication/Register/Register";
import ProfilePage from "../Screens/ProfileScreen/Account/Account";
import ProfilePosts from "../Screens/ProfileScreen/ProfilePosts/ProfilePosts";
import ProfileSettings from "../Screens/ProfileScreen/ProfileSettings/ProfileSettings";
import ProfileMenu from "../Screens/ProfileScreen/ProfileMenu/ProfileMenu";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator /*headerMode="true"*/ initialRouteName="">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="Account" component={ProfilePage} />
      <Stack.Screen name="My Posts" component={ProfilePosts} />
      <Stack.Screen name="Settings" component={ProfileSettings} />
      <Stack.Screen name="ProfileMenu" component={ProfileMenu} />
    </Stack.Navigator>
  );
};

// #task color and size nuance in tabBarIcon
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={styles.container}
        initialRouteName="Home"
        activeColor="blue"
        inactiveColor="grey"
        barStyle={{ backgroundColor: "#ebecec" }}
        labeled={false}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: (
              { color, size } //
            ) => <MaterialCommunityIcons name="home" color={color} size={26} />,
          }}
          options={{
            tabBarIcon: (
              { color, size } //
            ) => <MaterialCommunityIcons name="home" color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
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
          name="AddPost"
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
        <Tab.Screen
          name="Messages"
          component={Messages}
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
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// PROVIDE HIGH ACCURACY (CSS)
const styles = StyleSheet.create({
  // given to Tab.Nav i.o Nav.Cont //
  container: {
    width: "100%",
  },
});