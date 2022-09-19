import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants";
import { handleTimeCreateAt } from "../../utils";
import { BaseInteractiveProps } from "./BaseInteractiveModel";

enum Type {
  LIKE = "like",
  REPLY = "reply",
}

function BaseInteractive({ user, type }: BaseInteractiveProps) {
  return (
    <View
      style={[
        styles.container,
        type === Type.REPLY && { backgroundColor: theme.colors.Neutral1 },
      ]}
    >
      <View style={styles.flex}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.textName}>{user.name}</Text>
        <View style={styles.ellipse} />
        <Text style={styles.textTime}>
          {handleTimeCreateAt(user.createdAt)}
        </Text>
      </View>
      <View style={styles.flex}>
        <View style={styles.offset} />
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}>
          <Text style={styles.textBody}>{user.body}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingTop: 30,
    paddingRight: 24,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic4,
  },
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral10,
    marginLeft: 11,
  },
  ellipse: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.Neutral4,
    marginHorizontal: 8,
  },
  textTime: {
    fontWeight: "500",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral4,
  },
  textBody: {
    fontWeight: "400",
    lineHeight: 20,
    fontSize: theme.fontSize.font15,
    color: theme.colors.Neutral8,
    marginLeft: 11,
  },
  offset: {
    width: 32,
  },
});

export default BaseInteractive;
