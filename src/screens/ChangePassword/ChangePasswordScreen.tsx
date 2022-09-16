import { useFormik } from "formik";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  BaseButton,
  BaseHeader,
  BaseInput,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";

enum Password {
  CURRENT = "Current password",
  NEW = "New password",
  CONFIRM = "Confirm new password",
}
enum TypePassword {
  CURRENT = "current",
  NEW = "new",
  CONFIRM = "confirm",
}

function ChangePasswordScreen({ navigation }: { navigation: any }) {
  const formik = useFormik({
    initialValues: {
      current: "",
      new: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      current: Yup.string().required("Required"),
      new: Yup.string()
        .required("No new password provided.")
        .min(6, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      confirm: Yup.string()
        .required("No password confirm provided.")
        .test("match", "Password do not match", function (passwordConfirm) {
          return passwordConfirm === this.parent.new;
        }),
    }),
    onSubmit: (values) => {},
  });

  const arrayInput = [
    {
      id: 1,
      title: Password.CURRENT,
      type: TypePassword.CURRENT,
    },
    {
      id: 2,
      title: Password.NEW,
      type: TypePassword.NEW,
    },
    {
      id: 3,
      title: Password.CONFIRM,
      type: TypePassword.CONFIRM,
    },
  ];
  return (
    <View style={styles.container}>
      <BaseHeader
        title="Change Password"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <View style={styles.body}>
        <View>
          {arrayInput.map((input) => (
            <BaseInput
              option="password"
              title={input.title}
              key={input.id}
              value={formik.values[input.type]}
              styleContainer={styles.inputContainer}
              onChangeText={formik.handleChange(input.type)}
              error={formik.touched[input.type]}
              messageError={formik.errors[input.type]}
            />
          ))}
        </View>
        <BaseButton title="Change Password" onPress={formik.handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 48,
    paddingHorizontal: 24,
    paddingBottom: 66,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 80,
  },
  inputContainer: {
    marginBottom: 16,
  },
});

export default ChangePasswordScreen;
