import { BaseProfile, Coin, Crown, Users } from "@components";
import { YourProfileNavigation } from "@navigation";
import { RootState } from "@redux";
import { theme } from "@theme";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ListAmount, ListSocial } from "./constants";

function YourProfileScreen({ navigation }: YourProfileNavigation) {
  const joined = useSelector((state: RootState) => state.joined.communities);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        isProfileSelf
        avatar={user.avatar}
        name={user.name}
        idAccount={user.id_account}
        introduction={user.introduction}
        listAmount={ListAmount(user)}
        listSocial={ListSocial()}
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

export default YourProfileScreen;
