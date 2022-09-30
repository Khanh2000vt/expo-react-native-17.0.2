import { BaseButton } from "@components/BaseButton";
import { BaseHeader } from "@components/BaseHeader";
import { PencilLine, SvgCopy, VectorBack } from "@components/Icon";
import { SCREEN, OtherProfile } from "@constant/index";
import { ICommunityAPI } from "@model";
import { getUserRedux } from "@redux";
import { theme } from "@theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { ListHeaderProps } from "../BaseProfileModel";

interface IItem {
  itemJoined: ICommunityAPI;
}
const ItemJoined = ({ itemJoined }: IItem) => {
  return (
    <TouchableOpacity style={styles.viewJoinedCommunity}>
      <Image source={{ uri: itemJoined.avatar }} style={styles.imageJoined} />
      <Text style={styles.textJoinedCommunity}>{itemJoined.name}</Text>
    </TouchableOpacity>
  );
};

function ListHeaderComponent({
  listAmount = [],
  listSocial = [],
  listJoined = [],
  navigation,
  user,
  relationship,
}: ListHeaderProps) {
  const isProfileSelf = relationship === OtherProfile.MYSELF;
  return (
    <>
      <View style={styles.profileContainer}>
        <View
          style={[
            styles.profileImageCover,
            styles.placeholderView,
            { width: "100%" },
          ]}
        >
          <Image
            source={require("../../../../assets/png/coverImage.png")}
            style={styles.profileImageCover}
          />
        </View>
        <BaseHeader
          title={isProfileSelf ? "Your profile" : undefined}
          IconLeft={<VectorBack stroke={theme.colors.Neutral0} />}
          onPressLeft={() => navigation.goBack()}
          IconRight={isProfileSelf && <PencilLine />}
          onPressRight={() =>
            isProfileSelf && navigation.navigate(SCREEN.UPDATE_PROFILE)
          }
          styleHeader={styles.styleHeader}
          styleTitleHeader={styles.styleTitleHeader}
        />
        <View
          style={[
            styles.profileImageAvt,
            { backgroundColor: theme.colors.Neutral1 },
          ]}
        >
          <Image source={{ uri: user?.avatar }} style={styles.profileImageAvt} />
        </View>
      </View>

      <View style={styles.containerUser}>
        <Text style={styles.textNameAccount}>{user?.name}</Text>
        <View style={styles.viewUserID}>
          <Text style={styles.textID}>ID: {user?.id_account}</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <SvgCopy />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerAmount}>
        {listAmount.map((item) => {
          return (
            <BaseButton
              key={item.id}
              title={item.amount}
              IconLeft={item.icon}
              color={item.color}
              backgroundColor={theme.colors.colorInput}
              style={styles.buttonListAmount}
              styleText={styles.textButtonListAmount}
            />
          );
        })}
      </View>

      {(relationship === OtherProfile.FRIEND || isProfileSelf) && (
        <View style={styles.containerSocial}>
          {listSocial.map((item) => {
            return (
              <BaseButton
                key={item.id}
                title={item.title}
                IconLeft={item.icon}
                style={styles.buttonListSocial}
                styleText={styles.textButtonSocial}
                backgroundColor={theme.colors.colorInput}
                color={theme.colors.Neutral10}
              />
            );
          })}
        </View>
      )}

      <View style={styles.containerIntroduction}>
        <Text style={styles.textTitle}>Introduction</Text>
        <Text style={styles.textBodyIntroduction}>{user?.introduction}</Text>
      </View>

      <View style={styles.containerJoinedCommunities}>
        <Text style={styles.textTitle}>Joined communities</Text>
        <View style={styles.bodyJoinedCommunities}>
          {listJoined.map((itemJoined, index) => (
            <ItemJoined itemJoined={itemJoined} key={index} />
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    height: 212 + 54,
    justifyContent: "flex-end",
  },
  profileImageCover: {
    position: "absolute",
    top: 0,
    height: 212,
  },
  profileImageAvt: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: "center",
  },
  styleHeader: {
    marginBottom: 33,
    paddingHorizontal: 28,
  },
  styleTitleHeader: {
    color: theme.colors.Neutral0,
  },
  containerUser: {
    flex: 1,
    // marginLeft: 20,
    alignItems: "center",
    marginTop: 14,
  },
  textNameAccount: {
    color: theme.colors.darkerPrimary,
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    marginBottom: 4,
  },
  viewUserID: {
    flexDirection: "row",
  },
  textID: {
    fontWeight: "400",
    fontSize: theme.fontSize.font14,
    color: theme.colors.Neutral6,
    marginRight: 20,
  },
  buttonListSocial: {
    marginVertical: 6,
    paddingVertical: 17,
    paddingHorizontal: 24,
    justifyContent: "flex-start",
  },
  textButtonSocial: {
    paddingHorizontal: 16,
  },
  containerIntroduction: {
    marginTop: 42,
    paddingHorizontal: 24,
  },
  textBodyIntroduction: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    color: theme.colors.Neutral6,
    flex: 1,
    lineHeight: 26,
    marginTop: 20,
  },
  containerAmount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  containerSocial: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
    lineHeight: 33,
  },
  buttonListAmount: {
    paddingVertical: 8,
    paddingLeft: 20,
    paddingRight: 16,
    borderRadius: 100,
    height: undefined,
    marginHorizontal: 8,
  },
  textButtonListAmount: {
    marginHorizontal: 0,
    marginLeft: 12,
  },
  containerJoinedCommunities: {
    marginTop: 48,
    paddingHorizontal: 24,
  },
  bodyJoinedCommunities: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  viewJoinedCommunity: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.colorInput,
    padding: 10,
    paddingRight: 16,
    borderRadius: 16,
    marginVertical: 8,
    marginRight: 15,
    // flex: 1,
  },
  textJoinedCommunity: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral6,
    marginLeft: 16,
  },
  imageJoined: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  placeholderView: {
    backgroundColor: theme.colors.Neutral3,
  },
});

export default ListHeaderComponent;
