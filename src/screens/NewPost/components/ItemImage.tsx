import { SvgX } from "@components";
import { IImage } from "@model";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface IState {
  item: IImage;
  onPress: (item: IImage) => void;
}

function ItemImage({ item, onPress }: IState) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => onPress(item)}
      >
        <SvgX />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  button: {
    position: "absolute",
    padding: 9,
    backgroundColor: "rgba(0, 0, 0, 0.63)",
    borderRadius: 100,
    top: 10,
    left: 10,
  },
  image: {
    width: 146,
    height: 183,
    borderRadius: 8,
  },
});

export default ItemImage;
