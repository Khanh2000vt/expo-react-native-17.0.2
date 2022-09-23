import { theme } from "@theme";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BaseButton,
  BaseInput,
  CaretRight,
  SingOut19,
  SvgInfo,
  SvgMessages,
} from "../../../components";
interface IState {
  community: any;
  onChangeText: (text: string) => void;
  value: string;
  onPressFilter: () => void | undefined;
  onPressJoin: () => void | undefined;
  joined: boolean;
}

function ListHeaderComponent({
  community,
  onChangeText,
  value,
  onPressFilter,
  onPressJoin,
  joined,
}: IState) {
  const [isJoined, setIsJoined] = useState<boolean>(joined);

  return (
    <>
      <View style={styles.poster}>
        <Image
          source={{ uri: community.image_url }}
          style={styles.imageBackground}
          resizeMode="stretch"
        />
        <View style={styles.backgroundAbsolute} />
        <View>
          <Text style={styles.textTitle}>{community.title}</Text>
          <Text style={styles.textMembers}>{community.members} members</Text>
        </View>
        <BaseButton
          title={isJoined ? "Leaving" : "Participate"}
          IconRight={isJoined && <SingOut19 />}
          style={styles.buttonPoster}
          backgroundColor={
            isJoined ? theme.colors.Semantic4 : theme.colors.primary
          }
          onPress={() => setIsJoined(!isJoined)}
        />
      </View>

      <View
        style={[styles.viewAdvForum, { paddingBottom: isJoined ? 20 : 34 }]}
      >
        <View style={styles.flex}>
          <SvgMessages />
          <View style={styles.viewTextAdvForum}>
            <Text style={styles.textTitleAdvForum}>Real-time Forum</Text>
            <Text style={styles.textBodyAdvForum}>
              Join now to give real-time PR about yourself
            </Text>
          </View>
        </View>
        {isJoined ? (
          <TouchableOpacity
            style={[styles.flex, styles.viewInfoAdvForum]}
            onPress={onPressJoin}
          >
            <Text style={styles.textButtonGoForum}>Go to forum</Text>
            <CaretRight stroke={theme.colors.darkerPrimary} />
          </TouchableOpacity>
        ) : (
          <View style={[styles.flex, styles.viewInfoAdvForum]}>
            <SvgInfo />
            <Text style={styles.textInfoAdvForum}>
              Join community to enter this forum
            </Text>
          </View>
        )}
      </View>

      <View>
        <Text style={styles.textTitleMembers}>Members</Text>
        <BaseInput
          option="search-filter"
          placeholder="Search by Name"
          styleContainer={styles.inputSearch}
          onPressFilter={onPressFilter}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  poster: {
    height: 205,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 35,
    borderRadius: 8,
    paddingBottom: 28,
  },
  imageBackground: {
    borderRadius: 8,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundAbsolute: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 8,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textTitle: {
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral0,
    fontWeight: "700",
    textAlign: "center",
  },
  textMembers: {
    color: theme.colors.Neutral2,
    fontWeight: "500",
    fontSize: theme.fontSize.font14,
    textAlign: "center",
  },
  flex: {
    flexDirection: "row",
  },
  buttonPoster: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  viewAdvForum: {
    backgroundColor: theme.colors.colorInput,
    borderRadius: 8,
    paddingTop: 26,
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 36,
  },
  viewTextAdvForum: {
    marginLeft: 26,
    flex: 1,
  },
  textTitleAdvForum: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral10,
    marginBottom: 9,
  },

  textButtonGoForum: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    color: theme.colors.darkerPrimary,
    marginHorizontal: 14,
  },
  textBodyAdvForum: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    color: theme.colors.Neutral6,
  },
  viewInfoAdvForum: {
    alignItems: "center",
    marginTop: 32,
    justifyContent: "center",
  },
  textInfoAdvForum: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    color: theme.colors.primary,
    flex: 1,
    marginLeft: 13,
  },
  textTitleMembers: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
  },
  inputSearch: {
    marginVertical: 24,
    marginBottom: 16,
  },
});

export default ListHeaderComponent;
