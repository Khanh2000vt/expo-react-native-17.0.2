import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFormik } from "formik";
import {
  ArrowRight,
  BaseAreaView,
  BaseButton,
  BaseGettingStarted,
  BaseInput,
  BaseMediaPicker,
  BaseModal,
} from "@components";
import { gender, Navigation } from "@constant/index";
import { IImage } from "@model";
import { theme } from "@theme";
import { ListYear } from "@utils";
const colors = theme.colors;

const initialValues = {
  profession: "",
  gender: "",
  birthYear: "",
  introduction: "",
};

const avatarDefault = "../../../assets/png/avtDefault.png";

function PersonalIntroductionScreen({ navigation }: { navigation: any }) {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      navigation.navigate(Navigation.LOGIN);
    },
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [avatar, setAvatar] = useState<IImage>();

  const handlePickComplete = (result: IImage) => {
    setAvatar(result);
  };

  //avatar.uri
  let test = avatar !== undefined ? { uri: avatar.uri } : avatarDefault;
  return (
    <>
      <BaseAreaView scroll>
        <BaseGettingStarted
          titleScreen="Personal Introduction"
          step={3}
          titleStep="Profile picture"
        />
        <View style={styles.containerProfile}>
          <Image
            source={
              avatar !== undefined
                ? { uri: avatar.uri }
                : require(avatarDefault)
            }
          />
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.textChoosePicture}>Choose picture</Text>
          </TouchableOpacity>
        </View>
        <BaseGettingStarted
          showTitle={false}
          step={4}
          titleStep="Profile info"
        />
        <BaseModal
          data={gender}
          title="Gender"
          placeholder="-Gender -"
          onChangeValue={formik.handleChange("profession")}
          error={formik.touched.profession}
          messageError={formik.errors.profession}
          value={formik.values.profession}
          styleContainer={styles.modal}
        />
        <View style={[{ flexDirection: "row" }, styles.modal]}>
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
          title="Introduction"
          onChangeText={formik.handleChange("introduction")}
          value={formik.values.introduction}
          styleContainer={styles.modal}
          multiline
          styleBody={{ height: 120 }}
          style={{ height: 120 }}
          // blurOnSubmit={true}
        />
        <BaseButton
          title="Start"
          IconRight={<ArrowRight height={20} width={20} />}
          style={styles.button}
          onPress={formik.handleSubmit}
        />
        <BaseMediaPicker
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          onPickComplete={handlePickComplete}
        />
      </BaseAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containerProfile: {
    marginBottom: 11,
    marginTop: 52,
    alignSelf: "center",
  },
  textTitleInput: {
    color: colors.Neutral6,
  },
  textChoosePicture: {
    lineHeight: 21.79,
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 16,
    padding: 5,
  },
  button: {
    marginBottom: 75,
    marginTop: 48,
  },
  modal: {
    marginTop: 20,
  },
});
export default PersonalIntroductionScreen;
