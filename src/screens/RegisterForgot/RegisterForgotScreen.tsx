import { useFormik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ArrowRight,
  BaseAreaView,
  BaseButton,
  BaseInput,
  BaseModal,
  VectorBack,
} from "@components";
import { gender, SCREEN } from "@constant/index";
import { ListYear } from "@utils";
import { theme } from "@theme";
import {
  arrayAccountInput,
  arraySocialInput,
  initialValues,
} from "./constants";
import { useNavigation } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";
type INav = LoginTabProps<SCREEN.REGISTER_FORGOT>["navigation"];
const colors = theme.colors;
const fontSize = theme.fontSize;

function RegisterForgotScreen() {
  const navigation = useNavigation<INav>();
  const formik = useFormik({
    initialValues: initialValues,
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
    onSubmit: (_values) => {
      navigation.navigate(SCREEN.OTP, {
        type: 2,
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
      <Text style={styles.textTitle}>Your SNS account </Text>
      <Text style={styles.textBody}>
        Add the accounts you want to increase followers
      </Text>
      <View style={styles.viewInput}>
        {arraySocialInput.map((item, index) => {
          return (
            <BaseInput
              title={item.title}
              value={formik.values[item.type]}
              styleContainer={styles.inputContainer}
              onChangeText={formik.handleChange(item.type)}
              error={formik.touched[item.type]}
              messageError={formik.errors[item.type]}
              key={index}
            />
          );
        })}
      </View>
      <Text style={styles.textTitle}>Follower account</Text>
      <View style={styles.viewInput}>
        {arrayAccountInput.map((item, index) => {
          return (
            <BaseInput
              title={item.title}
              value={formik.values[item.type]}
              styleContainer={styles.inputContainer}
              onChangeText={formik.handleChange(item.type)}
              error={formik.touched[item.type]}
              messageError={formik.errors[item.type]}
              key={index}
            />
          );
        })}
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
            onChangeValue={formik.handleChange("birthYear")}
            styleContainer={{ marginLeft: 8 }}
            error={formik.touched.birthYear}
            messageError={formik.errors.birthYear}
            value={formik.values.birthYear}
          />
        </View>
        <BaseInput
          title="Introduction Code"
          value={formik.values.introductionCode}
          styleContainer={styles.inputContainer}
          onChangeText={formik.handleChange("introductionCode")}
          placeholderTextColor={colors.Neutral3}
        />
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 37,
  },
  styleHeader: {
    height: 50,
    paddingHorizontal: 33,
  },
  viewInput: {
    marginTop: 24,
    marginBottom: 34,
  },
  inputContainer: {
    marginBottom: 16,
  },
  baseButton: {
    marginBottom: 106,
  },
  viewPicker: {
    flexDirection: "row",
    marginBottom: 16,
  },
  textTitle: {
    fontWeight: "500",
    fontSize: fontSize.font24,
    color: colors.Neutral10,
  },
  textBody: {
    fontSize: fontSize.font14,
    fontWeight: "500",
    color: colors.Neutral3,
  },
});

export default RegisterForgotScreen;
