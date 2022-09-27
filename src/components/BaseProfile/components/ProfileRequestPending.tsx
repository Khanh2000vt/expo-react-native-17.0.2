import React from "react";
import { Warnings } from "@components/Icon";
import { theme } from "@theme";
import { StyleSheet, Text, View } from "react-native";
import { BaseButton } from "@components/BaseButton";
import { UseStateProps } from "../BaseProfileModel";

function ProfileRequestPending({ setIsShowAlert }: UseStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Request Pending...</Text>
      <Text style={styles.textBody}>Your RuiTomo request has been sent</Text>
      <BaseButton
        title="Block user"
        style={styles.button}
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
    marginBottom: 104,
    paddingHorizontal: 24,
    marginTop: 52,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    color: theme.colors.darkerPrimary,
    textAlign: "center",
  },
  textBody: {
    fontSize: theme.fontSize.font16,
    fontWeight: "400",
    lineHeight: 21.79,
    color: theme.colors.Neutral6,
    textAlign: "center",
  },
  button: {
    marginTop: 42,
  },
});

export default ProfileRequestPending;
