import { useNavigation } from "@react-navigation/native";
import { theme } from "@theme";
import { useFormik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  BaseButton,
  BaseHeader,
  BaseInput,
  VectorBack,
} from "../../components";
import { arrayInput, initialValues, validationSchema } from "./constant";
import { Title } from "./enum";

function ChangePasswordScreen() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigation.goBack();
    },
  });

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
          {arrayInput.map((input) => (
            <BaseInput
              key={input.id}
              option="password"
              title={input.title}
              value={formik.values[input.type]}
              styleContainer={styles.inputContainer}
              onChangeText={formik.handleChange(input.type)}
              error={formik.touched[input.type]}
              messageError={formik.errors[input.type]}
            />
          ))}
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
