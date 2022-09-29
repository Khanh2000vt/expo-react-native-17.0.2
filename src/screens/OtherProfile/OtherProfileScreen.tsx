import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseProfile } from "@components";
import { OtherProfile } from "@constant/index";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { getRelationshipMember } from "@utils";
import { ListAmount, ListSocial } from "./controller";

function OtherProfileScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const userRedux = useSelector(getUserRedux);
  const { userOther } = route.params;
  const joined = useSelector(getCommunitiesRedux).slice(0, 5);
  const relationship = getRelationshipMember(userOther, userRedux);

  if (relationship === OtherProfile.BLOCK) {
    return Alert.alert("Can't watch profile", "You have blocked this user", [
      {
        text: "Return",
        onPress: () => navigation.goBack(),
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        listAmount={ListAmount(userOther.friend)}
        listSocial={ListSocial()}
        listJoined={joined}
        user={userOther}
        relationship={relationship}
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
