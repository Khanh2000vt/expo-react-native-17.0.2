import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../../constants/index";
import { PropsBaseInput } from "./base-input-model";
const colors = theme.colors;
function BaseInput({ title, ...props }: PropsBaseInput) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.viewInput}>
        <TextInput {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  viewInput: {
    backgroundColor: colors.colorInput,
    height: 56,
  },
});

export default BaseInput;
