import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import {
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseMember,
  SvgInfo,
  SvgMessages,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";

function CommunityDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { item } = route.params;
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => <BaseMember />;
  return (
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
                <ImageBackground
                  source={require("../../../assets/png/Background.png")}
                  resizeMode="stretch"
                  style={styles.imageBackground}
                >
                  <View style={styles.backgroundAbsolute} />
                  <View>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <Text style={styles.textMembers}>
                      {item.members} members
                    </Text>
                  </View>
                  <BaseButton
                    title="Participate"
                    style={styles.buttonPoster}
                    onPress={() => {}}
                  />
                </ImageBackground>
              </View>

              <View style={styles.viewAdvForum}>
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
                <View style={[styles.flex, styles.viewInfoAdvForum]}>
                  <SvgInfo />
                  <Text style={styles.textInfoAdvForum}>
                    Join community to enter this forum
                  </Text>
                </View>
              </View>

              <View>
                <Text style={styles.textTitleMembers}>Members</Text>
                <BaseInput
                  option="search-filter"
                  placeholder="Search by Name"
                  styleContainer={styles.inputSearch}
                  onPressFilter={() => {}}
                />
              </View>
            </View>
          </View>
        }
        ListFooterComponent={
          <FlatList
            data={dataTest}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        }
      />
    </View>
  );
}

const dataTest = [
  { id: 1, title: "Gaming", members: "256" },
  { id: 2, title: "Outdoors", members: "3621" },
  { id: 3, title: "Music", members: "1056" },
  { id: 4, title: "Movies", members: "20335" },
  { id: 5, title: "News and Society", members: "256" },
  { id: 6, title: "Automotive", members: "1334" },
  { id: 7, title: "Macro", members: "1434" },
  { id: 8, title: "React", members: "5634" },
  { id: 9, title: "Native", members: "1243" },
  { id: 10, title: "Jock", members: "375" },
  { id: 11, title: "Home", members: "578" },
  { id: 12, title: "Screen", members: "431", gender: "male", age: 18 },
];

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
    borderRadius: 8,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 35,
    borderRadius: 8,
    paddingBottom: 28,
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
    paddingBottom: 34,
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
  textBodyAdvForum: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    color: theme.colors.Neutral6,
  },
  viewInfoAdvForum: {
    alignItems: "center",
    marginTop: 32,
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
});

export default CommunityDetailScreen;
