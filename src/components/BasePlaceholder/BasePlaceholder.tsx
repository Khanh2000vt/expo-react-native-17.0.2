import { theme } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";

const BasePlaceholder = {
  CommunityJoined: (amount: number = 3) =>
    Array(amount)
      .fill(0)
      .map((_, index) => {
        return <View style={styles.communityJoined} key={index} />;
      }),

  Community: (amount: number = 4) =>
    Array(amount)
      .fill(0)
      .map((_, index) => {
        return (
          <View style={styles.container} key={index}>
            <View style={styles.communityImage} />
            <View style={styles.flex}>
              <View style={[styles.viewLine, styles.line]} />
              <View style={[styles.viewLine, styles.line, { width: "50%" }]} />
            </View>
          </View>
        );
      }),

  Forum: (amount: number = 5) => {
    return Array(amount)
      .fill(0)
      .map((_, index) => {
        return (
          <View
            style={[styles.container, { alignItems: "flex-start" }]}
            key={index}
          >
            <View style={styles.forumImageAvatar} />
            <View style={styles.flex}>
              <View style={[styles.viewLine, styles.line]} />
              <View
                style={[{ height: getHeightRandom(50, 250) }, styles.line]}
              />
            </View>
          </View>
        );
      });
  },
};

const getHeightRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const styles = StyleSheet.create({
  communityJoined: {
    marginHorizontal: 6,
    height: 129,
    width: 210,
    borderRadius: 16,
    backgroundColor: theme.colors.Neutral1,
  },
  container: {
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  communityImage: {
    width: 74,
    height: 74,
    borderRadius: 12,
    backgroundColor: theme.colors.Neutral1,
  },
  flex: {
    flex: 1,
    marginLeft: 16,
  },
  viewLine: {
    height: 24,
  },
  forumImageAvatar: {
    backgroundColor: theme.colors.Neutral1,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  lineBody: {
    height: 100,
  },
  line: {
    borderRadius: 8,
    backgroundColor: theme.colors.Neutral1,
    marginVertical: 4,
    width: "100%",
  },
});

export default BasePlaceholder;
