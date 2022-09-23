import { useFormik } from "formik";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MembersApi } from "../../api";
import { BaseHeader, VectorBack } from "../../components";
import { Navigation, OtherProfile, theme } from "../../constant";
import { useDebounce } from "../../hooks";
import {
  ListFooterComponent,
  ListHeaderComponent,
  ModalFilter,
} from "./components";
import { initialFilter, initialValues } from "./constants";
import { handleCaseFilter } from "./controller";
import { IFilter, IGender } from "./model";

function CommunityDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  //navigation
  const { community, joined } = route.params;

  //state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [members, setMembers] = useState<any[]>([]);
  const [filterMembers, setFilterMembers] = useState<any[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [filter, onChangeFilter] = useState<IFilter>(initialFilter);

  //use formik
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

  //use hook
  const debounce = useDebounce(formik.values.search);

  //ref
  const refInputModal = useRef<TextInput>(null);
  const firstRenderedRef = useRef(false);

  useEffect(() => {
    getMembers();
  }, []);

  useEffect(() => {
    if (firstRenderedRef.current) {
      let newFilter = handleCaseFilter(debounce, members, filter);
      setFilterMembers([...newFilter]);
    } else {
      firstRenderedRef.current = true;
    }
  }, [debounce, filter]);

  const getMembers = async () => {
    try {
      const res: any = await MembersApi.getAll();
      setMembers([...res]);
      setFilterMembers([...res]);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handlePressMember = (userOther: any) => {
    navigation.navigate(Navigation.OTHER_PROFILE, {
      userOther: userOther,
      type: OtherProfile.OTHER,
    });
  };

  const handlePressGender = (item: IGender) => {
    formik.setFieldValue("gender", item.value);
  };

  const handleClearModal = () => {
    if (filter.minAge !== "" || filter.maxAge !== "" || filter.gender !== "") {
      onChangeFilter(initialFilter);
    }
    handleDefaultModal();
    refInputModal.current?.blur();
  };

  const handleCancelModal = () => {
    handleDefaultModal(filter.minAge, filter.maxAge, filter.gender);
    setModalVisible(false);
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

  const handlePressJoin = () => navigation.navigate(Navigation.FORUM_STACK);

  return (
    <View style={styles.container}>
      <BaseHeader
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={[]}
          renderItem={() => <></>}
          keyExtractor={keyExtractor}
          bounces={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <ListHeaderComponent
              community={community}
              onChangeText={formik.handleChange("search")}
              value={formik.values.search}
              onPressFilter={() => setModalVisible(true)}
              onPressJoin={handlePressJoin}
              joined={joined}
            />
          }
          ListFooterComponent={
            <ListFooterComponent
              isLoading={isLoading}
              data={filterMembers}
              onPress={handlePressMember}
            />
          }
        />
      </KeyboardAwareScrollView>
      <ModalFilter
        ref={refInputModal}
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
  container: {
    paddingHorizontal: 24,
    backgroundColor: theme.colors.Neutral0,
    paddingBottom: 57,
  },
  styleHeader: {
    marginTop: 81,
    paddingBottom: 24,
  },
});

export default CommunityDetailScreen;
