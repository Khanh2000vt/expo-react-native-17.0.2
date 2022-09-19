import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
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
  VectorBack,
} from "../../components";
import { OtherProfile, theme } from "../../constants";
import { useDebounce } from "../../hooks";

function CommunityDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { community, joined } = route.params;
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [value, onChangeValue] = useState<string>("");
  const [filter, onChangeFilter] = useState<{
    minAge: string;
    maxAge: string;
    gender: string;
  }>();
  const debounce = useDebounce(value);
  const [members, setMembers] = useState<any[]>([]);
  const [filterMembers, setFilterMembers] = useState<any[]>([]);
  useEffect(() => {
    getMembers();
    setIsJoined(!!joined);
  }, []);

  useEffect(() => {
    let listMembers = members;
    if (members.length > 0) {
      if (debounce) {
        listMembers = listMembers.filter((member) => {
          return (
            member.name.toLowerCase().indexOf(debounce.toLowerCase()) !== -1
          );
        });
      }
      if (!!filter?.minAge) {
        listMembers = listMembers.filter((member) => {
          return member.age >= filter?.minAge;
        });
      }
      if (!!filter?.maxAge) {
        listMembers = listMembers.filter((member) => {
          return member.age <= filter?.maxAge;
        });
      }
      if (filter?.gender) {
        let isMale = filter?.gender === "male";
        listMembers = listMembers.filter((member) => {
          return member.gender === isMale;
        });
      }
    }
    setFilterMembers([...listMembers]);
  }, [debounce, filter]);

  async function getMembers() {
    try {
      const res: any = await MembersApi.getAll();
      setMembers([...res]);
      setFilterMembers([...res]);
      setIsLoading(false);
    } catch (e) {
      setMembers([]);
    }
  }
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => (
    <BaseMember
      item={item}
      onPress={(userOther: any) => {
        navigation.navigate("OtherProfileScreen", {
          userOther: userOther,
          type: OtherProfile.OTHER,
        });
      }}
    />
  );
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <BaseHeader
          IconLeft={<VectorBack />}
          onPressLeft={() => navigation.goBack()}
          styleHeader={styles.styleHeader}
        />
        <FlatList
          data={[]}
          renderItem={() => <></>}
          keyExtractor={keyExtractor}
          style={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              <View style={styles.body}>
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
                    onPressFilter={onChangeFilter}
                    onChangeText={onChangeValue}
                  />
                </View>
              </View>
            </View>
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
                style={styles.flatListMember}
              />
            )
          }
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: theme.colors.Neutral0,
    // marginBottom: 57,
    paddingBottom: 57,
  },
  flatListContainer: {},
  body: {
    marginTop: 30,
  },
  styleHeader: {
    marginTop: 30,
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
  flatListMember: {
    // flex: 1,
  },
});

export default CommunityDetailScreen;
