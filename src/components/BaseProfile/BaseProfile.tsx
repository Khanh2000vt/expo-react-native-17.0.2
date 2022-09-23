import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import { LogApi } from "@api";
import {
  BaseAlert,
  BaseButton,
  BaseHeader,
  BasePopupRequest,
  Bell,
  CaretRight,
  PencilLine,
  SvgCopy,
  VectorBack,
  Warnings,
  WarningsFill,
} from "@components";
import { Navigation, OtherProfile } from "@constant/index";
import { spendCoins } from "@redux";
import { theme } from "@theme";
import { formatTime } from "@utils";
import { ILogAPI } from "@model";
import { BaseProfileProps } from "./BaseProfileModel";
import { ListHeaderComponent } from "./components";

function BaseProfile({
  navigation,
  isProfileSelf = false,
  avatar,
  name,
  idAccount,
  introduction,
  listAmount = [],
  listSocial = [],
  listJoined = [],
  type = OtherProfile.OTHER,
}: BaseProfileProps) {
  const dispatch = useDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false);

  const [indexLog, setIndexLog] = useState<number>(3);
  const [activities, setActivities] = useState<ILogAPI[]>([]);
  const [status, setStatus] = useState<OtherProfile>(OtherProfile.OTHER);

  useEffect(() => {
    setStatus(type);
  }, []);
  useEffect(() => {
    getActivitiesLog();
  }, [indexLog]);

  const getActivitiesLog = async () => {
    try {
      setLoading(true);
      const params = { p: 1, l: indexLog };
      const res: any = await LogApi.getAll(params);
      setLoading(false);
      setActivities([...res]);
    } catch (error) {
      setActivities([]);
    }
  };

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItemActivitiesLog = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.viewActivityLog} activeOpacity={0.8}>
      <View style={styles.viewHeaderActivity}>
        <View
          style={[
            styles.pointLog,
            {
              backgroundColor: item.seen
                ? theme.colors.Neutral0
                : theme.colors.Semantic2,
            },
          ]}
        />
        <Image source={{ uri: item.avatar }} style={styles.avatarLog} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textNameActivityLog}>
          {item.name}{" "}
          <Text style={styles.textCommentActivityLog}>{item.comment}</Text>
        </Text>
        <Text style={styles.textTimeActivityLog}>
          {formatTime(item.createdAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const iconRightButton = (index: string) => (
    <View style={styles.iconRightButtonStyle}>
      <Text style={styles.textIconRightButton}>{index}</Text>
    </View>
  );

  const ListFooterComponent = () => {
    if (isProfileSelf) {
      return renderProfileSelf();
    } else {
      if (status === OtherProfile.REQUEST_PENDING) {
        return renderProfileRequestPending();
      } else if (status === OtherProfile.INVITATION) {
        return renderProfileInvitation();
      } else if (status === OtherProfile.FRIEND) {
        return renderProfileFriend();
      } else {
        return renderProfileOther();
      }
    }
  };

  function handlePressBlock() {
    setIsShowAlert(true);
  }

  function renderProfileOther() {
    return (
      <View style={styles.footerOtherUser}>
        <BaseButton
          title="Send RuiTomo Request"
          style={{ marginVertical: 12 }}
          onPress={() => setIsVisibleModal(true)}
        />
        <BaseButton
          title="Block user"
          style={{ marginVertical: 12 }}
          option="solid"
          color={theme.colors.Semantic4}
          IconRight={<Warnings />}
          onPress={handlePressBlock}
        />
      </View>
    );
  }

  function renderProfileFriend() {
    return (
      <View style={styles.footerOtherUser}>
        <Text style={styles.textNotificationTitle}>
          You have become RuiTomo
        </Text>
        <BaseButton
          title="Block user"
          style={{ marginVertical: 12, marginTop: 55 }}
          option="solid"
          color={theme.colors.Semantic4}
          IconRight={<Warnings />}
          onPress={handlePressBlock}
        />
      </View>
    );
  }

  function renderProfileInvitation() {
    return (
      <View style={styles.footerOtherUser}>
        <View style={{ flexDirection: "row" }}>
          <BaseButton
            title="Accept"
            style={{ marginVertical: 12, flex: 1, marginRight: 8 }}
            onPress={() => setIsVisibleModal(true)}
          />
          <BaseButton
            title="Reject"
            style={{ marginVertical: 12, flex: 1, marginLeft: 8 }}
            option="solid"
            color={theme.colors.Neutral4}
            onPress={() => {
              setStatus(OtherProfile.OTHER);
            }}
          />
        </View>
        <BaseButton
          title="Block user"
          style={{ marginVertical: 12 }}
          option="solid"
          color={theme.colors.Semantic4}
          IconRight={<Warnings />}
          onPress={handlePressBlock}
        />
      </View>
    );
  }

  function renderProfileRequestPending() {
    return (
      <View style={[styles.footerOtherUser, { marginTop: 52 }]}>
        <Text style={styles.textNotificationTitle}>Request Pending...</Text>
        <Text style={styles.textFooterBody}>
          Your RuiTomo request has been sent
        </Text>
        <BaseButton
          title="Block user"
          style={styles.buttonFooter}
          option="solid"
          color={theme.colors.Semantic4}
          IconRight={<Warnings />}
          onPress={handlePressBlock}
        />
      </View>
    );
  }

  function renderProfileSelf() {
    return (
      <>
        <View style={styles.viewActivitiesLog}>
          <Text style={styles.textTitle}>Activities log</Text>
          <FlatList
            keyExtractor={keyExtractor}
            data={activities}
            renderItem={renderItemActivitiesLog}
            style={styles.flatListActivitiesLog}
          />
          {isLoading && (
            <View style={styles.viewActivityIndicator}>
              <ActivityIndicator />
            </View>
          )}
          <BaseButton
            title="Older activities"
            IconRight={<CaretRight />}
            backgroundColor={theme.colors.Neutral0}
            color={theme.colors.primary}
            onPress={() => setIndexLog(indexLog + 5)}
            style={styles.buttonOlderActivities}
          />
        </View>

        <View style={styles.notification}>
          <View style={styles.notificationHeader}>
            <Bell />
            <Text style={styles.titleNotification}>
              Notification from Followers
            </Text>
          </View>
          <View style={styles.notificationBody}>
            <Text style={styles.textNameNotification}>
              Photo Kid
              <Text style={styles.textCommentNotification}>
                {" "}
                joined thanks to you! You get 300tm!
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.viewButtonProfileSelf}>
          <BaseButton
            title="Waiting for approval"
            backgroundColor={theme.colors.Neutral1}
            color={theme.colors.Neutral10}
            IconRight={iconRightButton("5")}
            style={styles.buttonProfileSelf}
            onPress={() => navigation.navigate(Navigation.WAITING_FOR_APPROVAL)}
          />
          <BaseButton
            title="Friend request sent"
            backgroundColor={theme.colors.Neutral1}
            color={theme.colors.Neutral10}
            IconRight={iconRightButton("22")}
            style={styles.buttonProfileSelf}
            onPress={() => navigation.navigate(Navigation.FRIEND_REQUEST)}
          />
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        bounces={false}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={
          <ListHeaderComponent
            isProfileSelf={isProfileSelf}
            status={status}
            listAmount={listAmount}
            listSocial={listSocial}
            listJoined={listJoined}
            avatar={avatar}
            name={name}
            idAccount={idAccount}
            introduction={introduction}
            navigation={navigation}
          />
        }
      />
      <BaseAlert
        isVisible={isShowAlert}
        onBackButtonPress={() => setIsShowAlert(false)}
        onBackdropPress={() => setIsShowAlert(false)}
        styleContainer={styles.baseAlertContainer}
      >
        <WarningsFill />
        <View style={styles.bodyAlert}>
          <Text style={styles.textAlert}>
            Are you sure you want to block{" "}
            <Text style={styles.textNameAlert}>Matsuura Yuki</Text>
          </Text>
        </View>
        <View style={styles.viewButtonAlert}>
          <BaseButton
            title="Block"
            style={styles.buttonAlert}
            backgroundColor={theme.colors.Semantic4}
            onPress={() => {
              setIsShowAlert(false);
              navigation.goBack();
            }}
          />
          <BaseButton
            title="Cancel"
            option="solid"
            color={theme.colors.Neutral6}
            style={styles.buttonAlert}
            onPress={() => setIsShowAlert(false)}
          />
        </View>
      </BaseAlert>
      <BasePopupRequest
        isVisible={isVisibleModal}
        accept={status === OtherProfile.INVITATION}
        coinRequest={500}
        onBackButtonPress={() => setIsVisibleModal(false)}
        onBackdropPress={() => setIsVisibleModal(false)}
        onPressCancel={() => setIsVisibleModal(false)}
        onPressOK={() => {
          dispatch(spendCoins(500));
          setStatus(
            status === OtherProfile.INVITATION
              ? OtherProfile.FRIEND
              : OtherProfile.REQUEST_PENDING
          );
          setIsVisibleModal(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: theme.colors.Neutral0,
  },

  //button profile self
  viewButtonProfileSelf: {
    paddingHorizontal: 24,
    marginTop: 68,
    marginBottom: 81,
  },
  buttonProfileSelf: {
    justifyContent: "space-between",
    height: 68,
    marginBottom: 12,
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
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
    lineHeight: 33,
  },
  //activities log
  viewActivityIndicator: {
    marginTop: 20,
  },
  viewActivitiesLog: {
    marginTop: 40,
  },
  flatListActivitiesLog: {
    backgroundColor: theme.colors.colorInput,
    paddingTop: 16,
    paddingBottom: 11,
    paddingHorizontal: 24,
  },
  viewActivityLog: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  avatarLog: {
    width: 48,
    height: 48,
    borderRadius: 100,
    marginLeft: 4,
    marginRight: 16,
  },
  viewHeaderActivity: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  pointLog: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  textNameActivityLog: {
    flex: 1,
    fontWeight: "600",
    fontSize: theme.fontSize.font14,
    lineHeight: 22.4,
    color: theme.colors.Neutral10,
  },
  textCommentActivityLog: {
    color: theme.colors.Neutral6,
    fontWeight: "400",
  },
  textTimeActivityLog: {
    fontWeight: "400",
    fontSize: theme.fontSize.font12,
    color: theme.colors.Neutral6,
    lineHeight: 19,
    marginTop: 8,
  },
  buttonOlderActivities: {
    height: undefined,
    paddingVertical: 17,
  },
  //notification
  notification: {
    paddingHorizontal: 24,
    marginTop: 45,
  },
  notificationHeader: {
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: theme.colors.darkerPrimary,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 24,
  },
  notificationBody: {
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  titleNotification: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    lineHeight: 29,
    color: theme.colors.Neutral0,
    marginLeft: 14,
  },
  textNameNotification: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 26,
    color: theme.colors.Neutral0,
  },
  textCommentNotification: {
    fontWeight: "500",
  },
  //others
  footerOtherUser: {
    marginTop: 60,
    marginBottom: 104,
    paddingHorizontal: 24,
  },
  textNotificationTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    color: theme.colors.darkerPrimary,
    textAlign: "center",
  },
  textFooterBody: {
    fontSize: theme.fontSize.font16,
    fontWeight: "400",
    lineHeight: 21.79,
    color: theme.colors.Neutral6,
    textAlign: "center",
  },
  buttonFooter: {
    marginTop: 42,
  },
  //alert
  baseAlertContainer: {
    alignItems: "center",
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  viewButtonAlert: {
    flexDirection: "row",
    paddingTop: 29,
    paddingBottom: 36,
    paddingHorizontal: 12,
    marginTop: 29,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral3,
  },
  bodyAlert: {
    paddingHorizontal: 28,
    marginTop: 22,
  },
  buttonAlert: {
    flex: 1,
    marginHorizontal: 16,
  },
  textAlert: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    lineHeight: 28.8,
    color: theme.colors.Neutral8,
    // flex: 1,
    textAlign: "center",
  },
  textNameAlert: {
    fontWeight: "600",
    color: theme.colors.Neutral10,
  },
});

export default BaseProfile;
