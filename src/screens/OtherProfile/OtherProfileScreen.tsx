import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { BaseProfile, Users } from "../../components";
import { theme } from "../../constants";
import { RootState } from "../../redux";

function OtherProfileScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { userOther, type } = route.params;
  const joined = useSelector((state: RootState) => state.joined.communities);
  const listAmount = [
    {
      id: 1,
      icon: <Users />,
      amount: userOther.friend,
      color: theme.colors.Semantic5,
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
          source={require("../../../assets/png/logo_instagram.png")}
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
    <View>
      <BaseProfile
        avatar={userOther.avatar}
        name={userOther.name}
        idAccount={userOther.id_account}
        introduction={userOther.introduction}
        navigation={navigation}
        listAmount={listAmount}
        listSocial={listSocial}
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
  iconSocial: {
    width: 24,
  },
});

export default OtherProfileScreen;
