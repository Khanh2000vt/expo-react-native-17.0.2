import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../constants";
import { BaseAlertProps } from "./BaseAlertModel";
function BaseAlert({
  children,
  isVisible,
  styleContainer,
  onBackButtonPress,
  onBackdropPress,
}: BaseAlertProps) {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver
      useNativeDriverForBackdrop
      backdropOpacity={0.8}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      style={{ justifyContent: "center" }}
    >
      <View style={[styles.container, styleContainer]}>{children}</View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    borderRadius: 8,
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
});

export default BaseAlert;
