import { MainStackParamList } from "@navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Navigation } from "@constant/index";
import AccountStack from "./AccountStack";
import CommunitiesStack from "./CommunitiesStack";
import HomeStack from "./HomeStack";
import MyTabBar from "./MyTabBar/MyTabBar";

const Tab = createBottomTabNavigator<MainStackParamList>();
function MainStack() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name={Navigation.HOME_STACK} component={HomeStack} />
      <Tab.Screen
        name={Navigation.COMMUNITIES_STACK}
        component={CommunitiesStack}
      />
      <Tab.Screen name={Navigation.ACCOUNT_STACK} component={AccountStack} />
    </Tab.Navigator>
  );
}

export default MainStack;
