import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
function TestScreen() {
  const [country, setCountry] = useState("Unknown");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}
        dropdownIconColor="green"
      >
        <Picker.Item label=" country" value="Unknown" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // position: "relative"
  },
  picker: {
    marginVertical: 30,
    width: 200,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "#000",
    backgroundColor: "red",
    // ba
  },
});

export default TestScreen;
