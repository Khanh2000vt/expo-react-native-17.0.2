import React from "react";
import { StyleSheet, View } from "react-native";
import { PropsBaseScrollView } from "./BaseScrollViewModel";
import { Container } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BaseHeader from "../BaseHeader/BaseHeader";
function BaseScrollView({
  paddingLeft = Container.PADDING_LEFT,
  paddingRight = Container.PADDING_RIGHT,
  paddingTop = 0,
  paddingBottom = 0,
  children,
  header,
  style,
  title,
  IconLeft,
  IconRight,
  styleHeader,
  onPressLeft,
  onPressRight,
  ...props
}: PropsBaseScrollView) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {header && (
        <BaseHeader
          title={title}
          IconLeft={IconLeft}
          IconRight={IconRight}
          styleHeader={styleHeader}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
        />
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={[
          {
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
          },
          ,
          styles.scrollView,
          style,
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        // keyboardDismissMode="on-drag"
        // enableResetScrollToCoords
        {...props}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default BaseScrollView;
