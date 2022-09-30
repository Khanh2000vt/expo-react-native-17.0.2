import { MainStackParamList } from "@navigation";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";

import { SCREEN } from "@constant/index";
import AccountStack from "./AccountStack";
import CommunitiesStack from "./CommunitiesStack";
import HomeStack from "./HomeStack";
import MyTabBar from "./MyTabBar/MyTabBar";

const Tab = createBottomTabNavigator<MainStackParamList>();
function MainStack() {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name={SCREEN.HOME_STACK} component={HomeStack} />
      <Tab.Screen
        name={SCREEN.COMMUNITIES_STACK}
        component={CommunitiesStack}
      />
      <Tab.Screen name={SCREEN.ACCOUNT_STACK} component={AccountStack} />
    </Tab.Navigator>
  );
}

export default MainStack;
