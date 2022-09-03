import { useFormik } from "formik";
import React, { memo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Input, theme } from "../../constants/index";
import { BaseButton } from "../BaseButton";
import { EyeSlash, MagnifyingGlass, SlidersHorizontal, Tick } from "../Icon";
import { PropsBaseInput } from "./BaseInputModel";
const colors = theme.colors;
const fontSize = theme.fontSize;

enum Option {
  SEARCH = "search",
  PASSWORD = "password",
  DEFAULT = "default",
  SEARCH_FILTER = "search-filter",
}

const listCheckBox = [
  {
    id: 1,
    label: "Female",
    value: "female",
  },
  {
    id: 2,
    label: "Male",
    value: "male",
  },
  {
    id: 3,
    label: "Others",
    value: "others",
  },
];

function BaseInput({
  title,
  option = Option.DEFAULT,
  style,
  styleContainer,
  error,
  messageError,
  styleTitle,
  styleBody,
  onPressFilter,
  ...props
}: PropsBaseInput) {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const refInputModal = useRef<TextInput>(null);

  const formik = useFormik({
    initialValues: {
      minAge: "",
      maxAge: "",
      gender: "",
    },
    onSubmit: (value: any) => {
      //handle modal selected value
      console.log(value);
      onPressFilter && onPressFilter(value);
      setModalVisible(false);
    },
  });

  function handlePressGender(item: {
    id: number;
    label: string;
    value: string;
  }) {
    // setItemSelected(item);
    formik.setFieldValue("gender", item.value);
  }

  function handleClearModal() {
    // setItemSelected(undefined);
    refInputModal.current?.blur();
    formik.setFieldValue("gender", "");
    formik.setFieldValue("minAge", "");
    formik.setFieldValue("maxAge", "");
  }

  return (
    <View style={styleContainer}>
      {!!title && <Text style={[styles.text, styleTitle]}>{title}</Text>}
      <View
        style={[
          styles.viewInput,
          styleBody,
          {
            paddingHorizontal:
              option === Option.SEARCH || option === Option.SEARCH_FILTER
                ? 16
                : 0,
          },
          { paddingRight: option === Option.DEFAULT ? 16 : 0 },
        ]}
      >
        {(option === Option.SEARCH || option === Option.SEARCH_FILTER) && (
          <View>
            <MagnifyingGlass />
          </View>
        )}
        <TextInput
          style={[styles.textInput, style]}
          secureTextEntry={hidePassword && option === Option.PASSWORD}
          {...props}
        />
        {option === Option.PASSWORD && (
          <TouchableOpacity
            style={styles.viewIcon}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <EyeSlash height={24} width={24} />
          </TouchableOpacity>
        )}
        {option === Option.SEARCH_FILTER && (
          <TouchableOpacity
            style={styles.viewIcon}
            onPress={() => setModalVisible(!isModalVisible)}
          >
            <SlidersHorizontal height={28} width={28} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.textError}>{messageError}</Text>}
      {option === Option.SEARCH_FILTER && (
        <Modal
          isVisible={isModalVisible}
          // animationIn="fadeIn"
          // animationOut="fadeOut"
          onSwipeComplete={() => setModalVisible(false)}
          useNativeDriver
          useNativeDriverForBackdrop
          backdropOpacity={0.2}
          scrollOffset={1}
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
          style={{ margin: 0, justifyContent: "center" }}
          onModalWillShow={() => {}}
          swipeDirection={["up", "down", "left", "right"]}
        >
          <View style={styles.modalContainer}>
            {/* Age Modal */}
            <Text style={styles.modalTitle}>Age</Text>
            <View style={styles.viewInputModal}>
              <TextInput
                ref={refInputModal}
                style={styles.textInputModal}
                keyboardType="number-pad"
                maxLength={3}
                onChangeText={formik.handleChange("minAge")}
                value={formik.values.minAge}
              />
              <View style={styles.lineModal} />
              <TextInput
                ref={refInputModal}
                style={styles.textInputModal}
                keyboardType="number-pad"
                maxLength={3}
                onChangeText={formik.handleChange("maxAge")}
                value={formik.values.maxAge}
              />
            </View>
            {/* Gender Modal */}
            <View>
              <Text style={styles.modalTitle}>Gender</Text>
              {listCheckBox.map((item, _index) => {
                const isSelected = formik.values.gender === item.value;
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.modalItem}
                    onPress={() => handlePressGender(item)}
                  >
                    <View
                      style={[
                        styles.modalCheckIcon,
                        isSelected && { backgroundColor: colors.primary },
                      ]}
                    >
                      {isSelected && <Tick />}
                    </View>
                    <Text style={styles.textCheckBox}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{ flexDirection: "row" }}>
              <BaseButton
                title="Apply"
                style={[styles.buttonModal, { marginRight: 10.5 }]}
                // disabled
                onPress={formik.handleSubmit}
              />
              <BaseButton
                title="Clear"
                option="solid"
                style={[styles.buttonModal, styles.buttonModalRight]}
                backgroundColor={colors.Neutral8}
                color={colors.Neutral4}
                onPress={handleClearModal}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewInput: {
    backgroundColor: colors.colorInput,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    height: Input.HEIGHT,
    marginTop: 4,
  },
  viewIcon: {
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  textInput: {
    flex: 1,
    height: Input.HEIGHT,
    paddingLeft: 16,
  },
  text: {
    fontWeight: "500",
    color: colors.Neutral4,
    fontSize: fontSize.font16,
  },
  //set test text
  textError: {
    fontSize: 9,
    color: "red",
  },

  //modal
  modalContainer: {
    backgroundColor: colors.Neutral8,
    borderRadius: 8,
    marginHorizontal: 24,
    paddingTop: 31,
    paddingHorizontal: 32,
    paddingBottom: 36,
  },
  viewInputModal: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    // flex: 1,
  },
  textInputModal: {
    flex: 1,
    backgroundColor: colors.Neutral6,
    paddingHorizontal: 32,
    borderRadius: 8,
    height: 58,
    color: colors.Neutral0,
    fontSize: fontSize.font18,
    fontWeight: "600",
  },
  lineModal: {
    width: 16,
    height: 2,
    backgroundColor: colors.Neutral6,
    marginHorizontal: 17.61,
  },
  modalTitle: {
    color: colors.Neutral0,
    fontWeight: "600",
    fontSize: fontSize.font16,
    marginBottom: 16,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    width: "60%",
  },
  modalCheckIcon: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Neutral6,
    borderRadius: 8,
    marginRight: 12,
  },
  textCheckBox: {
    fontWeight: "400",
    fontSize: fontSize.font18,
    color: colors.Neutral0,
  },
  buttonModal: {
    flex: 1,
    height: 51,
  },
  buttonModalRight: {
    marginLeft: 10.5,
    borderColor: colors.Neutral4,
  },
});

export default memo(BaseInput);
