import { SocialProps } from "@components";
import React from "react";
import { Image, StyleSheet } from "react-native";

const BaseURLImage = "../../../../assets/png/";
const listSocial = (): SocialProps[] => [
  {
    id: 1,
    title: "Matsuura Yuki official",
    icon: (
      <Image
        source={require(BaseURLImage + "logo_youtube.png")}
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
        source={require(BaseURLImage + "logo_instagram.png")}
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
        source={require(BaseURLImage + "logo_twitter.png")}
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
        source={require(BaseURLImage + "logo_facebook.png")}
        style={styles.iconSocial}
        resizeMode="cover"
      />
    ),
    onPress: () => {},
  },
];

const styles = StyleSheet.create({
  iconSocial: {
    width: 24,
  },
});

export default listSocial;
