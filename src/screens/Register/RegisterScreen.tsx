import { useFormik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {
  ArrowRight,
  BaseAreaView,
  BaseButton,
  BaseInput,
  BaseModal,
  Tick,
  VectorBack,
} from "@components";
import { gender, SCREEN } from "@constant/index";
import { ListYear } from "@utils";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";
import { initialValues, validationSchema } from "./controller";
import { useDispatch } from "react-redux";
import { updateUser } from "@redux";
type INav = LoginTabProps<SCREEN.REGISTER>["navigation"];

const colors = theme.colors;
const fontSize = theme.fontSize;

function RegisterScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<INav>();
  const [agree, setAgree] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("OTPScreen");
      const params = {
        ...values,
        birth_year: values.birth_year === "male",
      };
      dispatch(updateUser(params));
      navigation.navigate(SCREEN.OTP, {
        type: 1,
      });
    },
  });

  return (
    <BaseAreaView
      style={styles.container}
      title="Register"
      header={true}
      IconLeft={<VectorBack />}
      onPressLeft={() => navigation.goBack()}
      styleHeader={styles.styleHeader}
      scroll
    >
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
      <BaseInput
        title="Username"
        value={formik.values.username}
        styleContainer={styles.inputContainer}
        onChangeText={formik.handleChange("username")}
        placeholder="Your username"
        placeholderTextColor={colors.Neutral3}
        error={formik.touched.username}
        messageError={formik.errors.username}
      />

      <View style={styles.viewPicker}>
        <BaseModal
          data={gender}
          title="Gender"
          placeholder="-Gender -"
          onChangeValue={formik.handleChange("gender")}
          styleContainer={{ marginRight: 8 }}
          error={formik.touched.gender}
          messageError={formik.errors.gender}
          value={formik.values.gender}
        />
        <BaseModal
          data={ListYear()}
          title="Birth Year"
          placeholder="- Birth Year -"
          onChangeValue={formik.handleChange("birth_year")}
          styleContainer={{ marginLeft: 8 }}
          error={formik.touched.birth_year}
          messageError={formik.errors.birth_year}
          value={formik.values.birth_year}
        />
      </View>
      <BaseInput
        title="Introduction Code"
        value={formik.values.introduction}
        styleContainer={styles.inputContainer}
        onChangeText={formik.handleChange("introduction")}
        placeholderTextColor={colors.Neutral3}
      />
      <View style={styles.viewTerms}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.buttonAgree,
            {
              backgroundColor: agree ? colors.primary : colors.Neutral0,
            },
          ]}
          onPress={() => setAgree(!agree)}
        >
          {agree && <Tick />}
        </TouchableOpacity>
        <Text style={styles.textDefault}>I agree to the</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.textDefault, styles.textTerms]}>
            {" Terms of Use"}
          </Text>
        </TouchableOpacity>
      </View>
      <BaseButton
        title={"Submit"}
        IconRight={<ArrowRight height={20} width={20} />}
        style={styles.baseButton}
        onPress={formik.handleSubmit}
        disabled={!agree}
      />
    </BaseAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 43,
  },
  styleHeader: {
    height: 50,
    paddingHorizontal: 33,
  },
  inputContainer: {
    marginBottom: 16,
  },
  baseButton: {
    marginTop: 33,
    marginBottom: 24,
  },
  viewPicker: {
    flexDirection: "row",
    marginBottom: 16,
    zIndex: 100,
  },
  viewTerms: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputPicker: {
    flex: 1,
  },
  buttonAgree: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textDefault: {
    fontSize: fontSize.font18,
    marginLeft: 12,
    fontWeight: "400",
    color: colors.Neutral10,
  },
  textTerms: {
    marginLeft: 0,
    fontWeight: "600",
    color: colors.primary,
  },
  textPlaceholderDropDown: {
    fontWeight: "400",
    color: "red",
    textAlign: "center",
  },
});
export default RegisterScreen;
