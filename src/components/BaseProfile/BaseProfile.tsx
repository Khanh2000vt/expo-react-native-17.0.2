import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../constants";
import { RootState } from "../../redux";
import { BaseButton } from "../BaseButton";
import BaseCategory from "../BaseCategory/BaseCategory";
import { BaseHeader } from "../BaseHeader";
import {
  Bell,
  CaretRight,
  Coin,
  Crown,
  PencilLine,
  SvgCopy,
  Users,
  VectorBack,
} from "../Icon";
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
  const joined = useSelector((state: RootState) => state.joined.communities);
  const listAmount = [
    {
      id: 1,
      icon: <Users />,
      amount: "2050",
      color: theme.colors.Semantic5,
      onPress: () => {},
    },
    {
      id: 2,
      icon: <Crown />,
      amount: "1024",
      color: theme.colors.Semantic2,
      onPress: () => {},
    },
    {
      id: 3,
      icon: <Coin />,
      amount: "12000",
      color: theme.colors.Semantic1,
      onPress: () => {},
    },
  ];

  const listSocialTest = [
    {
      id: 1,
      title: "Matsuura Yuki official",
      icon: (
        <Image
          source={require("../../../assets/png/logo_youtube.png")}
          style={styles.iconSocial}
        />
      ),
    },
    {
      id: 2,
      title: "@Yuki.Matsuura",
      icon: (
        <Image
          source={require("../../../assets/png/logo_instagram.png")}
          style={styles.iconSocial}
        />
      ),
    },
    {
      id: 3,
      title: "@YukiMatsuura23",
      icon: (
        <Image
          source={require("../../../assets/png/logo_twitter.png")}
          style={styles.iconSocial}
        />
      ),
    },
    {
      id: 4,
      title: "Matsuura Yuki",
      icon: (
        <Image
          source={require("../../../assets/png/logo_facebook.png")}
          style={styles.iconSocial}
          resizeMode="cover"
        />
      ),
    },
  ];

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

            <View style={styles.accountViewBody}>
              <Text style={styles.textNameAccount}>Matsuura Yuki</Text>
              <View style={styles.accountViewID}>
                <Text style={styles.textID}>ID: 1752648</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                  <SvgCopy />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.amountView}>
              {listAmount.map((item) => {
                return (
                  <BaseButton
                    title={item.amount}
                    IconLeft={item.icon}
                    color={item.color}
                    backgroundColor={theme.colors.colorInput}
                    style={styles.buttonListAmount}
                    styleText={styles.textButtonListAmount}
                    key={item.id}
                  />
                );
              })}
            </View>

            <View style={styles.viewSocial}>
              {listSocialTest.map((item) => {
                return (
                  <BaseButton
                    title={item.title}
                    key={item.id}
                    IconLeft={item.icon}
                    style={styles.buttonListSocial}
                    styleText={styles.textButtonSocial}
                    backgroundColor={theme.colors.colorInput}
                    color={theme.colors.Neutral10}
                  />
                );
              })}
            </View>

            <View style={styles.viewIntroduction}>
              <Text style={styles.textTitle}>Introduction</Text>
              <Text style={styles.textBodyIntroduction}>
                Hello world, I’m Yuki from Japan and I’m creating the beautiful
                videos. I wish Facebook would notify me when someone deletes me.
                That way I could ‘Like’ it. My brain is divided into two parts.
              </Text>
            </View>

            <View style={styles.viewJoinedCommunities}>
              <Text style={styles.textTitle}>Joined communities</Text>
              <View style={styles.bodyJoinedCommunities}>
                {joined.map((joinedCommunity, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.viewJoinedCommunity}
                      key={index}
                    >
                      <Image
                        source={{ uri: joinedCommunity.image_url }}
                        style={styles.imageJoined}
                      />
                      <Text style={styles.textJoinedCommunity}>
                        {joinedCommunity.title}
                      </Text>
                    </TouchableOpacity>
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
  amountView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
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
  viewSocial: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
  iconSocial: {
    width: 24,
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
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
    lineHeight: 33,
  },
  viewIntroduction: {
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
  viewJoinedCommunities: {
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
});

export default BaseProfile;
