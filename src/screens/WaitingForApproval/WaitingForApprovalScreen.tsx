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
import { ApprovalApi } from "../../api";
import {
  BaseButton,
  BaseHeader,
  BaseNotification,
  BasePopupRequest,
  EventNotification,
  Users,
  VectorBack,
} from "../../components";
import { Navigation, OtherProfile, theme } from "../../constant";
import { spendCoins } from "../../redux";
import { handleTimeToNow } from "../../utils";
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
      setIsLoading(false);
    } catch (e) {
      // setUsers([]);
    }
  }

  function handlePressItem(item: any) {
    navigation.navigate(Navigation.OTHER_PROFILE, {
      userOther: item,
      type: OtherProfile.INVITATION,
    });
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.containerItem}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handlePressItem(item)}
        >
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bodyItem}
          activeOpacity={0.8}
          onPress={() => handlePressItem(item)}
        >
          <View style={styles.viewTextTitle}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textTime}>
              {handleTimeToNow(item.createdAt)}
            </Text>
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
          <View style={[styles.flex, styles.viewButton]}>
            <BaseButton
              title="Accept"
              style={[styles.button, styles.buttonAccept]}
              onPress={() => {
                setUserSelected(item);
                setIsVisible(true);
              }}
            />
            <BaseButton
              title="Reject"
              option="solid"
              color={theme.colors.Neutral4}
              style={[styles.button, styles.buttonReject]}
              onPress={() => handleReject(item)}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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
    let notificationsNew = [
      {
        name: user.name,
        id: Date.now().toString(),
        accept: accept,
      },
    ].concat(notifications);
    if (notifications.length === 5) {
      setNotifications(notificationsNew.slice(0, -1));
    } else {
      setNotifications(notificationsNew);
    }
  }

  function handleStatusUsers(value: any) {
    setUsers(users.filter((user) => user.id !== value.id));
  }

  function handlePressNotification(id: string) {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
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
          renderItem={renderItem}
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
  containerItem: {
    backgroundColor: theme.colors.Neutral1,
    marginVertical: 10,
    padding: 16,
    paddingLeft: 20,
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
  viewButton: {
    justifyContent: "space-between",
  },
  button: {
    // paddingHorizontal: 32,
    flex: 1,
  },
  buttonAccept: {
    marginRight: 8,
  },
  buttonReject: {
    marginHorizontal: 8,
  },
  notifications: {
    position: "absolute",
    top: 30,
    width: "100%",
    paddingHorizontal: 16,
  },
});

export default WaitingForApprovalScreen;
