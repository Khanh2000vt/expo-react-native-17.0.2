import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { BaseProfile } from "@components";
import { RootState } from "@redux";
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
  const joined = useSelector((state: RootState) => state.joined.communities);

  return (
    <View style={styles.container}>
      <BaseProfile
        avatar={userOther.avatar}
        name={userOther.name}
        idAccount={userOther.id_account}
        introduction={userOther.introduction}
        navigation={navigation}
        listAmount={ListAmount(userOther.friend)}
        listSocial={ListSocial()}
        type={type}
        listJoined={joined}
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
