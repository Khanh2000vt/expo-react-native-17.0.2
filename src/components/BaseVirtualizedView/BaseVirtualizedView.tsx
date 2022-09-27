import React, { forwardRef } from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

interface BaseVirtualizedViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

function BaseVirtualizedView(
  { children = <></>, style }: BaseVirtualizedViewProps,
  ref?: React.ForwardedRef<FlatList>
) {
  return (
    <FlatList
      ref={ref}
      data={[]}
      style={style}
      renderItem={() => <></>}
      bounces={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => "BaseVirtualizedView"}
      ListHeaderComponent={<>{children}</>}
    />
    // <KeyboardAwareFlatList
    //   style={{ flex: 1 }}
    //   data={[]}
    //   renderItem={null}
    //   // innerRef={ref}
    //   keyExtractor={() => "BaseVirtualizedView"}
    //   ListHeaderComponent={<>{children}</>}
    //   showsVerticalScrollIndicator={false}
    //   enableOnAndroid
    //   bounces={false}
    //   extraScrollHeight={200}
    //   extraHeight={0}
    // />
  );
}

export default forwardRef<FlatList, BaseVirtualizedViewProps>(
  BaseVirtualizedView
);
