import { BaseButton, UseStateProps, Warnings } from "@components";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";

function ProfileOther({ setIsVisibleModal, setIsShowAlert }: UseStateProps) {
  return (
    <View style={styles.container}>
      <BaseButton
        title="Send RuiTomo Request"
        style={{ marginVertical: 12 }}
        onPress={() => setIsVisibleModal && setIsVisibleModal(true)}
      />
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

export default ProfileOther;
