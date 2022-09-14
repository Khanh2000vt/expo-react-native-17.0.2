import { useFormik } from "formik";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import {
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseIntroduction,
  BaseModal,
  Plus,
  Tick,
  VectorBack,
} from "../../components";
import { gender, theme } from "../../constants";
import { RootState } from "../../redux";
import { ListYear } from "../../utils";
function UpdateProfileScreen({ navigation }: { navigation: any }) {
  const user = useSelector((state: RootState) => state.auth.user);
  const formik = useFormik({
    initialValues: {
      avatar: user.avatar,
      username: user.username,
      gender: user.gender ? "male" : "female",
      birthYear: "2000",
      introduction: user.introduction,
    },
    onSubmit: (values: any) => {},
  });

  return (
    <View style={styles.container}>
      <BaseHeader
        title="Update Profile"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.viewProfile}>
          <Text style={styles.textTitle}>Profile picture</Text>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonChoosePicture}
          >
            <Text style={styles.textButtonChoose}>Choose picture</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewInfo}>
          <Text style={styles.textTitle}>Profile info</Text>
          <View style={styles.viewEmail}>
            <Text style={styles.textTitleEmail}>Email</Text>
            <Text style={[styles.textTitleEmail, styles.textBodyEmail]}>
              Yuki.Matsuura@gmail.com
            </Text>
          </View>
          <BaseInput
            title="Username"
            value={formik.values.username}
            styleContainer={styles.inputContainer}
            onChangeText={formik.handleChange("username")}
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
            value={formik.values.introduction}
            styleContainer={styles.inputContainer}
            onChangeText={formik.handleChange("introduction")}
            placeholderTextColor={theme.colors.Neutral3}
            multiline
            textAlignVertical="top"
            style={styles.input}
            styleBody={styles.inputBody}
          />
        </View>

        <View style={styles.viewSNS}>
          <Text style={styles.textTitle}>SNS accounts</Text>
          <View style={styles.viewSocial}>
            {Array(3)
              .fill(0)
              .map((_, index) => {
                return <BaseIntroduction key={index} />;
              })}
          </View>
          <BaseButton
            title="Add New Address"
            option="solid"
            color={theme.colors.Neutral4}
            style={styles.buttonAdd}
            styleText={styles.textButtonAdd}
            IconLeft={<Plus />}
            onPress={() => {}}
          />
        </View>

        <BaseButton
          title="Update"
          IconRight={<Tick height={20} width={20} />}
          style={styles.buttonUpdate}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Neutral0,
    paddingVertical: 50,
  },
  styleHeader: {
    paddingHorizontal: 33,
  },
  body: {
    paddingHorizontal: 24,
  },
  viewProfile: {
    marginTop: 36,
  },
  viewInfo: {
    marginTop: 31,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputBody: {
    height: 150,
    paddingTop: 16,
  },
  input: {
    height: 150,
  },
  viewPicker: {
    flexDirection: "row",
    marginBottom: 16,
    zIndex: 100,
  },
  buttonAdd: {
    borderStyle: "dashed",
    height: 58,
  },
  textButtonAdd: {
    fontWeight: "400",
  },
  viewSNS: {
    marginTop: 59,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral10,
    lineHeight: 25,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 52,
  },
  buttonChoosePicture: {
    alignSelf: "center",
    padding: 21,
  },
  textButtonChoose: {
    // flex: 1,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    color: theme.colors.primary,
    lineHeight: 22,
  },
  viewEmail: {
    marginTop: 22,
    marginBottom: 24,
  },
  textTitleEmail: {
    fontWeight: "500",
    fontSize: theme.fontSize.font16,
    color: theme.colors.Neutral4,
    lineHeight: 25.6,
  },
  textBodyEmail: {
    color: theme.colors.Neutral10,
    lineHeight: 21.79,
    marginTop: 9,
  },
  buttonUpdate: {
    marginBottom: 60,
    marginTop: 36,
  },
  viewSocial: {
    marginTop: 20,
  },
});

export default UpdateProfileScreen;
