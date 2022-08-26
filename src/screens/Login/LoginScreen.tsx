import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { theme, Container } from "../../constants/index";
import {
  BaseAreaView,
  BaseButton,
  BaseInput,
  ArrowRight,
  EyeSlash,
} from "../../components";

const colors = theme.colors;
const fontSize = theme.fontSize;

function LoginScreen({ navigation }: { navigation: any }) {
  const [isHide, setIsHide] = useState<boolean>(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => console.log(values),
  });

  function handleForgotPassword() {
    console.log("ForgotPasswordScreen");
    navigation.navigate("ForgotPasswordScreen");
  }

  function handleRegister() {
    console.log("RegisterScreen");
    navigation.navigate("RegisterScreen");
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
            value={formik.values.password}
            styleContainer={styles.inputContainer}
            onChangeText={formik.handleChange("password")}
            placeholder="Your password"
            placeholderTextColor={colors.Neutral3}
            IconView={<EyeSlash height={24} width={24} />}
            secureTextEntry={isHide}
            onPressIcon={() => {
              setIsHide(!isHide);
            }}
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
    // fontFamily: "NotoSans-Medium",
    color: colors.Neutral10,
    fontSize: fontSize.font28,
    fontWeight: "600",
    textAlign: "center",
  },
  textForgotPassword: {
    // fontFamily: "NotoSans-Medium",
    color: colors.Neutral4,
    fontSize: fontSize.font16,
    fontWeight: "500",
  },
  text: {
    // fontFamily: "NotoSans-Medium",
    color: colors.Neutral8,
    fontSize: fontSize.font16,
    fontWeight: "400",
  },
  textActive: {
    // fontFamily: "NotoSans-Medium",
    fontSize: fontSize.font16,
    fontWeight: "600",
    color: colors.primary,
  },
});
export default LoginScreen;
