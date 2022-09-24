import { BaseButton, WarningsFill } from "@components";
import { theme } from "@theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IState {
  onPressAgree: () => void;
  onPressCancel: () => void;
}

function AlertBlockComponent({ onPressAgree, onPressCancel }: IState) {
  return (
    <>
      <WarningsFill />
      <View style={styles.bodyAlert}>
        <Text style={styles.textAlert}>
          Are you sure you want to block{" "}
          <Text style={styles.textNameAlert}>Matsuura Yuki</Text>
        </Text>
      </View>
      <View style={styles.viewButtonAlert}>
        <BaseButton
          title="Block"
          style={styles.buttonAlert}
          backgroundColor={theme.colors.Semantic4}
          onPress={onPressAgree}
        />
        <BaseButton
          title="Cancel"
          option="solid"
          color={theme.colors.Neutral6}
          style={styles.buttonAlert}
          onPress={onPressCancel}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //alert
  viewButtonAlert: {
    flexDirection: "row",
    paddingTop: 29,
    paddingBottom: 36,
    paddingHorizontal: 12,
    marginTop: 29,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral3,
  },
  bodyAlert: {
    paddingHorizontal: 28,
    marginTop: 22,
  },
  buttonAlert: {
    flex: 1,
    marginHorizontal: 16,
  },
  textAlert: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    lineHeight: 28.8,
    color: theme.colors.Neutral8,
    // flex: 1,
    textAlign: "center",
  },
  textNameAlert: {
    fontWeight: "600",
    color: theme.colors.Neutral10,
  },
});

export default AlertBlockComponent;
