import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PropsBaseHeader } from "./BaseHeaderModel";
import { theme } from "../../../../constants/index";
const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseHeader({
  title,
  IconLeft,
  IconRight,
  onPressLeft,
  onPressRight,
  styleHeader,
}: PropsBaseHeader) {
  return (
    <View style={[styles.container, styleHeader]}>
      {!!IconLeft ? (
        <TouchableOpacity onPress={onPressLeft} style={styles.button}>
          {IconLeft}
        </TouchableOpacity>
      ) : !!IconRight ? (
        <View style={styles.viewOffset}>{IconRight}</View>
      ) : (
        <View />
      )}
      <Text style={styles.textTitle}>{title}</Text>
      {!!IconRight ? (
        <TouchableOpacity onPress={onPressRight} style={styles.button}>
          {IconRight}
        </TouchableOpacity>
      ) : !!IconLeft ? (
        <View style={styles.viewOffset}>{IconLeft}</View>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  viewOffset: {
    opacity: 0,
  },
  button: {
    padding: 5,
  },
  textTitle: {
    fontSize: fontSize.font24,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default BaseHeader;
