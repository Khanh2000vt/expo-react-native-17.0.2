import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NavigationBar from "expo-navigation-bar";
import React, { useEffect, useState } from "react";

import { StyleSheet, Text, Platform, View } from "react-native";
import { TabAccount, TabCommunities, TabHome } from "../../components";
import { theme } from "../../constants";
import AccountStack from "./AccountStack";
import CommunitiesStack from "./CommunitiesStack";
import HomeStack from "./HomeStack";
import MyTabBar from "./MyTabBar/MyTabBar";

const Tab = createBottomTabNavigator();
function MainStack() {
  const [barVisibility, setBarVisibility] =
    useState<NavigationBar.NavigationBarVisibility>();
  useEffect(() => {
    Platform.OS === "android" && navigationConfig();
  }, [barVisibility]);

  Platform.OS === "android" &&
    NavigationBar.addVisibilityListener(({ visibility }) => {
      if (visibility === "visible") {
        setBarVisibility(visibility);
      }
    });

  const navigationConfig = async () => {
    // Hide it
    NavigationBar.setVisibilityAsync("hidden");
  };

  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="CommunitiesStack" component={CommunitiesStack} />
      <Tab.Screen name="AccountStack" component={AccountStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MainStack;
