import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme, Input } from "../../constants/index";
import { PropsBaseInput } from "./base-input-model";
const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseInput({
  title,
  IconView,
  onPressIcon,
  style,
  styleContainer,
  ...props
}: PropsBaseInput) {
  function handlePressIcon() {
    onPressIcon && onPressIcon();
  }
  return (
    <View style={styleContainer}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.viewInput}>
        <TextInput style={styles.textInput} {...props} />
        {IconView && (
          <TouchableOpacity style={styles.viewIcon} onPress={handlePressIcon}>
            {IconView}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewInput: {
    backgroundColor: colors.colorInput,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    height: Input.HEIGHT,
    marginTop: 4,
  },
  viewIcon: {
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  textInput: {
    flex: 1,
    // backgroundColor: "red",
    height: Input.HEIGHT,
    paddingLeft: 16,
  },
  text: {
    color: colors.Neutral4,
    fontSize: fontSize.font16,
  },
});

export default BaseInput;
