import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import TestViewButton from "./src/components/test-button/test-button";
import TestViewInput from "./src/components/test-input/test-input";
import TestView from "./src/components/test-view/test-view";
import { testList } from "./src/constants/test-list";
import LoginScreen from "./src/views/login/login-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [text, onChangeText] = useState<string>("");
  function handleComplete() {
    console.log("test");
    onChangeText("");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <LoginScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  view: {
    width: "100%",
  },
});
