import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { BaseProfile } from "@components";
import { getCommunitiesRedux, RootState } from "@redux";
import { theme } from "@theme";
import { ListAmount, ListSocial } from "./controller";

function OtherProfileScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { userOther, type } = route.params;
  const joined = useSelector(getCommunitiesRedux).slice(0, 5);

  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        listAmount={ListAmount(userOther.friend)}
        listSocial={ListSocial()}
        type={type}
        listJoined={joined}
        member={userOther}
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

export default OtherProfileScreen;
