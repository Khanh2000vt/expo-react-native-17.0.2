import { BaseProfile } from "@components";
import { YourProfileNavigation } from "@navigation";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { getJoinedCommunities } from "@utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ListAmount, ListSocial } from "./constants";

function YourProfileScreen({ navigation }: YourProfileNavigation) {
  const userRedux = useSelector(getUserRedux);
  const communitiesRedux = useSelector(getCommunitiesRedux);
  const joined = getJoinedCommunities(userRedux.id, communitiesRedux).slice(
    0,
    5
  );
  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        isProfileSelf
        listAmount={ListAmount(userRedux)}
        listSocial={ListSocial()}
        listJoined={joined}
        user={userRedux}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Neutral0,
  },
});

export default YourProfileScreen;
