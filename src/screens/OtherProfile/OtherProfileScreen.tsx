import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseProfile } from "@components";
import { OtherProfile, SCREEN } from "@constant/index";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { getRelationshipMember } from "@utils";
import { ListAmount, ListSocial } from "./controller";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "@navigation";

type INavigation = RootStackScreenProps<SCREEN.OTHER_PROFILE>;

function OtherProfileScreen() {
  const navigation = useNavigation<INavigation["navigation"]>();
  const route = useRoute<INavigation["route"]>();
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
