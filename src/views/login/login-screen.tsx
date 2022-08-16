import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Logo from "../../../assets/svg/LogoBlue.svg";
import { Formik } from "formik";
import BaseInput from "../../components/base-input/base-input";
function LoginScreen() {
  return (
    <View>
      <Logo width={49.64} height={50} />
      <Text>Login</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <BaseInput title="Email" style={styles.input} />
            <BaseInput title="Password" style={styles.input} />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    
  },
});
export default LoginScreen;
