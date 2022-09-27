import { BaseHeader, BaseVirtualizedView, VectorBack } from "@components";
import { Navigation, OtherProfile } from "@constant/index";
import { theme } from "@theme";
import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ListFooterComponent, ListHeaderComponent } from "./components";

function CommunityDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { community, joined } = route.params;
  // const keyboardHeight = useKeyboard();
  const scrollRef = useRef<FlatList>(null);

  const handlePressMember = (userOther: any) => {
    navigation.navigate(Navigation.OTHER_PROFILE, {
      userOther: userOther,
      type: OtherProfile.OTHER,
    });
  };

  const handlePressJoin = () => navigation.navigate(Navigation.FORUM_STACK);

  const handleFocus = (y: number) => {
    scrollRef.current?.scrollToOffset({
      animated: true,
      offset: y,
    });
  };

  return (
    <View style={[styles.container]}>
      <BaseHeader
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <BaseVirtualizedView ref={scrollRef}>
        <ListHeaderComponent
          community={community}
          onPressJoin={handlePressJoin}
          joined={joined}
        />
        <ListFooterComponent
          onPress={handlePressMember}
          onFocus={handleFocus}
        />
      </BaseVirtualizedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.Neutral0,
    // paddingBottom: 57,
  },
  styleHeader: {
    marginTop: 81,
    paddingBottom: 24,
  },
});
// scrollTo

export default CommunityDetailScreen;
