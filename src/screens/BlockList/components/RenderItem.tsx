import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BaseButton } from "../../../components";
import { theme } from "../../../constant";
import { Title } from "../enum";

interface IState {
  item: any;
  onPress: (item: any) => void;
}

function RenderItem({ item, onPress }: IState) {
  return (
    <View style={styles.containerItem}>
      <View style={styles.headerItemFlatList}>
        <Image source={{ uri: item.avatar }} style={styles.imageItem} />
        <Text style={styles.textNameItem}>{item.name}</Text>
      </View>
      <BaseButton
        title={Title.REMOVE_BLOCK}
        option="solid"
        onPress={() => onPress(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    padding: 24,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    marginBottom: 20,
  },
  headerItemFlatList: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  imageItem: {
    width: 42,
    height: 42,
    borderRadius: 100,
    marginRight: 16,
  },
  textNameItem: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 21.79,
    color: theme.colors.darkerPrimary,
  },
});

export default RenderItem;
