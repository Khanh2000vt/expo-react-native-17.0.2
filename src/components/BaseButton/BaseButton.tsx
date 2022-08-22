import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BaseButtonProps } from "./BaseButtonModel";
import { theme, Button } from "../../constants/index";
const colors = theme.colors;
function BaseButton({
  title,
  IconView,
  option = "default",
  color = option === "solid" ? colors.Neutral8 : colors.Neutral0,
  backgroundColor = option === "solid" ? colors.Neutral0 : colors.primary,
  onPress,
  style,
  styleText,
}: BaseButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor,
          borderWidth: option === "solid" ? 1 : 0,
          borderColor: option === "solid" ? colors.Neutral8 : undefined,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.textTitle,
          {
            color,
          },
          styleText,
        ]}
      >
        {title}
      </Text>
      {IconView}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: Button.HEIGHT,
  },
  textTitle: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    marginRight: 13,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default BaseButton;
