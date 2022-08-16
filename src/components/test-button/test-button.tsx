import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function TestViewButton() {
  const [press, setPress] = useState<number>(0);
  function handlePress() {
    setPress(press + 1);
  }
  function handleReset() {
    setPress(0);
  }
  return (
    <View style={styles.container}>
      <Text>Đã ấn: {press} lần!</Text>
      <View style={styles.viewButton}>
        <Button title="Button" onPress={handlePress} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
});

export default TestViewButton;
