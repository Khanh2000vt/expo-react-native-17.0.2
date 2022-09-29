import { ApprovalApi } from "@api";
import {
  BaseHeader,
  BaseNotification,
  BasePopupRequest,
  EventNotification,
  VectorBack,
} from "@components";
import { Navigation, OtherProfile } from "@constant/index";
import { IMemberAPI } from "@model";
import {
  acceptMemberApproval,
  getMemberRedux,
  getUserRedux,
  rejectMemberApproval,
  spendCoins,
} from "@redux";
import { theme } from "@theme";
import { getListMemberApproval } from "@utils";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { UserItem } from "./components";
import { deleteElement, pushElement } from "./controller";
function WaitingForApprovalScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const userRedux = useSelector(getUserRedux);
  const memberRedux = useSelector(getMemberRedux);

  const users = getListMemberApproval(userRedux, memberRedux);
  const [userSelected, setUserSelected] = useState<IMemberAPI>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<EventNotification[]>([]);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handleConfirm = (member: IMemberAPI) => {
    setUserSelected(member);
    setIsVisible(true);
  };

  function handlePressItem(member: IMemberAPI) {
    navigation.navigate(Navigation.OTHER_PROFILE, {
      userOther: member,
      type: OtherProfile.APPROVAL,
    });
  }

  function handleAccept(userAccept: IMemberAPI) {
    // handleStatusUsers(user);
    let params = {
      user: userAccept,
    };
    dispatch(spendCoins(500));
    dispatch(acceptMemberApproval(params));
    pushNotification(userAccept, true);
    setIsVisible(false);
  }

  function handleReject(user: IMemberAPI) {
    // handleStatusUsers(user);
    let params = {
      user: user,
    };
    dispatch(rejectMemberApproval(params));
    pushNotification(user, false);
  }

  function pushNotification(user: IMemberAPI, accept: boolean) {
    const notificationsNew = pushElement(user, accept, notifications);
    setNotifications([...notificationsNew]);
  }

  function handlePressNotification(id: string) {
    const newArrayNotification = deleteElement(notifications, id);
    setNotifications([...newArrayNotification]);
  }

  return (
    <View style={styles.container}>
      <BaseHeader
        title="Waiting for approval"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      {false ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <UserItem
              item={item}
              onPressItem={handlePressItem}
              onAccept={handleConfirm}
              onReject={handleReject}
            />
          )}
          keyExtractor={keyExtractor}
          style={styles.flatList}
        />
      )}

      <BasePopupRequest
        isVisible={isVisible}
        accept
        name={userSelected?.name}
        coinRequest={500}
        onBackButtonPress={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}
        onPressCancel={() => setIsVisible(false)}
        onPressOK={() => {
          userSelected && handleAccept(userSelected);
        }}
      />

      <ScrollView style={styles.notifications} bounces={false}>
        {notifications.map((notification) => (
          <BaseNotification
            key={notification.id}
            onPress={handlePressNotification}
            notification={notification}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 24,
    paddingTop: 20,
    marginTop: 17,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 80,
  },
  activityIndicator: {
    marginTop: 40,
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
  notifications: {
    position: "absolute",
    top: 30,
    width: "100%",
    paddingHorizontal: 16,
  },
});

export default WaitingForApprovalScreen;
