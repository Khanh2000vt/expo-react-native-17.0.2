import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getCaseTabBar } from "./TabBarHandle";

interface IState {
  props: BottomTabBarProps;
  route: any;
  index: number;
}

function TabBarItem({ props, route, index }: IState) {
  const { state, descriptors, navigation } = props;
  const { options } = descriptors[route.key];
  const isFocused = state.index === index;
  const [textLabel, IconItem] = getCaseTabBar(route, isFocused);
  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true } as never);
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
      activeOpacity={0.8}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.container,
        {
          borderTopWidth: 1,
          borderColor: isFocused ? theme.colors.primary : theme.colors.Neutral0,
        },
      ]}
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
              color: isFocused ? theme.colors.Neutral8 : theme.colors.Neutral3,
            },
            styles.text,
          ]}
        >
          {textLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
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
});

export default TabBarItem;
