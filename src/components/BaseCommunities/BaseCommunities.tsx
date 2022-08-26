import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants/index";
import { Tick } from "../Icon";
import { BaseCommunitiesProps } from "./BaseCommunitiesModel";
const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseCommunities({ item, onPress }: BaseCommunitiesProps) {
  const [tick, setTick] = useState<boolean>(false);
  function handleOnPress() {
    !!onPress && onPress(!tick, item);
    setTick(!tick);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container]}
      onPress={handleOnPress}
    >
      <View
        style={[
          styles.iconView,
          {
            backgroundColor: tick ? colors.primary : colors.Neutral0,
          },
        ]}
      >
        <Tick />
      </View>
      <Image
        source={require("../../../assets/png/imgTest.png")}
        width={74}
        height={74}
      />
      <View style={styles.body}>
        <Text style={styles.textTitle}>Movies</Text>
        <Text style={styles.textBody}>123443 members</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // height: 94,
    paddingVertical: 10,
    borderRadius: 8,
  },
  iconView: {
    marginRight: 28,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  body: {
    flex: 1,
    marginLeft: 16,
  },
  textTitle: {
    fontWeight: "500",
    fontSize: fontSize.font18,
    color: colors.Neutral10,
    marginVertical: 2,
  },
  textBody: {
    fontWeight: "500",
    fontSize: fontSize.font14,
    color: colors.Neutral4,
    marginVertical: 2,
  },
});

export default BaseCommunities;
