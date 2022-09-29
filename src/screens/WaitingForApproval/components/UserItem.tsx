import { BaseButton, Users } from "@components";
import { IMemberAPI, IMemberRequest } from "@model";
import { theme } from "@theme";
import { handleTimeToNow } from "@utils";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ISate {
  item: IMemberRequest;
  onPressItem: (item: IMemberAPI) => void;
  onAccept: (item: IMemberAPI) => void;
  onReject: (item: IMemberAPI) => void;
}

const ItemCommunity = ({ item }: { item: IMemberAPI }) => {
  return (
    <View style={[styles.flex, styles.viewCommunity]}>
      <Image source={{ uri: item.avatar }} style={styles.imageCommunity} />
      <Text style={styles.textNameCommunity}>Music</Text>
    </View>
  );
};

function UserItem({ onPressItem, item, onAccept, onReject }: ISate) {
  const { createdAt, member } = item;
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPressItem(member)}>
        <Image source={{ uri: member.avatar }} style={styles.avatar} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bodyItem}
        activeOpacity={0.8}
        onPress={() => onPressItem(member)}
      >
        <View style={styles.viewTextTitle}>
          <Text style={styles.textName}>{member.name}</Text>
          <Text style={styles.textTime}>{handleTimeToNow(createdAt)}</Text>
        </View>
        <View style={[styles.flex, styles.viewFriend]}>
          <Text style={styles.textFriend}>{member.friend}</Text>
          <Users />
        </View>
        <View style={styles.viewCommunities}>
          {Array(3)
            .fill(0)
            .map((_community, index) => {
              return <ItemCommunity item={member} key={index} />;
            })}
        </View>
        <View style={[styles.flex, styles.viewButton]}>
          <BaseButton
            title="Accept"
            style={[styles.button, styles.buttonAccept]}
            onPress={() => onAccept(member)}
          />
          <BaseButton
            title="Reject"
            option="solid"
            color={theme.colors.Neutral4}
            style={[styles.button, styles.buttonReject]}
            onPress={() => onReject(member)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: theme.colors.Neutral1,
    marginVertical: 10,
    padding: 16,
    paddingLeft: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic1,
  },
  bodyItem: {
    marginLeft: 20,
    flex: 1,
  },
  viewTextTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textName: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 25.6,
    color: theme.colors.darkerPrimary,
  },
  textFriend: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral6,
    marginRight: 4,
  },
  textTime: {
    fontWeight: "500",
    fontSize: theme.fontSize.font14,
    lineHeight: 22.4,
    color: theme.colors.Neutral4,
    marginBottom: 4,
  },
  viewFriend: {
    marginTop: 5,
  },
  viewCommunities: {
    marginTop: 25,
  },
  viewCommunity: {
    marginBottom: 4,
  },
  imageCommunity: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginRight: 8,
  },
  textNameCommunity: {
    fontSize: theme.fontSize.font14,
    fontWeight: "500",
    lineHeight: 22.4,
    color: theme.colors.Neutral8,
  },
  viewButton: {
    justifyContent: "space-between",
  },
  buttonAccept: {
    marginRight: 8,
  },
  button: {
    flex: 1,
  },
  buttonReject: {
    marginHorizontal: 8,
  },
});

export default UserItem;
