import { CheckCircle, MinusCircle } from "@components";
import { theme } from "@theme";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";
import { BaseNotificationProps } from "./BaseNotificationModel";
function BaseNotification({ notification, onPress }: BaseNotificationProps) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  if (!visible) {
    onPress(notification.id);
    return null;
  }
  return (
    <Animated.View
      entering={LightSpeedInLeft}
      layout={Layout.springify()}
      exiting={LightSpeedOutRight}
    >
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => onPress(notification.id)}
      >
        {notification.accept ? <CheckCircle /> : <MinusCircle />}
        <Text style={styles.textNotification}>
          {notification.accept ? "You and " : "You have rejected "}
          <Text style={styles.textName}>{notification.name}</Text>
          <Text style={styles.textBold}>
            {notification.accept ? " have become friends" : "‘s friend request"}
          </Text>
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.colorInput,
    paddingTop: 23,
    paddingBottom: 21,
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 8,
    marginVertical: 4,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textNotification: {
    fontWeight: "400",
    fontSize: theme.fontSize.font15,
    lineHeight: 20.43,
    color: theme.colors.Neutral6,
    flex: 1,
    marginLeft: 18,
  },
  textName: {
    fontWeight: "600",
    color: theme.colors.darkerPrimary,
  },
  textBold: {
    fontWeight: "500",
  },
});

export default BaseNotification;
