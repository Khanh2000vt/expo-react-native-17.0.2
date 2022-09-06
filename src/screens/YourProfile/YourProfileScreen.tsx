import React from "react";
import { StyleSheet, View } from "react-native";
import { BaseProfile } from "../../components";
import { theme } from "../../constants";

function YourProfileScreen({ navigation }: { navigation: any }) {
  const joinedCommunitiesTest = [
    { title: "Anime" },
    { title: "Fashion" },
    { title: "Western Movies" },
  ];
  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        isProfileSelf
        joinedCommunities={joinedCommunitiesTest}
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
