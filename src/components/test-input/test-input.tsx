import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TestViewInputProps } from "./test-input-model";

function TestViewInput({
  title,
  onComplete,
  onChangeText,
  value,
}: TestViewInputProps) {
  function handleComplete() {
    if (onComplete) {
      onComplete(value || "");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.viewText}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder="Input Text"
          secureTextEntry
        />
        <View style={styles.button}>
          <Button title="Clear" onPress={handleComplete} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a9e9e9",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  viewText: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "20%",
  },
});

export default TestViewInput;
