import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants";
import { SvgUser } from "../Icon";
interface IBaseMember {
  item: any;
}
function BaseMember({ item }: IBaseMember) {
  return (
    <View style={[styles.container, styles.flex]}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.textName}>{item.name}</Text>
        <View style={styles.flex}>
          <Text style={styles.textIndexMember}>{item.friend}</Text>
          <SvgUser />
        </View>
        <Text style={styles.textDescription}>{item.introduce}</Text>
      </View>
    </View>
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
