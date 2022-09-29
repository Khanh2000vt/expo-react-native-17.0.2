import { BaseInput } from "@components";
import { useDebounce } from "@hooks";
import { IMemberAPI } from "@model";
import { theme } from "@theme";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { initialFilter, initialValues } from "../constants";
import { handleCaseFilter } from "../controller";
import { IFilter, IGender } from "../model";
import ModalFilter from "./ModalFilter";

interface IState {
  setFilterMembers: React.Dispatch<React.SetStateAction<IMemberAPI[]>>;
  members: IMemberAPI[];
}

function FindComponent({ setFilterMembers, members }: IState) {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [filter, onChangeFilter] = useState<IFilter>(initialFilter);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: any) => {
      let newFilter: IFilter = {
        minAge: values.minAge,
        maxAge: values.maxAge,
        gender: values.gender,
      };
      onChangeFilter(newFilter);
      setModalVisible(false);
    },
  });
  const debounce = useDebounce(formik.values.search);
  const refModal = useRef<TextInput>(null);
  const firstRenderedRef = useRef(false);

  useEffect(() => {
    if (firstRenderedRef.current) {
      let newFilter = handleCaseFilter(debounce, members, filter);
      setFilterMembers([...newFilter]);
    } else {
      firstRenderedRef.current = true;
    }
  }, [debounce, filter]);

  const handlePressGender = (item: IGender) => {
    formik.setFieldValue("gender", item.value);
  };

  const handleCancelModal = () => {
    handleDefaultModal(filter.minAge, filter.maxAge, filter.gender);
    setModalVisible(false);
  };

  const handleClearModal = () => {
    if (filter.minAge !== "" || filter.maxAge !== "" || filter.gender !== "") {
      onChangeFilter(initialFilter);
    }
    handleDefaultModal();
    refModal.current?.blur();
  };

  const handlePressFilter = () => {
    setModalVisible(true);
  };

  const handleDefaultModal = (
    minAge: string = "",
    maxAge: string = "",
    gender: string = ""
  ) => {
    formik.setFieldValue("minAge", minAge);
    formik.setFieldValue("maxAge", maxAge);
    formik.setFieldValue("gender", gender);
  };

  return (
    <View>
      <Text style={styles.textTitleMembers}>Members</Text>
      <BaseInput
        option="search-filter"
        placeholder="Search by Name"
        styleContainer={styles.inputSearch}
        onPressFilter={handlePressFilter}
        onChangeText={formik.handleChange("search")}
        value={formik.values.search}
      />
      <ModalFilter
        ref={refModal}
        isVisible={isModalVisible}
        onPressCancelModal={handleCancelModal}
        onPressClearModal={handleClearModal}
        onChangeMinAge={formik.handleChange("minAge")}
        onChangeMaxAge={formik.handleChange("maxAge")}
        onPressGender={handlePressGender}
        valueMinAge={formik.values.minAge}
        valueMaxAge={formik.values.maxAge}
        onPressApply={formik.handleSubmit}
        genderSelected={formik.values.gender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitleMembers: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
  },
  inputSearch: {
    marginVertical: 24,
    marginBottom: 16,
  },
});

export default FindComponent;
