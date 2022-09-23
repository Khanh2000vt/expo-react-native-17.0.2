import { useFormik } from "formik";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  ArrowRight,
  BaseAreaView,
  BaseButton,
  BaseInput,
} from "../../components";
import { Container, Navigation } from "@constant/index";
import { loginAuth, RootState } from "../../redux";
import { theme } from "@theme";

const colors = theme.colors;
const fontSize = theme.fontSize;

function LoginScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  // const isLoading = false;
  function handleLogin(_value: any) {
    dispatch(loginAuth());
  }

  const formik = useFormik({
    initialValues: {
      email: "macro@gmail.com",
      password: "1234566789",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum."),
      // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => handleLogin(values),
  });

  function handleForgotPassword() {
    console.log("ForgotPasswordScreen");
    navigation.navigate(Navigation.FORGOT_PASSWORD);
  }

  function handleRegister() {
    console.log("RegisterScreen");
    navigation.navigate(Navigation.REGISTER);
  }

  if (isLoading) {
    return (
      <View style={styles.loadingLogin}>
        <ActivityIndicator size="large" />
        <Text>Login ...</Text>
      </View>
    );
  }

  return (
    <BaseAreaView style={styles.container} scroll>
      <Image
        source={require("../../../assets/png/LogoBlue.png")}
        style={styles.logo}
      />
      <View style={styles.viewLogin}>
        <Text style={styles.textTitle}>Login</Text>
        <View>
          <BaseInput
            title="Email"
            value={formik.values.email}
            styleContainer={styles.inputContainer}
            onChangeText={formik.handleChange("email")}
            placeholder="Your email"
            placeholderTextColor={colors.Neutral3}
            autoComplete="email"
            keyboardType="email-address"
            error={formik.touched.email}
            messageError={formik.errors.email}
          />
          <BaseInput
            title="Password"
            option="password"
            value={formik.values.password}
            styleContainer={styles.inputContainer}
            onChangeText={formik.handleChange("password")}
            placeholder="Your password"
            placeholderTextColor={colors.Neutral3}
            error={formik.touched.password}
            messageError={formik.errors.password}
          />
          <View style={styles.viewForgotPassword}>
            <View />
            <TouchableOpacity
              onPress={handleForgotPassword}
              activeOpacity={0.8}
            >
              <Text style={styles.textForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <BaseButton
            title={"Login"}
            IconRight={<ArrowRight height={20} width={20} />}
            style={styles.baseButton}
            onPress={formik.handleSubmit}
          />
          <View style={styles.viewRegister}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleRegister} activeOpacity={0.8}>
              <Text style={styles.textActive}>{" Register"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View />
    </BaseAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
  },
  scrollView: {
    paddingLeft: Container.PADDING_LEFT,
    paddingRight: Container.PADDING_RIGHT,
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
  logo: {
    alignSelf: "center",
  },
  viewLogin: {
    width: "100%",
  },
  inputContainer: {
    marginVertical: 16,
  },
  viewForgotPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonLogin: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  baseButton: {
    marginTop: 33,
    marginBottom: 24,
  },
  textTitle: {
    color: colors.Neutral10,
    fontSize: fontSize.font28,
    fontWeight: "600",
    textAlign: "center",
  },
  textForgotPassword: {
    color: colors.Neutral4,
    fontSize: fontSize.font16,
    fontWeight: "500",
  },
  text: {
    color: colors.Neutral8,
    fontSize: fontSize.font16,
    fontWeight: "400",
  },
  textActive: {
    fontSize: fontSize.font16,
    fontWeight: "600",
    color: colors.primary,
  },
  loadingLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Neutral0,
  },
});
export default LoginScreen;
