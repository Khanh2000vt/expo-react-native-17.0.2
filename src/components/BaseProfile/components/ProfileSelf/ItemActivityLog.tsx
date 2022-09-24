import React from "react";
import {
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ILogAPI } from "@model";
import { theme } from "@theme";
import { formatTime } from "@utils";
function ItemActivityLog({ item }: ListRenderItemInfo<ILogAPI>) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.header}>
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
        <Text style={styles.textName}>
          {item.name} <Text style={styles.textComment}>{item.comment}</Text>
        </Text>
        <Text style={styles.textTime}>{formatTime(item.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  pointLog: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  avatarLog: {
    width: 48,
    height: 48,
    borderRadius: 100,
    marginLeft: 4,
    marginRight: 16,
  },
  textName: {
    flex: 1,
    fontWeight: "600",
    fontSize: theme.fontSize.font14,
    lineHeight: 22.4,
    color: theme.colors.Neutral10,
  },
  textComment: {
    color: theme.colors.Neutral6,
    fontWeight: "400",
  },
  textTime: {
    fontWeight: "400",
    fontSize: theme.fontSize.font12,
    color: theme.colors.Neutral6,
    lineHeight: 19,
    marginTop: 8,
  },
});

export default ItemActivityLog;
