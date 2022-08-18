import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BaseButton from "../../components/base-button/base-button";
import BaseInput from "../../components/base-input/base-input";
import { theme, Container } from "../../constants/index";
import Logo from "../../../assets/svg/LogoBlue.svg";
import ArrowRight from "../../../assets/svg/ArrowRight.svg";
import EyeSlash from "../../../assets/svg/EyeSlash.svg";

const colors = theme.colors;
const fontSize = theme.fontSize;
function LoginScreen() {
  const [isHide, setIsHide] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        // keyboardDismissMode="on-drag"
        // enableResetScrollToCoords
      >
        <Logo width={49.64} height={50} style={styles.logo} />
        <View style={styles.viewLogin}>
          <Text style={styles.textTitle}>Login</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <BaseInput
                  title="Email"
                  value={values.email}
                  styleContainer={styles.inputContainer}
                  onChangeText={handleChange("email")}
                  placeholder="Your email"
                  placeholderTextColor={colors.Neutral3}
                  autoComplete="email"
                  keyboardType="email-address"
                />
                <BaseInput
                  title="Password"
                  value={values.password}
                  styleContainer={styles.inputContainer}
                  onChangeText={handleChange("password")}
                  placeholder="Your password"
                  placeholderTextColor={colors.Neutral3}
                  IconView={<EyeSlash height={24} width={24} />}
                  secureTextEntry={isHide}
                  onPressIcon={() => {
                    setIsHide(!isHide);
                  }}
                />
                <View style={styles.viewForgotPassword}>
                  <View />
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textForgotPassword}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <BaseButton
                  title={"Login"}
                  IconView={<ArrowRight height={20} width={20} />}
                  style={styles.baseButton}
                  onPress={handleSubmit}
                />
                <View style={styles.viewRegister}>
                  <Text style={styles.text}>Don't have an account?</Text>
                  <TouchableOpacity>
                    <Text style={styles.textActive}>{" Register"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
        <View />
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
