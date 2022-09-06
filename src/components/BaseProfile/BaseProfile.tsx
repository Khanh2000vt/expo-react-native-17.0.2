import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../constants";
import { BaseButton } from "../BaseButton";
import BaseCategory from "../BaseCategory/BaseCategory";
import { BaseHeader } from "../BaseHeader";
import { Bell, CaretRight, PencilLine, SvgCopy, VectorBack } from "../Icon";
import { BaseProfileProps } from "./BaseProfileModel";

const activitiesLog = [
  {
    id: 1,
    name: "Chotan Dai",
    comment: "uploaded a new video “5 tips for studying” on Youtube",
    time: "9 Jul 2021, 12:00AM ",
    seen: false,
  },
  {
    id: 2,
    name: "Wade Warren",
    comment: "posted a new post on Facebook",
    time: "9 Jul 2021, 12:00AM ",
    seen: false,
  },
  {
    id: 3,
    name: "jeWicky24",
    comment: "joined a new community",
    time: "9 Jul 2021, 12:00AM ",
    seen: true,
  },
];

const dataTest = [
  {
    type: "",
  },
];

function BaseProfile({
  navigation,
  isProfileSelf = false,
  joinedCommunities = [],
  elementProfileSelf,
}: BaseProfileProps) {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItemActivitiesLog = ({ item }: { item: any }) => (
    <View>
      <View>
        <Image source={require("../../../assets/png/avt.png")} />
      </View>
      <View>
        <Text>
          {item.name} <Text>{item.comment}</Text>
        </Text>
        <Text>{item.time}</Text>
      </View>
    </View>
  );

  const iconRightButton = (index: string) => (
    <View style={styles.iconRightButtonStyle}>
      <Text style={styles.textIconRightButton}>{index}</Text>
    </View>
  );

  const ListFooterComponent = () => {
    if (isProfileSelf) {
      return (
        <View>
          <View>
            <Text>Activities log</Text>
            <FlatList
              keyExtractor={keyExtractor}
              data={activitiesLog}
              renderItem={renderItemActivitiesLog}
            />
            <BaseButton
              title="Older activities"
              IconRight={<CaretRight />}
              backgroundColor={theme.colors.Neutral0}
              color={theme.colors.primary}
            />
          </View>

          <View>
            <View>
              <Bell />
              <Text>Notification from Followers</Text>
            </View>
            <View></View>
          </View>

          <View>
            <BaseButton
              title="Waiting for approval"
              backgroundColor={theme.colors.Neutral1}
              color={theme.colors.Neutral10}
              IconRight={iconRightButton("5")}
              style={styles.buttonProfileSelf}
            />
            <BaseButton
              title="Friend request sent"
              backgroundColor={theme.colors.Neutral1}
              color={theme.colors.Neutral10}
              IconRight={iconRightButton("22")}
              style={styles.buttonProfileSelf}
            />
          </View>
        </View>
      );
    } else {
      return <></>;
    }
  };
  return (
    <View>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={
          <View>
            <View style={styles.profileContainer}>
              <Image
                source={require("../../../assets/png/coverImage.png")}
                style={styles.profileImageCover}
              />
              <BaseHeader
                title="Your profile"
                IconLeft={<VectorBack stroke={theme.colors.Neutral0} />}
                onPressLeft={() => navigation.goBack()}
                IconRight={<PencilLine />}
                onPressRight={() => navigation.navigate("UpdateProfileScreenO")}
                styleHeader={styles.styleHeader}
                styleTitleHeader={styles.styleTitleHeader}
              />
              <Image
                source={require("../../../assets/png/avt.png")}
                style={styles.profileImageAvt}
              />
            </View>

            <View></View>

            <View style={styles.accountViewBody}>
              <Text style={styles.textNameAccount}>Matsuura Yuki</Text>
              <View style={styles.accountViewID}>
                <Text style={styles.textID}>ID: 1752648</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                  <SvgCopy />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text>Introduction</Text>
              <Text>
                Hello world, I’m Yuki from Japan and I’m creating the beautiful
                videos. I wish Facebook would notify me when someone deletes me.
                That way I could ‘Like’ it. My brain is divided into two parts.
              </Text>
            </View>

            <View>
              <Text>Joined communities</Text>
              <View>
                {joinedCommunities.map((joinedCommunity, index) => {
                  return (
                    <BaseCategory
                      item={joinedCommunity}
                      onPress={() => {}}
                      isShowTick={false}
                      key={index}
                    />
                  );
                })}
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
  accountViewBody: {
    flex: 1,
    marginLeft: 20,
  },
  textNameAccount: {
    color: theme.colors.Neutral10,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    marginBottom: 7,
  },
  accountViewID: {
    flexDirection: "row",
  },
  textID: {
    fontWeight: "400",
    fontSize: theme.fontSize.font14,
    color: theme.colors.Neutral6,
    marginRight: 20,
  },

  //button profile self
  buttonProfileSelf: {
    justifyContent: "space-between",
  },
  iconRightButtonStyle: {
    backgroundColor: theme.colors.darkerPrimary,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 16,
  },
  textIconRightButton: {
    color: theme.colors.Neutral0,
    fontWeight: "700",
    fontSize: theme.fontSize.font12,
  },
});

export default BaseProfile;
