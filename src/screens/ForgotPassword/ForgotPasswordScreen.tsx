import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BaseInput from "../../components/BaseInput/BaseInput";
import ArrowRight from "../../../assets/svg/ArrowRight.svg";
import { theme } from "../../constants/index";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseScrollView from "../../components/BaseScrollView/BaseScrollView";
const colors = theme.colors;
const fontSize = theme.fontSize;
function ForgotPasswordScreen({ navigation }: { navigation: any }) {
  function handleBackToLogin() {
    navigation.goBack();
  }

  return (
    <BaseScrollView style={styles.container}>
      <Text style={styles.textTitle}>Forgot Password</Text>
      <Text style={styles.textBody}>
        Enter your email and we’ll send the instruction to you
      </Text>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <BaseInput
              title="Email"
              //   style={styles.input}
              value={values.email}
              onChangeText={handleChange("email")}
              placeholder="Your email"
              placeholderTextColor={colors.Neutral3}
              autoComplete="email"
              keyboardType="email-address"
              styleContainer={styles.inputContainer}
            />
            <BaseButton
              title={"Submit"}
              IconView={<ArrowRight height={20} width={20} />}
              style={styles.baseButton}
              onPress={handleSubmit}
            />
            <BaseButton
              title={"Back to login"}
              style={styles.baseButton}
              onPress={handleBackToLogin}
              option="solid"
            />
          </View>
        )}
      </Formik>
    </BaseScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 28,
    marginBottom: 36,
  },
  baseButton: {
    marginBottom: 18,
  },
  textTitle: {
    fontSize: fontSize.font28,
    color: colors.Neutral10,
    textAlign: "center",
    marginBottom: 6,
  },
  textBody: {
    fontSize: fontSize.font14,
    color: colors.Neutral6,
    textAlign: "center",
  },
});

export default ForgotPasswordScreen;
