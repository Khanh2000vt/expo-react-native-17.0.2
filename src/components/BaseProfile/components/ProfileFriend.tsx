import { BaseButton } from "@components/BaseButton";
import { Warnings } from "@components/Icon";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UseStateProps } from "../BaseProfileModel";

function ProfileFriend({ setIsShowAlert }: UseStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have become RuiTomo</Text>
      <BaseButton
        title="Block user"
        style={{ marginVertical: 12, marginTop: 55 }}
        option="solid"
        color={theme.colors.Semantic4}
        IconRight={<Warnings />}
        onPress={() => setIsShowAlert(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 104,
    paddingHorizontal: 24,
  },
  text: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    color: theme.colors.darkerPrimary,
    textAlign: "center",
  },
});

export default ProfileFriend;
