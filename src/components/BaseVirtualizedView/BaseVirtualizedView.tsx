import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

interface BaseVirtualizedViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

function BaseVirtualizedView({
  children = <></>,
  style,
}: BaseVirtualizedViewProps) {
  return (
    <KeyboardAwareFlatList
      style={[{ flex: 1 }, style]}
      data={[]}
      renderItem={null}
      // innerRef={ref}
      keyExtractor={() => "BaseVirtualizedView"}
      ListHeaderComponent={<>{children}</>}
      showsVerticalScrollIndicator={false}
      enableOnAndroid
      bounces={false}
      extraScrollHeight={200}
      extraHeight={0}
    />
  );
}

export default BaseVirtualizedView;
