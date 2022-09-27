import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { ApprovalApi } from "@api";
import {
  BaseButton,
  BaseHeader,
  BaseNotification,
  BasePopupRequest,
  EventNotification,
  Users,
  VectorBack,
} from "@components";
import { Navigation, OtherProfile } from "@constant/index";
import { spendCoins } from "@redux";
import { handleTimeToNow } from "@utils";
import { theme } from "@theme";
import { UserItem } from "./components";
import { deleteElement, pushElement } from "./controller";
function WaitingForApprovalScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);
  const [userSelected, setUserSelected] = useState<any>({});
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<EventNotification[]>([]);
  useEffect(() => {
    getListUser();
  }, []);

  async function getListUser() {
    try {
      const res: any = await ApprovalApi.getAll();
      setUsers([...res]);
    } catch (e) {
      // setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handleConfirm = (item: any) => {
    setUserSelected(item);
    setIsVisible(true);
  };

  function handlePressItem(item: any) {
    navigation.navigate(Navigation.OTHER_PROFILE, {
      userOther: item,
      type: OtherProfile.INVITATION,
    });
  }

  function handleAccept(user: any) {
    handleStatusUsers(user);
    dispatch(spendCoins(500));
    pushNotification(user, true);
    setIsVisible(false);
  }

  function handleReject(user: any) {
    handleStatusUsers(user);
    pushNotification(user, false);
  }

  function pushNotification(user: any, accept: boolean) {
    const notificationsNew = pushElement(user, accept, notifications);
    setNotifications([...notificationsNew]);
  }

  function handleStatusUsers(value: any) {
    const newArrayUser = deleteElement(users, value.id);
    setUsers([...newArrayUser]);
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
      {isLoading ? (
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
        coinRequest={500}
        onBackButtonPress={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}
        onPressCancel={() => setIsVisible(false)}
        onPressOK={() => {
          handleAccept(userSelected);
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
