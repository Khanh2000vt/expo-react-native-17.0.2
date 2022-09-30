import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseProfile } from "@components";
import { OtherProfile, SCREEN } from "@constant/index";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { getJoinedCommunities } from "@utils";
import { ListAmount, ListSocial } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "@navigation";
type INavigation = RootStackScreenProps<SCREEN.YOUR_PROFILE>["navigation"];
function YourProfileScreen() {
  const navigation = useNavigation<INavigation>();
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
        listAmount={ListAmount(userRedux)}
        listSocial={ListSocial()}
        listJoined={joined}
        user={userRedux}
        relationship={OtherProfile.MYSELF}
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
