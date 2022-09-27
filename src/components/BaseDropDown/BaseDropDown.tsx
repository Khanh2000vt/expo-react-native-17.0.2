import React, { useState } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { ArrowDownIcon } from "@components/Icon";
import { theme } from "@theme";
import { PropsBaseDropDown } from "./BaseDropDownModel";
import { ISelect } from "@model";
const colors = theme.colors;
const fontSize = theme.fontSize;

interface IPops {
  style: StyleProp<ViewStyle>;
}

const ArrowDownIconComponent = ({ style }: IPops) => (
  <ArrowDownIcon style={style} />
);

function BaseDropDown({
  data,
  title,
  placeholder = "Select an item",
  placeholderStyle,
  styleView,
  onChangeValue,
  error,
  messageError,
  zIndex,
  zIndexInverse,
}: PropsBaseDropDown) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState<ISelect[]>(data);
  return (
    <View style={[styles.container, styleView]}>
      <Text style={styles.textTitle}>{title}</Text>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
          bottomOffset={100}
          placeholder={placeholder}
          placeholderStyle={placeholderStyle}
          onChangeValue={onChangeValue}
          zIndex={zIndex}
          itemSeparator
          zIndexInverse={zIndexInverse}
          style={styles.dropDownPicker}
          ArrowDownIconComponent={ArrowDownIconComponent}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          selectedItemContainerStyle={styles.listItemLabelStyle}
          itemSeparatorStyle={{ backgroundColor: colors.Neutral3 }}
          scrollViewProps={{
            decelerationRate: "fast",
          }}
          labelProps={{
            style: styles.labelText,
          }}
        />
      </View>
      {error && <Text style={styles.textError}>{messageError}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropDownContainerStyle: {
    borderWidth: 0,
  },
  labelText: {
    fontWeight: "400",
    fontSize: fontSize.font16,
    color: colors.Neutral10,
  },
  dropDownPicker: {
    backgroundColor: colors.colorInput,
    borderWidth: 0,
  },
  textTitle: {
    fontWeight: "500",
    fontSize: fontSize.font16,
    color: colors.Neutral4,
  },
  listItemContainerStyle: {
    // backgroundColor: "red",
  },
  listItemLabelStyle: {
    backgroundColor: colors.colorInput,
  },
  textError: {
    fontSize: 9,
    color: "red",
  },
});
export default BaseDropDown;
