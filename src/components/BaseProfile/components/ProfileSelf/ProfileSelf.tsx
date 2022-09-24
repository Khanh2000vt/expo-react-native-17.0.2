import { LogApi } from "@api";
import { BaseButton, Bell, CaretRight } from "@components";
import { Navigation } from "@constant/index";
import { ILogAPI } from "@model";
import { theme } from "@theme";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ItemActivityLog from "./ItemActivityLog";

interface IProfileSelf {
  navigation: any;
}

const IconRightButton = (amount: string) => (
  <View style={styles.iconRightButtonStyle}>
    <Text style={styles.textIconRightButton}>{amount}</Text>
  </View>
);

function ProfileSelf({ navigation }: IProfileSelf) {
  const [indexLog, setIndexLog] = useState<number>(3);
  const [activities, setActivities] = useState<ILogAPI[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  useEffect(() => {
    getActivitiesLog();
  }, [indexLog]);

  const getActivitiesLog = async () => {
    try {
      setLoading(true);
      const params = { p: 1, l: indexLog };
      const res: any = await LogApi.getAll(params);
      setActivities([...res]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Activities log</Text>
        <FlatList
          keyExtractor={keyExtractor}
          data={activities}
          renderItem={ItemActivityLog}
          style={styles.flatlist}
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
          IconRight={IconRightButton("5")}
          style={styles.buttonProfileSelf}
          onPress={() => navigation.navigate(Navigation.WAITING_FOR_APPROVAL)}
        />
        <BaseButton
          title="Friend request sent"
          backgroundColor={theme.colors.Neutral1}
          color={theme.colors.Neutral10}
          IconRight={IconRightButton("22")}
          style={styles.buttonProfileSelf}
          onPress={() => navigation.navigate(Navigation.FRIEND_REQUEST)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //activities log
  viewActivityIndicator: {
    marginTop: 20,
  },
  container: {
    marginTop: 40,
  },
  flatlist: {
    backgroundColor: theme.colors.colorInput,
    paddingTop: 16,
    paddingBottom: 11,
    paddingHorizontal: 24,
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
});

export default ProfileSelf;
