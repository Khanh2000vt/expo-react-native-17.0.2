import { BaseButton } from "@components/BaseButton";
import { Warnings } from "@components/Icon";
import { OtherProfile } from "@constant/index";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { UseStateProps } from "../BaseProfileModel";

function ProfileInvitation({
  setIsVisibleModal,
  setStatus,
  setIsShowAlert,
}: UseStateProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <BaseButton
          title="Accept"
          style={{ marginVertical: 12, flex: 1, marginRight: 8 }}
          onPress={() => setIsVisibleModal && setIsVisibleModal(true)}
        />
        <BaseButton
          title="Reject"
          style={{ marginVertical: 12, flex: 1, marginLeft: 8 }}
          option="solid"
          color={theme.colors.Neutral4}
          onPress={() => setStatus && setStatus(OtherProfile.OTHER)}
        />
      </View>
      <BaseButton
        title="Block user"
        style={{ marginVertical: 12 }}
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
});

export default ProfileInvitation;
