import { BaseHeader, BaseVirtualizedView, VectorBack } from "@components";
import { Navigation, OtherProfile } from "@constant/index";
import { IMemberAPI } from "@model";
import { getCommunitiesRedux } from "@redux";
import { theme } from "@theme";
import { getCommunityByID } from "@utils";
import React, { useRef } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { ListFooterComponent, ListHeaderComponent } from "./components";

function CommunityDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const communityRoute = route.params.community;
  const communitiesRedux = useSelector(getCommunitiesRedux);
  const community = getCommunityByID(communitiesRedux, communityRoute);

  const handlePressMember = (userOther: IMemberAPI) => {
    if (userOther.id === "1") {
      navigation.navigate(Navigation.YOUR_PROFILE);
    } else {
      navigation.navigate(Navigation.OTHER_PROFILE, {
        userOther: userOther,
        type: OtherProfile.OTHER,
      });
    }
  };

  const handlePressJoin = () => navigation.navigate(Navigation.FORUM_STACK);

  if (community === undefined) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <BaseHeader
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <BaseVirtualizedView>
        <ListHeaderComponent
          community={community}
          onPressJoin={handlePressJoin}
        />
        <ListFooterComponent
          onPress={handlePressMember}
          community={community}
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
    //
  },
  styleHeader: {
    marginTop: 81,
    paddingBottom: 24,
  },
});
// scrollTo

export default CommunityDetailScreen;
