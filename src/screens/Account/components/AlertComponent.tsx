import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseButton } from "../../../components";
import { theme } from "../../../constant";
import { Title } from "../enum";
import { AlertComponentProps } from "../model";

function AlertComponent({ onPressLogout, onPressCancel }: AlertComponentProps) {
  return (
    <>
      <View style={styles.bodyAlert}>
        <Text style={styles.textTitleAlert}>Do you want to Log out?</Text>
      </View>
      <View style={[styles.viewButtonAlert]}>
        <BaseButton
          title={Title.LOG_OUT}
          style={[styles.buttonAlert, { marginLeft: 0 }]}
          onPress={onPressLogout}
        />
        <BaseButton
          title={Title.CANCEL}
          option="solid"
          style={[styles.buttonAlert, { marginRight: 0 }]}
          onPress={onPressCancel}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bodyAlert: {
    marginBottom: 64,
  },
  viewButtonAlert: {
    flexDirection: "row",
  },
  textTitleAlert: {
    textAlign: "center",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral8,
    fontWeight: "500",
  },
  buttonAlert: {
    flex: 1,
    marginHorizontal: 15,
  },
});

export default AlertComponent;
