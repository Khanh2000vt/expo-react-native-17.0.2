import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseProfile } from "@components";
import { OtherProfile, SCREEN } from "@constant/index";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { getRelationshipMember } from "@utils";
import { ListAmount, ListSocial } from "./controller";
import { RootStackScreenProps } from "@navigation";
import { IMemberAPI } from "@model";

type INavigation = RootStackScreenProps<SCREEN.OTHER_PROFILE>;

function OtherProfileScreen() {
  const navigation = useNavigation<INavigation["navigation"]>();
  const route = useRoute<INavigation["route"]>();
  const userRedux = useSelector(getUserRedux);
  const { userOther } = route.params;
  const joined = useSelector(getCommunitiesRedux).slice(0, 5);
  const relationship = getRelationshipMember(userOther, userRedux);

  if (relationship === OtherProfile.BLOCK) {
    Alert.alert("Can't watch profile", "You have blocked this user", [
      {
        text: "Return",
        onPress: () => navigation.goBack(),
        style: "cancel",
      },
    ]);
    return <View style={{ flex: 1 }}></View>;
  }
  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        listAmount={ListAmount(
          typeof userOther.friend === "number"
            ? userOther.friend
            : userOther.friend.length
        )}
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
