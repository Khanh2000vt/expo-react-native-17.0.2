import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BaseHeader, BaseVirtualizedView, VectorBack } from "@components";
import { SCREEN } from "@constant/index";
import { IMemberAPI } from "@model";
import { RootStackScreenProps } from "@navigation";
import { getCommunitiesRedux } from "@redux";
import { theme } from "@theme";
import { getCommunityByID } from "@utils";
import { ListFooterComponent, ListHeaderComponent } from "./components";

type INavigation = RootStackScreenProps<SCREEN.COMMUNITY_DETAIL>;

function CommunityDetailScreen() {
  const navigation = useNavigation<INavigation["navigation"]>();
  const route = useRoute<INavigation["route"]>();
  const communityRoute = route.params.community;
  const communitiesRedux = useSelector(getCommunitiesRedux);
  const community = getCommunityByID(communitiesRedux, communityRoute);

  const handlePressMember = (userOther: IMemberAPI) => {
    if (userOther.id === "1") {
      navigation.navigate(SCREEN.YOUR_PROFILE);
    } else {
      navigation.navigate(SCREEN.OTHER_PROFILE, {
        userOther: userOther,
      });
    }
  };

  const handlePressJoin = () =>
    navigation.navigate(SCREEN.FORUM_STACK, {
      screen: SCREEN.FORUM,
    });

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
