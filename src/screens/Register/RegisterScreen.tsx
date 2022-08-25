import { useFormik } from "formik";
import React, { useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ArrowRight from "../../../assets/svg/ArrowRight.svg";
import EyeSlash from "../../../assets/svg/EyeSlash.svg";
import Tick from "../../../assets/svg/Tick.svg";
import VectorBack from "../../../assets/svg/VectorBack.svg";
import BaseAreaView from "../../components/BaseAreaView/BaseAreaView";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseDropDown from "../../components/BaseDropDown/BaseDropDown";
import BaseInput from "../../components/BaseInput/BaseInput";
import { theme } from "../../constants/index";
import { createYear } from "./RegisterHandle";

const colors = theme.colors;
const fontSize = theme.fontSize;

function RegisterScreen({ navigation }: { navigation: any }) {
  const [isHide, setIsHide] = useState<boolean>(true);
  const [agree, setAgree] = useState<boolean>(false);

  const year = new Date().getFullYear();
  const getYear = useMemo(() => createYear(year), [year]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      gender: "",
      birthYear: "",
      introductionCode: "",
    },
    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email address").required("Required"),
    //   password: Yup.string()
    //     .required("No password provided.")
    //     .min(8, "Password is too short - should be 8 chars minimum.")
    //     .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    //   username: Yup.string()
    //     .required("No username provided.")
    //     .min(6, "Username is too short - should be 6 chars minimum.")
    //     .matches(/[a-zA-Z]/, "Username can only contain Latin letters."),
    //   gender: Yup.string().required("No gender provided."),
    //   birthYear: Yup.string().required("No birth year provided."),
    // }),
    onSubmit: (values) => {
      console.log("OTPScreen");
      navigation.navigate("OTPScreen");
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
        <BaseDropDown
          data={data}
          onChangeValue={formik.handleChange("gender")}
          title="Gender"
          styleView={{ marginRight: 8 }}
          placeholder="-Gender -"
          placeholderStyle={styles.textPlaceholderDropDown}
          error={formik.touched.gender}
          messageError={formik.errors.gender}
        />
        <BaseDropDown
          data={getYear}
          onChangeValue={formik.handleChange("birthYear")}
          title="Birth Year"
          styleView={{ marginLeft: 8 }}
          placeholder="- Birth Year -"
          placeholderStyle={styles.textPlaceholderDropDown}
          error={formik.touched.birthYear}
          messageError={formik.errors.birthYear}
        />
      </View>
      <BaseInput
        title="Introduction Code"
        value={formik.values.introductionCode}
        styleContainer={styles.inputContainer}
        onChangeText={formik.handleChange("introductionCode")}
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
      />
    </BaseAreaView>
  );
}

const data = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

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
