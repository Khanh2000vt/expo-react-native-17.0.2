import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import TabBarItem from "./TabBarItem";

function MyTabBar(props: BottomTabBarProps) {
  const routes = props.state.routes;
  return (
    <View style={styles.tab}>
      <View style={styles.offsetView} />
      {routes.map((route, index) => {
        return (
          <TabBarItem key={index} props={props} route={route} index={index} />
        );
      })}
      <View style={styles.offsetView} />
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    backgroundColor: theme.colors.Neutral0,
  },
  offsetView: {
    width: 24,
    height: 2,
    borderTopWidth: 1,
    borderTopColor: theme.colors.Neutral0,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.Neutral3,
  },
});

export default MyTabBar;
