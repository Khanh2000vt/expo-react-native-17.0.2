import { BaseButton, BaseHeader, BaseInput, VectorBack } from "@components";
import { useNavigation } from "@react-navigation/native";
import { getUserRedux, logoutAuth, updateUser } from "@redux";
import { theme } from "@theme";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IFormikChange, initialValues, validationSchema } from "./constant";
import { Password, Title } from "./enum";

function ChangePasswordScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userRedux = useSelector(getUserRedux);
  const [isEditableNew, setIsEditableNew] = useState<boolean>(true);
  const [isEditableConfirm, setIsEditableConfirm] = useState<boolean>(true);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: IFormikChange) => {
      if (values.current !== userRedux.password) {
        formik.setFieldValue("current", "", false);
        formik.setFieldValue("new", "", false);
        formik.setFieldValue("confirm", "", false);
        formik.setFieldError("current", "Password is incorrect");
      } else {
        console.log("Di vao else");
        const params = {
          password: values.confirm,
        };
        setTimeout(() => {
          console.log("Di vao day");
          dispatch(logoutAuth());
        }, 500);
        dispatch(updateUser(params));
      }
    },
  });

  useEffect(() => {
    const editableNew = formik.values.current.length === 0;
    setIsEditableNew(editableNew);
  }, [formik.values.current.length === 0]);

  useEffect(() => {
    const editableConfirm =
      formik.values.new.length === 0 || !!formik.errors.new;
    setIsEditableConfirm(editableConfirm);
  }, [formik.values.new, formik.errors.new]);

  // console.log("password is: ", userRedux.password);

  return (
    <View style={styles.container}>
      <BaseHeader
        title={Title.CHANGE_PASSWORD}
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <View style={styles.body}>
        <View>
          <BaseInput
            title={Password.CURRENT}
            option="password"
            value={formik.values.current}
            onChangeText={formik.handleChange("current")}
            styleContainer={styles.inputContainer}
            error={formik.touched.current}
            messageError={formik.errors.current}
          />
          <BaseInput
            title={Password.NEW}
            option="password"
            value={formik.values.new}
            onChangeText={formik.handleChange("new")}
            styleContainer={[
              styles.inputContainer,
              isEditableNew && { opacity: 0.4 },
            ]}
            error={true}
            messageError={
              formik.errors.new === "No new password provided" &&
              formik.touched.new === undefined
                ? ""
                : formik.errors.new
            }
            editable={!isEditableNew}
          />
          <BaseInput
            title={Password.CONFIRM}
            option="password"
            value={formik.values.confirm}
            onChangeText={formik.handleChange("confirm")}
            styleContainer={[
              styles.inputContainer,
              isEditableConfirm && { opacity: 0.4 },
            ]}
            editable={!isEditableConfirm}
            error={true}
            messageError={
              formik.values.confirm.length === 0 &&
              formik.touched.confirm === undefined
                ? ""
                : formik.errors.confirm
            }
          />
        </View>
        <BaseButton
          title={Title.CHANGE_PASSWORD}
          onPress={formik.handleSubmit}
        />
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
