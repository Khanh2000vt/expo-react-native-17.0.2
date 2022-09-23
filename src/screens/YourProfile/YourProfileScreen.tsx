import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseProfile, Coin, Crown, Users } from "../../components";
import { theme } from "../../constant";
import { RootState } from "../../redux";

function YourProfileScreen({ navigation }: { navigation: any }) {
  const joined = useSelector((state: RootState) => state.joined.communities);
  const user = useSelector((state: RootState) => state.auth.user);
  const listAmount = [
    {
      id: 1,
      icon: <Users />,
      amount: user.friend,
      color: theme.colors.Semantic5,
      onPress: () => {},
    },
    {
      id: 2,
      icon: <Crown />,
      amount: user.crown,
      color: theme.colors.Semantic2,
      onPress: () => {},
    },
    {
      id: 3,
      icon: <Coin />,
      amount: user.coin,
      color: theme.colors.Semantic1,
      onPress: () => {},
    },
  ];

  const listSocial = [
    {
      id: 1,
      title: "Matsuura Yuki official",
      icon: (
        <Image
          source={require("../../../assets/png/logo_youtube.png")}
          style={styles.iconSocial}
        />
      ),
      onPress: () => {},
    },
    {
      id: 2,
      title: "@Yuki.Matsuura",
      icon: (
        <Image
          source={require("../../../assets/png/logo_twitter.png")}
          style={styles.iconSocial}
        />
      ),
      onPress: () => {},
    },
    {
      id: 3,
      title: "@YukiMatsuura23",
      icon: (
        <Image
          source={require("../../../assets/png/logo_twitter.png")}
          style={styles.iconSocial}
        />
      ),
      onPress: () => {},
    },
    {
      id: 4,
      title: "Matsuura Yuki",
      icon: (
        <Image
          source={require("../../../assets/png/logo_facebook.png")}
          style={styles.iconSocial}
          resizeMode="cover"
        />
      ),
      onPress: () => {},
    },
  ];
  return (
    <View style={styles.container}>
      <BaseProfile
        navigation={navigation}
        isProfileSelf
        avatar={user.avatar}
        name={user.name}
        idAccount={user.id_account}
        introduction={user.introduction}
        listAmount={listAmount}
        listSocial={listSocial}
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
  iconSocial: {
    width: 24,
  },
});

export default YourProfileScreen;
