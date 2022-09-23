import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BaseButtonProps } from "./BaseButtonModel";
import { Button } from "@constant/index";
import { theme } from "@theme";
const colors = theme.colors;

enum OptionsEnum {
  SOLID = "solid",
  FILL = "fill",
  DEFAULT = "default",
}

function BaseButton({
  title,
  IconLeft,
  IconRight,
  option = OptionsEnum.DEFAULT,
  color = option === OptionsEnum.SOLID ? colors.Neutral8 : colors.Neutral0,
  backgroundColor = option === OptionsEnum.SOLID
    ? colors.Neutral0
    : colors.primary,
  style,
  styleText,
  onPress,
  disabled = false,
}: BaseButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor,
        },
        option === OptionsEnum.SOLID && {
          borderWidth: 1,
          borderColor: color,
        },
        style,
        disabled && {
          borderColor: colors.Neutral3,
        },
      ]}
      disabled={disabled}
    >
      {IconLeft}
      <Text
        style={[
          styles.textTitle,
          {
            color,
          },
          styleText,
          disabled && {
            color: colors.Neutral3,
          },
        ]}
      >
        {title}
      </Text>
      {IconRight}
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
    marginHorizontal: 13,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 22,
  },
});

export default BaseButton;
