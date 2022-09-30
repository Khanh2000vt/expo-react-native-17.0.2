import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArrowRight, BaseAreaView, BaseButton, BaseInput } from "@components";
import { SCREEN } from "@constant/index";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";
type INav = LoginTabProps<SCREEN.FORGOT_PASSWORD>["navigation"]
const colors = theme.colors;
const fontSize = theme.fontSize;
function ForgotPasswordScreen() {
  const navigation =
    useNavigation<INav>();
  function handleBackToLogin() {
    navigation.goBack();
  }

  return (
    <BaseAreaView style={styles.container} scroll>
      <Text style={styles.textTitle}>Forgot Password</Text>
      <Text style={styles.textBody}>
        Enter your email and we’ll send the instruction to you
      </Text>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(_values) => navigation.navigate(SCREEN.REGISTER_FORGOT)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <BaseInput
              title="Email"
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
              IconRight={<ArrowRight height={20} width={20} />}
              style={styles.baseButton}
              onPress={handleSubmit}
            />
            <BaseButton
              title={"Back to login"}
              style={styles.baseButton}
              onPress={handleBackToLogin}
              option="solid"
            />
          </>
        )}
      </Formik>
    </BaseAreaView>
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
