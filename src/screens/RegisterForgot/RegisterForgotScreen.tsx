import { useFormik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import {
  ArrowRight,
  BaseAreaView,
  BaseButton,
  BaseInput,
  BaseModal,
  EyeSlash,
  VectorBack,
} from "../../components";
import { gender, theme } from "../../constants";
import { ListYear } from "../../utils";
const colors = theme.colors;
const fontSize = theme.fontSize;
enum Social {
  YOUTUBE = "youtube",
  INSTAGRAM = "instagram",
  TWITTER = "twitter",
  FACEBOOK = "facebook",
  WHATSAPP = "whatsapp",
}
function RegisterForgotScreen({ navigation }: { navigation: any }) {
  const formik = useFormik({
    initialValues: {
      youtube: "",
      instagram: "",
      twitter: "",
      facebook: "",
      whatsapp: "",
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
    onSubmit: (_values) => {
      navigation.navigate("OTPScreen", {
        type: 2,
      });
    },
  });

  const arraySocialInput = [
    {
      title: "Email",
      type: Social.YOUTUBE,
    },
    {
      title: "Instagram",
      type: Social.INSTAGRAM,
    },
    {
      title: "Twitter",
      type: Social.TWITTER,
    },
    {
      title: "Facebook",
      type: Social.FACEBOOK,
    },
    {
      title: "Whatsapp",
      type: Social.WHATSAPP,
    },
  ];

  return (
    <BaseAreaView
      style={styles.container}
      title="Register"
      header={true}
      IconLeft={<VectorBack />}
      onPressLeft={() => navigation.goBack()}
      styleHeader={styles.styleHeader}
      // paddingLeft={0}
      // paddingRight={0}
      scroll
    >
      <Text style={styles.textTitle}>Your SNS account </Text>
      <Text style={styles.textBody}>
        Add the accounts you want to increase followers
      </Text>
      <View>
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
    // padding: 0,
    paddingTop: 37,
  },
  styleHeader: {
    height: 50,
    paddingHorizontal: 33,
    // paddingTop: 80,
    // marginTop: 80,
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
