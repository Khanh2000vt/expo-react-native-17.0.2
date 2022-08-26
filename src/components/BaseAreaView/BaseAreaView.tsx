import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Container } from "../../constants/index";
import { PropsBaseScrollView } from "./BaseAreaViewProps";
import BaseHeader from "./components/BaseHeader/BaseHeader";
import { theme } from "../../constants/index";
const colors = theme.colors;
function BaseAreaView({
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
  scroll = false,
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
      {scroll ? (
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
      ) : (
        <View
          style={[
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
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.Neutral0,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default BaseAreaView;
