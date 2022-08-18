import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./src/views/login/login-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ForgotPasswordScreen from "./src/views/login/forgot-password-screen";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <LoginScreen />
        {/* <ForgotPasswordScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
