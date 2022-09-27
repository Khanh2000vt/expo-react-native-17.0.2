import { Users } from "@components";
import { Navigation, OtherProfile } from "@constant/index";
import { IApprovalAPI } from "@model";
import { theme } from "@theme";
import { handleTimeToNow } from "@utils";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IState {
  item: IApprovalAPI;
  navigation: any;
}

function ItemRequestPending({ item, navigation }: IState) {
  return (
    <TouchableOpacity
      style={styles.containerItem}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate(Navigation.OTHER_PROFILE, {
          userOther: item,
          type: OtherProfile.REQUEST_PENDING,
        })
      }
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.bodyItem}>
        <View style={styles.viewTextTitle}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textTime}>{handleTimeToNow(item.createdAt)}</Text>
        </View>
        <View style={[styles.flex, styles.viewFriend]}>
          <Text style={styles.textFriend}>{item.friend}</Text>
          <Users />
        </View>
        <View style={styles.viewCommunities}>
          {Array(3)
            .fill(0)
            .map((_community, index) => {
              return (
                <View key={index} style={[styles.flex, styles.viewCommunity]}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={styles.imageCommunity}
                  />
                  <Text style={styles.textNameCommunity}>Music</Text>
                </View>
              );
            })}
        </View>
        <Text style={styles.textPending}>Request pending...</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: theme.colors.Neutral1,
    marginVertical: 10,
    padding: 16,
    paddingLeft: 20,
    paddingBottom: 28,
    borderRadius: 8,
    flexDirection: "row",
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
  textName: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 25.6,
    color: theme.colors.darkerPrimary,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageCommunity: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginRight: 8,
  },
  textTime: {
    fontWeight: "500",
    fontSize: theme.fontSize.font14,
    lineHeight: 22.4,
    color: theme.colors.Neutral4,
    marginBottom: 4,
  },
  viewTextTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textFriend: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral6,
    marginRight: 4,
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
  textNameCommunity: {
    fontSize: theme.fontSize.font14,
    fontWeight: "500",
    lineHeight: 22.4,
    color: theme.colors.Neutral8,
  },
  textPending: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 19,
    color: theme.colors.Neutral4,
    marginTop: 37,
  },
});

export default ItemRequestPending;
