import { SvgUser } from "@components/Icon";
import { theme } from "@theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BaseMemberProps } from "./BaseMemberModal";

function BaseMember({ member, onPress }: BaseMemberProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, styles.flex]}
      onPress={() => onPress(member)}
    >
      <Image source={{ uri: member.avatar }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.textName}>{member.name}</Text>
        <View style={styles.flex}>
          <Text style={styles.textIndexMember}>{member.friend}</Text>
          <SvgUser />
        </View>
        <Text style={styles.textDescription}>{member.short_introduction}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingLeft: 20,
    backgroundColor: theme.colors.Neutral1,
    borderRadius: 8,
    marginVertical: 8,
  },
  flex: {
    flexDirection: "row",
  },
  body: {
    marginLeft: 16,
    flex: 1,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    borderWidth: 4,
    borderColor: "#FF4C41",
  },
  textName: {
    color: theme.colors.darkerPrimary,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    marginBottom: 4,
  },
  textIndexMember: {
    fontWeight: "500",
    color: theme.colors.Neutral8,
    fontSize: theme.fontSize.font14,
    marginRight: 5,
  },
  textDescription: {
    fontWeight: "400",
    fontSize: theme.fontSize.font14,
    color: theme.colors.Neutral6,
    marginTop: 8,
  },
});

export default BaseMember;
