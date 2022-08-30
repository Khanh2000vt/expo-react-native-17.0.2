import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TabAccount, TabCommunities, TabHome } from "../../../components";
import { theme } from "../../../constants";

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tab}>
      <View style={styles.offsetView} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        let textLabel;
        let IconItem;
        if (route.name === "HomeStack") {
          textLabel = "Home";
          IconItem = (
            <TabHome
              stroke={isFocused ? theme.colors.primary : theme.colors.Neutral3}
            />
          );
        } else if (route.name === "CommunitiesStack") {
          textLabel = "Communities";
          IconItem = (
            <TabCommunities
              stroke={isFocused ? theme.colors.primary : theme.colors.Neutral3}
            />
          );
        } else if (route.name === "AccountStack") {
          textLabel = "Account";
          IconItem = (
            <TabAccount
              stroke={isFocused ? theme.colors.primary : theme.colors.Neutral3}
            />
          );
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.container,
              {
                borderTopWidth: 1,
                borderColor: isFocused
                  ? theme.colors.primary
                  : theme.colors.Neutral0,
              },
            ]}
            key={index}
          >
            <View
              style={[
                styles.body,
                {
                  borderTopWidth: 1,
                  borderColor: isFocused
                    ? theme.colors.primary
                    : theme.colors.Neutral3,
                },
              ]}
            >
              {IconItem}
              <Text
                style={[
                  {
                    color: isFocused
                      ? theme.colors.Neutral8
                      : theme.colors.Neutral3,
                  },
                  styles.text,
                ]}
              >
                {textLabel}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={styles.offsetView} />
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    // paddingHorizontal: 24,
    backgroundColor: theme.colors.Neutral0,
  },
  container: {
    flex: 1,
    height: 90,
    // borderTopWidth: 2,
    // backgroundColor: theme.colors.Neutral0,
  },
  text: {
    fontWeight: "600",
    fontSize: theme.fontSize.font14,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
