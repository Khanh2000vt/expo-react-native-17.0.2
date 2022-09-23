import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MembersApi } from "../../api";
import {
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseMember,
  CaretRight,
  SingOut19,
  SvgInfo,
  SvgMessages,
  Tick,
  VectorBack,
} from "../../components";
import { OtherProfile, theme } from "../../constants";
import { useDebounce } from "../../hooks";
import Modal from "react-native-modal";
import { useFormik } from "formik";
import { initialFilter, initialValues, listCheckBox } from "./constants";
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

  //state
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [members, setMembers] = useState<any[]>([]);
  const [filterMembers, setFilterMembers] = useState<any[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [filter, onChangeFilter] = useState<IFilter>(initialFilter);

  //use hook
  const debounce = useDebounce(formik.values.search);

  //ref
  const refInputModal = useRef<TextInput>(null);

  useEffect(() => {
    getMembers();
    setIsJoined(!!joined);
  }, []);

  useEffect(() => {
    try {
      if (debounce || !!filter?.minAge || !!filter?.maxAge || filter?.gender) {
        if (debounce) {
          setFilterMembers(
            members.filter((member) => {
              return (
                member.name.toLowerCase().indexOf(debounce.toLowerCase()) !== -1
              );
            })
          );
        }
        if (!!filter?.minAge) {
          setFilterMembers(
            members.filter((member) => {
              return member.age >= filter?.minAge;
            })
          );
        }
        if (!!filter?.maxAge) {
          setFilterMembers(
            members.filter((member) => {
              return member.age <= filter?.maxAge;
            })
          );
        }
        if (filter?.gender) {
          let isMale = filter?.gender === "male";
          setFilterMembers(
            members.filter((member) => {
              return member.gender === isMale;
            })
          );
        }
      } else {
        setFilterMembers([...members]);
      }
    } catch {
      setFilterMembers([]);
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
  const renderItem = ({ item }: { item: any }) => {
    const handlePress = (userOther: any) => {
      navigation.navigate("OtherProfileScreen", {
        userOther: userOther,
        type: OtherProfile.OTHER,
      });
    };
    return <BaseMember item={item} onPress={handlePress} />;
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
            <>
              <View style={styles.poster}>
                <Image
                  source={{ uri: community.image_url }}
                  style={styles.imageBackground}
                  resizeMode="stretch"
                />
                <View style={styles.backgroundAbsolute} />
                <View>
                  <Text style={styles.textTitle}>{community.title}</Text>
                  <Text style={styles.textMembers}>
                    {community.members} members
                  </Text>
                </View>
                <BaseButton
                  title={isJoined ? "Leaving" : "Participate"}
                  IconRight={isJoined && <SingOut19 />}
                  style={styles.buttonPoster}
                  backgroundColor={
                    isJoined ? theme.colors.Semantic4 : theme.colors.primary
                  }
                  onPress={() => setIsJoined(!isJoined)}
                />
              </View>

              <View
                style={[
                  styles.viewAdvForum,
                  { paddingBottom: isJoined ? 20 : 34 },
                ]}
              >
                <View style={styles.flex}>
                  <SvgMessages />
                  <View style={styles.viewTextAdvForum}>
                    <Text style={styles.textTitleAdvForum}>
                      Real-time Forum
                    </Text>
                    <Text style={styles.textBodyAdvForum}>
                      Join now to give real-time PR about yourself
                    </Text>
                  </View>
                </View>
                {isJoined ? (
                  <TouchableOpacity
                    style={[styles.flex, styles.viewInfoAdvForum]}
                    onPress={() => navigation.navigate("ForumStack")}
                  >
                    <Text style={styles.textButtonGoForum}>Go to forum</Text>
                    <CaretRight stroke={theme.colors.darkerPrimary} />
                  </TouchableOpacity>
                ) : (
                  <View style={[styles.flex, styles.viewInfoAdvForum]}>
                    <SvgInfo />
                    <Text style={styles.textInfoAdvForum}>
                      Join community to enter this forum
                    </Text>
                  </View>
                )}
              </View>

              <View>
                <Text style={styles.textTitleMembers}>Members</Text>
                <BaseInput
                  option="search-filter"
                  placeholder="Search by Name"
                  styleContainer={styles.inputSearch}
                  onPressFilter={() => setModalVisible(true)}
                  onChangeText={formik.handleChange("search")}
                  value={formik.values.search}
                />
              </View>
            </>
          }
          ListFooterComponent={
            isLoading ? (
              <View style={{ paddingBottom: 40 }}>
                <ActivityIndicator />
              </View>
            ) : (
              <FlatList
                data={filterMembers}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListEmptyComponent={<Text>Empty</Text>}
              />
            )
          }
        />
      </KeyboardAwareScrollView>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={handleCancelModal}
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0}
        // scrollOffset={1}
        onBackButtonPress={handleCancelModal}
        onBackdropPress={handleCancelModal}
        style={{ margin: 0, justifyContent: "center" }}
        swipeDirection={"down"}
      >
        <View style={styles.modalContainer}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
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
            <>
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
                        isSelected && { backgroundColor: theme.colors.primary },
                      ]}
                    >
                      {isSelected && <Tick />}
                    </View>
                    <Text style={styles.textCheckBox}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </>
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
                backgroundColor={theme.colors.Neutral8}
                color={theme.colors.Neutral4}
                onPress={handleClearModal}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: theme.colors.Neutral0,
    paddingBottom: 57,
  },
  styleHeader: {
    marginTop: 81,
    paddingBottom: 24,
  },
  poster: {
    height: 205,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 35,
    borderRadius: 8,
    paddingBottom: 28,
  },
  imageBackground: {
    borderRadius: 8,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textTitle: {
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral0,
    fontWeight: "700",
    textAlign: "center",
  },
  textMembers: {
    color: theme.colors.Neutral2,
    fontWeight: "500",
    fontSize: theme.fontSize.font14,
    textAlign: "center",
  },
  backgroundAbsolute: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 8,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonPoster: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  viewAdvForum: {
    backgroundColor: theme.colors.colorInput,
    borderRadius: 8,
    paddingTop: 26,
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 36,
  },
  viewTextAdvForum: {
    marginLeft: 26,
    flex: 1,
  },
  textTitleAdvForum: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral10,
    marginBottom: 9,
  },
  textButtonGoForum: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    color: theme.colors.darkerPrimary,
    marginHorizontal: 14,
  },
  textBodyAdvForum: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    color: theme.colors.Neutral6,
  },
  viewInfoAdvForum: {
    alignItems: "center",
    marginTop: 32,
    justifyContent: "center",
  },
  textInfoAdvForum: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    color: theme.colors.primary,
    flex: 1,
    marginLeft: 13,
  },
  textTitleMembers: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
  },
  inputSearch: {
    marginVertical: 24,
    marginBottom: 16,
  },

  //modal
  modalContainer: {
    backgroundColor: theme.colors.Neutral8,
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
  },
  textInputModal: {
    flex: 1,
    backgroundColor: theme.colors.Neutral6,
    paddingHorizontal: 32,
    borderRadius: 8,
    height: 58,
    color: theme.colors.Neutral0,
    fontSize: theme.fontSize.font18,
    fontWeight: "600",
  },
  lineModal: {
    width: 16,
    height: 2,
    backgroundColor: theme.colors.Neutral6,
    marginHorizontal: 17.61,
  },
  modalTitle: {
    color: theme.colors.Neutral0,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
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
    backgroundColor: theme.colors.Neutral6,
    borderRadius: 8,
    marginRight: 12,
  },
  textCheckBox: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral0,
  },
  buttonModal: {
    flex: 1,
    height: 51,
  },
  buttonModalRight: {
    marginLeft: 10.5,
    borderColor: theme.colors.Neutral4,
  },
});

export default CommunityDetailScreen;
