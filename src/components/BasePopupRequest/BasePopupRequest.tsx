import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

import { BaseButton } from "@components/BaseButton";
import { RootState } from "@redux";
import { theme } from "@theme";
import { BasePopupRequestProps } from "./BasePopupRequestModel";

function BasePopupRequest({
  isVisible,
  onBackButtonPress,
  onBackdropPress,
  styleContainer,
  onPressCancel,
  onPressOK,
  accept,
  coinRequest = 0,
}: BasePopupRequestProps) {
  const coinCurrent = useSelector((state: RootState) => state.auth.user.coin);
  const isSuffering = coinCurrent - coinRequest >= 0;
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
      <View style={[styles.container, styleContainer]}>
        <View style={styles.viewText}>
          {isSuffering ? (
            <Text style={styles.textTitle}>
              Do you want to spend{" "}
              <Text style={styles.textCoinRequest}>{coinRequest}tc</Text>
              {accept
                ? " on accepting request from "
                : " on sending a RuiTomo request to "}
              <Text style={styles.textName}>Cody Fisher</Text>?
            </Text>
          ) : (
            <Text style={styles.textTitle}>
              You need{" "}
              <Text style={styles.textCoinRequest}>
                {coinRequest - coinCurrent}tc
              </Text>{" "}
              to post this
            </Text>
          )}
          <Text style={styles.textBody}>
            Your current tc count:{" "}
            <Text style={styles.textCoinCurrent}>
              {coinCurrent} <Text style={styles.textTC}>tc</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.viewButton}>
          {isSuffering && (
            <BaseButton
              title="OK"
              style={[styles.button, { marginRight: 16 }]}
              onPress={onPressOK}
            />
          )}
          <BaseButton
            title={isSuffering ? "Cancel" : "Go Back"}
            option="solid"
            style={[styles.button, { marginLeft: isSuffering ? 16 : 0 }]}
            color={theme.colors.Neutral6}
            onPress={onPressCancel}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    borderRadius: 8,
    // paddingVertical: 40,
  },
  textTitle: {
    fontSize: theme.fontSize.font18,
    fontWeight: "500",
    color: theme.colors.Neutral8,
    lineHeight: 28.8,
    textAlign: "center",
  },
  textCoinRequest: {
    fontWeight: "700",
    color: theme.colors.Neutral10,
  },
  textName: {
    fontWeight: "600",
    color: theme.colors.primary,
  },
  textBody: {
    fontWeight: "500",
    fontSize: theme.fontSize.font16,
    color: theme.colors.Neutral6,
    lineHeight: 26,
    textAlign: "center",
    marginTop: 9,
  },
  textCoinCurrent: {
    fontSize: theme.fontSize.font24,
    color: theme.colors.Semantic1,
    lineHeight: 38.4,
    fontWeight: "700",
  },
  textTC: {
    fontWeight: "500",
  },
  viewText: {
    paddingHorizontal: 28,
    paddingTop: 44,
  },
  viewButton: {
    flexDirection: "row",
    paddingHorizontal: 28,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral3,
    paddingTop: 38,
    paddingBottom: 34,
    marginTop: 46,
  },
  button: {
    flex: 1,
  },
});

export default BasePopupRequest;
