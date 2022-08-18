import React from "react";
import { StyleSheet, View } from "react-native";
import { PropsBaseScrollView } from "./base-scroll-view-model";
import { Container } from "../../constants/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function BaseScrollView({
  paddingLeft = Container.PADDING_LEFT,
  paddingRight = Container.PADDING_RIGHT,
  paddingTop = 0,
  paddingBottom = 0,
  children,
  style,
  ...props
}: PropsBaseScrollView) {
  return (
    <View
      style={
        (styles.container,
        {
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
        })
      }
    >
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.scrollView, style]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        // keyboardDismissMode="on-drag"
        // enableResetScrollToCoords
        {...props}
      >
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: "red",
  },
});

export default BaseScrollView;
