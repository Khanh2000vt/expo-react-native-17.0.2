import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BaseIntroductionProps } from "./BaseIntroductionModel";

import { theme } from "@theme";
import { ArrowDownIcon } from "@components";

const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseIntroduction({}: BaseIntroductionProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.viewSNS, styles.header]}
        activeOpacity={0.8}
      >
        <Image source={require("@assets/png/instagram.png")} />
        <ArrowDownIcon />
      </TouchableOpacity>
      <View style={[styles.viewSNS, styles.body]}>
        <Text style={styles.textUsername}>@Yuki.Matsuura</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flex: 1,
    marginBottom: 16,
  },
  viewSNS: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: colors.colorInput,
    borderRadius: 8,
    height: 58,
  },
  header: {
    width: 94,
    // flex: 1,
    marginRight: 8,
  },
  body: {
    flex: 1,
    marginLeft: 8,
    paddingHorizontal: 22,
  },
  textUsername: {
    fontWeight: "500",
    fontSize: fontSize.font16,
    color: colors.Neutral10,
  },
});

export default BaseIntroduction;
