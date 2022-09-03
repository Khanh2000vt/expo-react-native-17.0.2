import React from "react";
import Modal from "react-native-modal";
import { View, Text, StyleSheet } from "react-native";
import { BaseAlertProps } from "./BaseAlertModel";
import { theme } from "../../constants";
import { BaseButton } from "../BaseButton";
function BaseAlert({
  title,
  isVisible,
  arrayButton = [],
  styleContainer,
  styleBody,
  styleViewButton,
}: BaseAlertProps) {
  const amountButton = arrayButton.length - 1;
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver
      useNativeDriverForBackdrop
      backdropOpacity={0.8}
      onBackButtonPress={() => {}}
      onBackdropPress={() => {}}
      style={{ justifyContent: "center" }}
    >
      <View style={[styles.container, styleContainer]}>
        <View style={[styles.body, styleBody]}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={[styles.viewButton, styleViewButton]}>
          {arrayButton.map(({ style, ...button }, index) => {
            return (
              <BaseButton
                {...button}
                key={index}
                style={[
                  styles.button,
                  {
                    marginLeft: index === 0 ? 0 : 15,
                    marginRight: index === amountButton ? 0 : 15,
                  },
                  style,
                ]}
              />
            );
          })}
        </View>
      </View>
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
  body: {
    marginBottom: 64,
  },
  viewButton: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    marginHorizontal: 15,
  },
  textTitle: {
    textAlign: "center",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral8,
    fontWeight: "500",
  },
});

export default BaseAlert;
