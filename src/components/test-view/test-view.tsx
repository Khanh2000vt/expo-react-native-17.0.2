import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TestViewProps } from "./test-view-model";

function TestView({ title, description }: TestViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  textTitle: {
    fontWeight: "bold",
  },
});
export default TestView;
