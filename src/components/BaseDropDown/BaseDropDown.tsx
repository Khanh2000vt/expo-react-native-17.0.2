import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { PropsBaseDropDown } from "./base-drop-down-model";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme, Container } from "../../constants/index";
const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseDropDown({
  data,
  title,
  selectedValue,
  // value,
  styleView,
  ...props
}: PropsBaseDropDown) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState("apple");
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);
  useEffect(() => {
    setItems([...data]);
  }, []);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        // searchable={true}
        listMode="SCROLLVIEW"
        dropDownDirection="TOP"
        // onChangeValue={onChangeValue}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        modalTitleStyle={{
          fontWeight: "bold",
        }}
        zIndex={6000}
        labelProps={{
          style: styles.labelText,
        }}
        autoScroll={false}
        style={styles.dropDownPicker}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  labelText: {
    fontWeight: "bold",
  },
  dropDownPicker: {
    backgroundColor: colors.colorInput,
    borderWidth: 0,
  },
});
export default BaseDropDown;
