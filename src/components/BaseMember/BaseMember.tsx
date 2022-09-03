import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SlidersHorizontal, SvgUser } from "../Icon";
import { theme } from "../../constants";
function BaseMember() {
  return (
    <View style={[styles.container, styles.flex]}>
      <Image
        source={require("../../../assets/png/Rectangle68.png")}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.textName}>Jenny Wilson</Text>
        <View style={styles.flex}>
          <Text style={styles.textIndexMember}>2050</Text>
          <SvgUser />
        </View>
        <Text style={styles.textDescription}>
          I want to empower entrepreneurs and have a tangible impact in my
          community.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingLeft: 20,
    backgroundColor: theme.colors.Neutral1,
    borderRadius: 8,
    marginVertical: 8,
  },
  flex: {
    flexDirection: "row",
  },
  body: {
    marginLeft: 16,
    flex: 1,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    borderWidth: 4,
    borderColor: "#FF4C41",
  },
  textName: {
    color: theme.colors.darkerPrimary,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    marginBottom: 4,
  },
  textIndexMember: {
    fontWeight: "500",
    color: theme.colors.Neutral8,
    fontSize: theme.fontSize.font14,
    marginRight: 5,
  },
  textDescription: {
    fontWeight: "400",
    fontSize: theme.fontSize.font14,
    color: theme.colors.Neutral6,
    marginTop: 8,
  },
});

export default BaseMember;
