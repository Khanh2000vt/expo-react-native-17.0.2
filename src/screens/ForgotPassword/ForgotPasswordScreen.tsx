import { Formik, useFormik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArrowRight, BaseAreaView, BaseButton, BaseInput } from "@components";
import { SCREEN } from "@constant/index";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";
import * as Yup from "yup";
import { getUserRedux } from "@redux";
import { useSelector } from "react-redux";
import { getSubmitEmail } from "./controller";
type INav = LoginTabProps<SCREEN.FORGOT_PASSWORD>["navigation"];
interface IFormik {
  email: string;
}

const colors = theme.colors;
const fontSize = theme.fontSize;

const initialValues: IFormik = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email address"),
});

function ForgotPasswordScreen() {
  const userRedux = useSelector(getUserRedux);
  const navigation = useNavigation<INav>();

  const handleSubmit = (values: IFormik) => {
    if (!getSubmitEmail(values, userRedux)) {
      formik.setSubmitting(false);
      formik.setFieldError(
        "email",
        "Email does not exist or is not registered"
      );
    } else {
      navigation.navigate(SCREEN.OTP, { type: 2 });
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  function handleBackToLogin() {
    navigation.goBack();
  }

  return (
    <BaseAreaView style={styles.container} scroll>
      <Text style={styles.textTitle}>Forgot Password</Text>
      <Text style={styles.textBody}>
        Enter your email and we’ll send the instruction to you
      </Text>
      <BaseInput
        title="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        placeholder="Your email"
        placeholderTextColor={colors.Neutral3}
        autoComplete="email"
        keyboardType="email-address"
        styleContainer={styles.inputContainer}
        error={formik.touched.email}
        messageError={formik.errors.email}
      />
      <BaseButton
        title={"Submit"}
        IconRight={<ArrowRight height={20} width={20} />}
        style={styles.baseButton}
        onPress={formik.handleSubmit}
      />
      <BaseButton
        title={"Back to login"}
        style={styles.baseButton}
        onPress={handleBackToLogin}
        option="solid"
      />
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
