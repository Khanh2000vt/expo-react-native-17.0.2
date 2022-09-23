import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../../constant";
import { MenuComponentProps } from "../model";

function MenuComponent({ menu }: MenuComponentProps) {
  return (
    <TouchableOpacity
      onPress={menu.onPress}
      style={styles.itemMenu}
      activeOpacity={0.8}
    >
      {menu.icon}
      <Text style={styles.itemMenuTitle}>{menu.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderColor: theme.colors.Neutral3,
    alignItems: "center",
  },
  itemMenuTitle: {
    color: theme.colors.Neutral10,
    fontWeight: "500",
    fontSize: theme.fontSize.font18,
    marginLeft: 20,
  },
});

export default MenuComponent;
