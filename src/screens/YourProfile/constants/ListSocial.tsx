import React from "react";
import { Image, StyleSheet } from "react-native";

const baseURL = "../../../../assets/png/";

const ListSocial = () => [
  {
    id: 1,
    title: "Matsuura Yuki official",
    icon: (
      <Image
        source={require(baseURL + "logo_youtube.png")}
        style={styles.icon}
      />
    ),
    onPress: () => {},
  },
  {
    id: 2,
    title: "@Yuki.Matsuura",
    icon: (
      <Image
        source={require(baseURL + "logo_twitter.png")}
        style={styles.icon}
      />
    ),
    onPress: () => {},
  },
  {
    id: 3,
    title: "@YukiMatsuura23",
    icon: (
      <Image
        source={require(baseURL + "logo_twitter.png")}
        style={styles.icon}
      />
    ),
    onPress: () => {},
  },
  {
    id: 4,
    title: "Matsuura Yuki",
    icon: (
      <Image
        source={require(baseURL + "logo_facebook.png")}
        style={styles.icon}
        resizeMode="cover"
      />
    ),
    onPress: () => {},
  },
];

export default ListSocial;

const styles = StyleSheet.create({
  icon: {
    width: 24,
  },
});
