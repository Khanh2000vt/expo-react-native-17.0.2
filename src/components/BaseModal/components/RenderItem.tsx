import { Tick } from "@components";
import { ISelect } from "@model";
import { theme } from "@theme";
import React from "react";
import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface IState {
  onPress: (item: ISelect) => void;
  props: ListRenderItemInfo<ISelect>;
  value: string | undefined;
}

function RenderItem({ onPress, props, value }: IState) {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => onPress(item)}
    >
      <Text>{item.label}</Text>
      {item.value === value && <Tick stroke={theme.colors.primary} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderBottomWidth: 1,
    borderColor: theme.colors.Neutral3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default RenderItem;
