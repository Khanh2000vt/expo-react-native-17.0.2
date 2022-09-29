import { getMemberRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { getPersonByID, handleTimeCreateAt } from "@utils";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseInteractiveProps } from "./BaseInteractiveModel";

enum Type {
  LIKE = "like",
  REPLY = "reply",
}
const nameDefault = "Donnie Tromp";
function BaseInteractive({
  userID,
  post,
  type,
  userCommentID,
}: BaseInteractiveProps) {
  const memberRedux = useSelector(getMemberRedux);
  const userRedux = useSelector(getUserRedux);
  const user = type === Type.LIKE ? userID : userCommentID;

  const userPost = getPersonByID(memberRedux, user, userRedux);
  return (
    <View
      style={type === Type.REPLY ? styles.containerReply : styles.containerLike}
    >
      <View style={styles.flex}>
        <Image
          source={{ uri: userPost?.avatar }}
          style={[
            styles.avatar,
            type === Type.REPLY ? styles.avatarReply : styles.avatarLike,
          ]}
        />
        <Text
          style={[styles.textName, type === Type.LIKE && styles.textNameLike]}
        >
          {userPost?.name || nameDefault}
        </Text>
        {type === Type.REPLY && (
          <>
            <View style={styles.ellipse} />
            <Text style={styles.textTime}>
              {handleTimeCreateAt(userCommentID?.createdAt)}
            </Text>
          </>
        )}
      </View>
      {type === Type.REPLY && (
        <View style={styles.flex}>
          <View style={styles.offset} />
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}>
            <Text style={styles.textBody}>{userCommentID?.comment}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerReply: {
    paddingLeft: 25,
    paddingTop: 30,
    paddingRight: 24,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
    backgroundColor: theme.colors.Neutral1,
  },
  containerLike: {
    marginVertical: 12,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic4,
  },
  avatarReply: {
    width: 32,
    height: 32,
  },
  avatarLike: {
    width: 48,
    height: 48,
  },
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral10,
    marginLeft: 11,
  },
  textNameLike: {
    fontWeight: "500",
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    marginLeft: 23,
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
