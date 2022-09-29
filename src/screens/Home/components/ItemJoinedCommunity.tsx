import { ICommunityAPI } from "@model";
import { getCommunitiesRedux } from "@redux";
import { theme } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

interface IState {
  community: ICommunityAPI;
  onPress: (item: ICommunityAPI) => void;
}

function ItemJoinedCommunity({ community, onPress }: IState) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.containerItem}
      onPress={() => onPress(community)}
    >
      <Image
        source={{ uri: community.avatar }}
        style={styles.imageJoinedCommunity}
      />
      <LinearGradient
        colors={["rgba(20, 13, 41, 0)", "rgba(20, 13, 40, 0.91)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.457, 1]}
        style={[
          {
            position: "absolute",
            borderRadius: 16,
            height: 129,
            width: 210,
          },
        ]}
      />
      <Text style={styles.textItem}>{community.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 6,
    height: 129,
    width: 210,
  },
  imageJoinedCommunity: {
    height: 129,
    width: 210,
    borderRadius: 16,
  },
  textItem: {
    position: "absolute",
    left: 20,
    bottom: 20,
    color: theme.colors.Neutral0,
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
  },
});

export default ItemJoinedCommunity;
