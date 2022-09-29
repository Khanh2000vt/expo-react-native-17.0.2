import { BaseButton } from "@components/BaseButton";
import { Warnings } from "@components/Icon";
import { rejectMemberApproval } from "@redux";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { UseStateProps } from "../BaseProfileModel";

function ProfileApproval({
  setIsVisibleModal,
  setIsShowAlert,
  user,
}: UseStateProps) {
  const dispatch = useDispatch();
  const handlePressReject = () => {
    const param = {
      user: user,
    };
    dispatch(rejectMemberApproval(param));
  };
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
          onPress={handlePressReject}
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

export default ProfileApproval;
