import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme, Input } from "../../constants/index";
import { PropsBaseInput } from "./BaseInputModel";
const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseInput({
  title,
  IconView,
  onPressIcon,
  style,
  styleContainer,
  error,
  messageError,
  ...props
}: PropsBaseInput) {
  function handlePressIcon() {
    !!onPressIcon && onPressIcon();
  }
  return (
    <View style={styleContainer}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.viewInput}>
        <TextInput style={styles.textInput} {...props} />
        {!!IconView && (
          <TouchableOpacity style={styles.viewIcon} onPress={handlePressIcon}>
            {IconView}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.textError}>{messageError}</Text>}
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
    height: Input.HEIGHT,
    paddingLeft: 16,
  },
  text: {
    fontWeight: "500",
    color: colors.Neutral4,
    fontSize: fontSize.font16,
  },
  //set test text
  textError: {
    fontSize: 9,
    color: "red",
  },
});

export default BaseInput;
